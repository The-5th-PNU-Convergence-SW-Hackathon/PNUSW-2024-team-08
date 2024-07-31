package com.hong.ForPaw.service;

import com.hong.ForPaw.controller.DTO.AlarmRequest;
import com.hong.ForPaw.controller.DTO.GroupRequest;
import com.hong.ForPaw.controller.DTO.GroupResponse;
import com.hong.ForPaw.core.errors.CustomException;
import com.hong.ForPaw.core.errors.ExceptionCode;
import com.hong.ForPaw.domain.Alarm.Alarm;
import com.hong.ForPaw.domain.Alarm.AlarmType;
import com.hong.ForPaw.domain.Chat.ChatRoom;
import com.hong.ForPaw.domain.Chat.ChatUser;
import com.hong.ForPaw.domain.Group.*;
import com.hong.ForPaw.domain.Post.Post;
import com.hong.ForPaw.domain.Post.PostType;
import com.hong.ForPaw.domain.User.User;
import com.hong.ForPaw.repository.Chat.ChatRoomRepository;
import com.hong.ForPaw.repository.Chat.ChatUserRepository;
import com.hong.ForPaw.repository.Group.*;
import com.hong.ForPaw.repository.Post.*;
import com.hong.ForPaw.repository.UserRepository;
import jakarta.persistence.EntityManager;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.*;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.*;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;

import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class GroupService {

    private final GroupRepository groupRepository;
    private final GroupUserRepository groupUserRepository;
    private final FavoriteGroupRepository favoriteGroupRepository;
    private final MeetingRepository meetingRepository;
    private final MeetingUserRepository meetingUserRepository;
    private final PostRepository postRepository;
    private final PostLikeRepository postLikeRepository;
    private final PostReadStatusRepository postReadStatusRepository;
    private final CommentRepository commentRepository;
    private final CommentLikeRepository commentLikeRepository;
    private final ChatRoomRepository chatRoomRepository;
    private final ChatUserRepository chatUserRepository;
    private final UserRepository userRepository;
    private final RedisService redisService;
    private final EntityManager entityManager;
    private final BrokerService brokerService;

    @Transactional
    public GroupResponse.CreateGroupDTO createGroup(GroupRequest.CreateGroupDTO requestDTO, Long userId){
        // 이름 중복 체크
        if(groupRepository.existsByName(requestDTO.name())){
            throw new CustomException(ExceptionCode.GROUP_NAME_EXIST);
        }

        Group group = Group.builder()
                .name(requestDTO.name())
                .region(requestDTO.region())
                .subRegion(requestDTO.subRegion())
                .description(requestDTO.description())
                .category(requestDTO.category())
                .profileURL(requestDTO.profileURL())
                .build();

        groupRepository.save(group);

        // 그룹장 설정
        User userRef = entityManager.getReference(User.class, userId);
        GroupUser groupUser = GroupUser.builder()
                .group(group)
                .user(userRef)
                .role(Role.CREATOR)
                .build();

        groupUserRepository.save(groupUser);

        // 그룹 참여자 수 1로 레디스에 저장
        redisService.storeDate("groupParticipantNum", group.getId().toString(), Long.toString(1L));

        // 그룹 채팅방 생성
        ChatRoom chatRoom = ChatRoom.builder()
                .group(group)
                .name(group.getName())
                .build();

        chatRoomRepository.save(chatRoom);

        // 그룹장 채팅방에 추가
        ChatUser chatUser = ChatUser.builder()
                .chatRoom(chatRoom)
                .user(userRef)
                .build();

        chatUserRepository.save(chatUser);

        // 그룹 채팅방의 exchange 등록 후 그룹장에 대한 큐와 리스너 등록
        String exchangeName = "chat.exchange";
        String queueName = "room." + chatRoom.getId();
        String listenerId = "room." + chatRoom.getId();

        brokerService.registerDirectExQueue(exchangeName, queueName);
        brokerService.registerChatListener(listenerId, queueName);

        return new GroupResponse.CreateGroupDTO(group.getId());
    }

    // 수정 화면에서 사용하는 API
    @Transactional
    public GroupResponse.FindGroupByIdDTO findGroupById(Long groupId, Long userId){
        // 조회 권한 체크
        checkAdminAuthority(groupId, userId);

        Group group = groupRepository.findById(groupId).orElseThrow(
                () -> new CustomException(ExceptionCode.GROUP_NOT_FOUND)
        );

        return new GroupResponse.FindGroupByIdDTO(group.getName(), group.getRegion(), group.getSubRegion(), group.getDescription(), group.getCategory(), group.getProfileURL());
    }

    @Transactional
    public void updateGroup(GroupRequest.UpdateGroupDTO requestDTO, Long groupId, Long userId){
        // 수정 권한 체크
        checkAdminAuthority(groupId, userId);

        // 이름 중복 체크
        if(groupRepository.existsByName(requestDTO.name())){
            throw new CustomException(ExceptionCode.GROUP_NAME_EXIST);
        }

        Group group = groupRepository.findById(groupId).orElseThrow(
                () -> new CustomException(ExceptionCode.GROUP_NOT_FOUND)
        );

        group.updateInfo(requestDTO.name(), requestDTO.region(), requestDTO.subRegion(), requestDTO.description(), requestDTO.category(), requestDTO.profileURL());
    }

    @Transactional
    public GroupResponse.FindAllGroupListDTO findGroupList(Long userId, String region){
        // 이 API의 페이지네이션은 0페이지인 5개만 보내줄 것이다.
        Pageable pageable = createPageable(0, 5, "id");

        // 추천 그룹 찾기
        List<GroupResponse.RecommendGroupDTO> recommendGroupDTOS = getRecommendGroupDTOS(userId, region);

        // 지역 그룹 찾기
        List<GroupResponse.LocalGroupDTO> localGroupDTOS = getLocalGroupDTOS(userId, region, pageable);

        // 새 그룹 찾기
        List<GroupResponse.NewGroupDTO> newGroupDTOS = getNewGroupDTOS(userId, pageable);

        // 내 그룹 찾기
        List<GroupResponse.MyGroupDTO> myGroupDTOS = getMyGroupDTOS(userId, pageable);

        return new GroupResponse.FindAllGroupListDTO(recommendGroupDTOS, newGroupDTOS, localGroupDTOS, myGroupDTOS);
    }

    // 지역 그룹 추가 조회
    @Transactional
    public GroupResponse.FindLocalGroupListDTO findLocalGroupList(Long userId, String region, Integer page, Integer size){
        Pageable pageable = createPageable(page, size, "id");
        List<GroupResponse.LocalGroupDTO> localGroupDTOS = getLocalGroupDTOS(userId, region, pageable);

        if(localGroupDTOS.isEmpty()){
            throw new CustomException(ExceptionCode.SEARCH_NOT_FOUND);
        }

        return new GroupResponse.FindLocalGroupListDTO(localGroupDTOS);
    }

    // 새 그룹 추가 조회
    @Transactional
    public GroupResponse.FindNewGroupListDTO findNewGroupList(Long userId, Integer page, Integer size){
        Pageable pageable = createPageable(page, size, "id");
        List<GroupResponse.NewGroupDTO> newGroupDTOS = getNewGroupDTOS(userId, pageable);

        if(newGroupDTOS.isEmpty()){
            throw new CustomException(ExceptionCode.SEARCH_NOT_FOUND);
        }

        return new GroupResponse.FindNewGroupListDTO(newGroupDTOS);
    }

    // 내 그룹 추가 조회
    @Transactional
    public GroupResponse.FindMyGroupListDTO findMyGroupList(Long userId, Integer page, Integer size){
        Pageable pageable = createPageable(page, size, "id");
        List<GroupResponse.MyGroupDTO> myGroupDTOS = getMyGroupDTOS(userId, pageable);

        if(myGroupDTOS.isEmpty()){
            throw new CustomException(ExceptionCode.SEARCH_NOT_FOUND);
        }

        return new GroupResponse.FindMyGroupListDTO(myGroupDTOS);
    }

    @Transactional
    public GroupResponse.FindGroupDetailByIdDTO findGroupDetailById(Long userId, Long groupId){
        // 그룹이 존재하지 않으면 에러
        Group group = groupRepository.findById(groupId).orElseThrow(
                () -> new CustomException(ExceptionCode.GROUP_NOT_FOUND)
        );

        // 정기 모임과 공지사항은 0페이지의 5개만 보여준다.
        Pageable pageable = createPageable(0, 5, "id");

        // 정기 모임
        List<GroupResponse.MeetingDTO> meetingDTOS = getMeetingDTOS(groupId, pageable);

        // 공지사항
        List<GroupResponse.NoticeDTO> noticeDTOS = getNoticeDTOS(userId, groupId, pageable);

        // 가입자
        List<GroupResponse.MemberDTO> memberDTOS = getMemberDTOS(groupId);

        return new GroupResponse.FindGroupDetailByIdDTO(group.getProfileURL(), group.getName(),group.getDescription(), noticeDTOS, meetingDTOS, memberDTOS);
    }

    // 공지사항 추가조회
    @Transactional
    public GroupResponse.FindNoticeListDTO findNoticeList(Long userId, Long groupId, Integer page, Integer size){
        // 그룹 존재 여부 체크
        checkGroupExist(groupId);

        // 맴버인지 체크
        checkIsMember(groupId, userId);

        Pageable pageable = createPageable(page, size, "id");
        List<GroupResponse.NoticeDTO> noticeDTOS = getNoticeDTOS(userId, groupId, pageable);

        return new GroupResponse.FindNoticeListDTO(noticeDTOS);
    }

    // 정기모임 추가조회
    @Transactional
    public GroupResponse.FindMeetingListDTO findMeetingList(Long userId, Long groupId, Integer page, Integer size){
        // 그룹 존재 여부 체크
        checkGroupExist(groupId);

        // 맴버인지 체크
        checkIsMember(groupId, userId);

        Pageable pageable = createPageable(page, size, "id");
        List<GroupResponse.MeetingDTO> meetingsDTOS = getMeetingDTOS(groupId, pageable);

        return new GroupResponse.FindMeetingListDTO(meetingsDTOS);
    }

    @Transactional
    public GroupResponse.MeetingDTO findMeetingById(Long meetingId, Long groupId, Long userId){
        // 그룹 존재 여부 체크
        checkGroupExist(groupId);

        // 맴버인지 체크
        checkIsMember(groupId, userId);

        Meeting meeting = meetingRepository.findById(meetingId).orElseThrow(
                () -> new CustomException(ExceptionCode.MEETING_NOT_FOUND)
        );

        List<GroupResponse.ParticipantDTO> participantDTOS = meetingUserRepository.findUsersByMeetingId(meeting.getId()).stream()
                .map(user -> new GroupResponse.ParticipantDTO(user.getProfileURL()))
                .toList();

        Long participantNum = redisService.getDataInLong("meetingParticipantNum", meeting.getId().toString());

        return new GroupResponse.MeetingDTO(meeting.getId(), meeting.getName(), meeting.getDate(), meeting.getLocation(), meeting.getCost(), participantNum, meeting.getMaxNum(), meeting.getProfileURL(), meeting.getDescription(), participantDTOS);
    }

    @Transactional
    public void joinGroup(GroupRequest.JoinGroupDTO requestDTO, Long userId, Long groupId){
        // 존재하지 않는 그룹이면 에러 처리
        checkGroupExist(groupId);

        // 이미 가입했거나 신청한 회원이면 에러 처리
        groupUserRepository.findByGroupIdAndUserId(groupId, userId)
                .filter(groupUser -> groupUser.getRole().equals(Role.USER) || groupUser.getRole().equals(Role.ADMIN) || groupUser.getRole().equals(Role.CREATOR) || groupUser.getRole().equals(Role.TEMP))
                .ifPresent(groupUser -> {
                    throw new CustomException(ExceptionCode.GROUP_ALREADY_JOIN);
                });

        Group groupRef = entityManager.getReference(Group.class, groupId);
        User userRef = entityManager.getReference(User.class, userId);

        GroupUser groupUser = GroupUser.builder()
                .role(Role.TEMP)
                .user(userRef)
                .group(groupRef)
                .greeting(requestDTO.greeting())
                .build();

        groupUserRepository.save(groupUser);
    }

    @Transactional
    public void withdrawGroup(Long userId, Long groupId){
        // 존재하지 않는 그룹이면 에러 처리
        checkGroupExist(groupId);

        // 가입한 회원이 아니면 에러
        groupUserRepository.findByGroupIdAndUserId(groupId, userId)
                .filter(groupUser -> groupUser.getRole().equals(Role.USER) || groupUser.getRole().equals(Role.ADMIN) || groupUser.getRole().equals(Role.CREATOR))
                .orElseThrow(
                        () -> new CustomException(ExceptionCode.GROUP_NOT_MEMBER)
                );

        groupUserRepository.deleteByGroupIdAndUserId(groupId, userId);

        // 그룹 참가자 수 감소
        redisService.decrementCnt("groupParticipantNum", groupId.toString(), 1L);

        // 그룹 채팅방에서 탈퇴
        ChatRoom chatRoom = chatRoomRepository.findByGroupId(groupId);

        ChatUser chatUser = chatUserRepository.findByUserIdAndChatRoom(userId, chatRoom).get();
        chatUserRepository.delete(chatUser);
    }

    @Transactional
    public void approveJoin(Long userId, Long applicantId, Long groupId){
        // 존재하지 않는 그룹이면 에러
        checkGroupExist(groupId);

        // 권한 체크
        checkAdminAuthority(groupId, userId);

        // 신청한 적이 없거나 이미 가입했는지 체크
        Optional<GroupUser> groupApplicantOP = groupUserRepository.findByGroupIdAndUserId(groupId, applicantId);
        checkAlreadyApplyOrMember(groupApplicantOP);

        groupApplicantOP.get().updateRole(Role.USER);

        // 그룹 참가자 수 증가
        redisService.incrementCnt("groupParticipantNum", groupId.toString(), 1L);

        // 알람 생성
        User applicant = entityManager.getReference(User.class, applicantId);
        String content = "가입이 승인 되었습니다!";
        String redirectURL = "groups/" + groupId + "/detail";
        LocalDateTime date = LocalDateTime.now();

        AlarmRequest.AlarmDTO alarmDTO = new AlarmRequest.AlarmDTO(
                applicantId,
                content,
                redirectURL,
                date,
                AlarmType.join);

        brokerService.produceAlarm(applicantId, alarmDTO);

        // 그룹 채팅방에 참여
        ChatRoom chatRoom = chatRoomRepository.findByGroupId(groupId);

        ChatUser chatUser = ChatUser.builder()
                .user(applicant)
                .chatRoom(chatRoom)
                .build();

        chatUserRepository.save(chatUser);
    }

    @Transactional
    public void rejectJoin(Long userId, Long applicantId, Long groupId){
        // 존재하지 않는 그룹이면 에러
        checkGroupExist(groupId);

        // 권한 체크
        checkAdminAuthority(groupId, userId);

        // 신청한 적이 없거나 이미 가입했는지 체크
        Optional<GroupUser> groupUserOP = groupUserRepository.findByGroupIdAndUserId(groupId, applicantId);
        checkAlreadyApplyOrMember(groupUserOP);

        groupUserRepository.delete(groupUserOP.get());

        // 알람 생성
        String content = "가입이 거절 되었습니다.";
        String redirectURL = "groups/" + groupId + "/detail";
        LocalDateTime date = LocalDateTime.now();

        AlarmRequest.AlarmDTO alarmDTO = new AlarmRequest.AlarmDTO(
                applicantId,
                content,
                redirectURL,
                date,
                AlarmType.join);

        brokerService.produceAlarm(applicantId, alarmDTO);
    }

    @Transactional
    public GroupResponse.CreateNoticeDTO createNotice(GroupRequest.CreateNoticeDTO requestDTO, Long userId, Long groupId){
        // 존재하지 않는 그룹이면 에러
        checkGroupExist(groupId);

        // 권한 체크
        checkAdminAuthority(groupId, userId);

        Group groupRef = entityManager.getReference(Group.class, groupId);
        User userRef = entityManager.getReference(User.class, userId);

        Post notice = Post.builder()
                .user(userRef)
                .group(groupRef)
                .postType(PostType.notice)
                .title(requestDTO.title())
                .content(requestDTO.content())
                .build();

        postRepository.save(notice);

        // 알람 생성
        List<User> users = groupUserRepository.findAllUsersByGroupIdWithoutMe(groupId, userId);

        for(User user : users){
            String content = "공지: " + requestDTO.title();
            String redirectURL = "posts/" + notice.getId() + "/entire";
            LocalDateTime date = LocalDateTime.now();

            AlarmRequest.AlarmDTO alarmDTO = new AlarmRequest.AlarmDTO(
                    user.getId(),
                    content,
                    redirectURL,
                    date,
                    AlarmType.notice);

            brokerService.produceAlarm(user.getId(), alarmDTO);
        }

        return new GroupResponse.CreateNoticeDTO(notice.getId());
    }

    @Transactional
    public void likeGroup(Long userId, Long groupId){
        // 존재하지 않는 그룹이면 에러
        checkGroupExist(groupId);

        Optional<FavoriteGroup> favoriteGroupOP = favoriteGroupRepository.findByUserIdAndGroupId(userId, groupId);

        // 좋아요가 이미 있다면 삭제, 없다면 추가
        if (favoriteGroupOP.isPresent()) {
            favoriteGroupRepository.delete(favoriteGroupOP.get());
            redisService.decrementCnt("groupLikeNum", groupId.toString(), 1L);
        }
        else {
            Group groupRef = entityManager.getReference(Group.class, groupId);
            User userRef = entityManager.getReference(User.class, userId);

            FavoriteGroup favoriteGroup = FavoriteGroup.builder()
                    .user(userRef)
                    .group(groupRef)
                    .build();

            favoriteGroupRepository.save(favoriteGroup);
            redisService.incrementCnt("groupLikeNum", groupId.toString(), 1L);
        }
    }

    @Scheduled(cron = "0 15 * * * *")
    public void syncLikes() {
        // 업데이트는 50개씩 진행
        int page = 0;
        int batchSize = 50;

        Pageable pageable = PageRequest.of(page, batchSize);
        Page<Long> groupIdsPage;

        do {
            groupIdsPage = processLikesBatch(pageable);
            pageable = pageable.next();
        } while (groupIdsPage != null && groupIdsPage.hasNext());
    }

    @Transactional
    public Page<Long> processLikesBatch(Pageable pageable) {
        Page<Long> groupIdsPage = groupRepository.findGroupIds(pageable);
        List<Long> groupIds = groupIdsPage.getContent();

        for (Long groupId : groupIds) {
            Long likeNum = redisService.getDataInLong("groupLikeNum", groupId.toString());
            if (likeNum != null) {
                postRepository.updateLikeNum(likeNum, groupId);
            }
        }
        return groupIdsPage;
    }

    @Transactional
    public void deleteGroup(Long groupId, Long userId){
        // 존재하지 않는 그룹이면 에러
        checkGroupExist(groupId);

        // 권한체크 (그룹장만 삭제 가능)
        checkCreatorAuthority(groupId, userId);

        // redis에 저장된 meetingParticipantNum, groupParticipantNum 데이터 삭제
        List<String> meetingIds = meetingRepository.findMeetingIdsByGroupId(groupId);
        meetingIds.forEach(meetingId ->
                redisService.removeData("meetingParticipantNum", meetingId.toString())
        );

        redisService.removeData("groupParticipantNum", groupId.toString());

        // 그룹, 미팅 연관 데이터 삭제
        meetingUserRepository.deleteAllByGroupId(groupId);
        meetingRepository.deleteAllByGroupId(groupId);
        favoriteGroupRepository.deleteAllByGroupId(groupId);
        groupUserRepository.deleteAllByGroupId(groupId);

        // 그룹과 관련된 게시글, 댓글 관련 데이터 삭제
        postLikeRepository.deleteAllByGroupId(groupId);
        postReadStatusRepository.deleteAllByGroupId(groupId);
        commentLikeRepository.deleteAllByGroupId(groupId);
        commentRepository.deleteAllByGroupId(groupId);
        postRepository.deleteAllByGroupId(groupId);

        // 그룹 채팅방 삭제
        ChatRoom chatRoom = chatRoomRepository.findByGroupId(groupId);
        String queueName = "room." + chatRoom.getId();
        chatRoomRepository.delete(chatRoom);
        brokerService.deleteQueue(queueName); // 채팅방 큐 삭제
        chatUserRepository.deleteAllByGroupId(groupId);

        groupRepository.deleteById(groupId);
    }

    @Transactional
    public void updateUserRole(GroupRequest.UpdateUserRoleDTO requestDTO, Long groupId, Long creatorId){
        // 존재하지 않는 그룹이면 에러
        checkGroupExist(groupId);

        // 가입되지 않은 회원이면 에러
        if(!groupUserRepository.existsByGroupIdAndUserId(groupId, requestDTO.id())){
            throw new CustomException(ExceptionCode.GROUP_NOT_MEMBER);
        }

        // 권한체크 (그룹장만 삭제 가능)
        checkCreatorAuthority(groupId, creatorId);

        // 그룹장은 자신의 역할을 변경할 수 없음
        if(requestDTO.id().equals(creatorId)){
            throw new CustomException(ExceptionCode.CANT_UPDATE_FOR_CREATOR);
        }

        // 그룹장으로의 변경은 불가능
        if(requestDTO.role().equals(Role.CREATOR)){
            throw new CustomException(ExceptionCode.ROLE_CANT_UPDATE);
        }

        groupUserRepository.updateRole(requestDTO.role(), groupId, requestDTO.id());
    }

    @Transactional
    public GroupResponse.CreateMeetingDTO createMeeting(GroupRequest.CreateMeetingDTO requestDTO, Long groupId, Long userId){
        // 존재하지 않는 그룹이면 에러
        checkGroupExist(groupId);

        // 권한 체크 (메니저급만 생성 가능)
        checkAdminAuthority(groupId, userId);

        Group groupRef = entityManager.getReference(Group.class, groupId);
        User userRef = entityManager.getReference(User.class, userId); // 주최자

        Meeting meeting = Meeting.builder()
                .group(groupRef)
                .creator(userRef)
                .name(requestDTO.name())
                .date(requestDTO.date())
                .location(requestDTO.location())
                .cost(requestDTO.cost())
                .maxNum(requestDTO.maxNum())
                .description(requestDTO.description())
                .profileURL(requestDTO.profileURL())
                .build();

        // 주최자를 맴버로 저장
        MeetingUser meetingUser = MeetingUser.builder()
                .user(userRef)
                .build();

        // 양방향 관계 설정 후 meeting 저장 (cascade에 의해 meetingUser도 자동으로 저장됨)
        meeting.addMeetingUser(meetingUser);
        meetingRepository.save(meeting);

        // 정기 모임 참여자수 1로 저장
        redisService.storeDate("meetingParticipantNum", meeting.getId().toString(), Long.toString(1L));

        // 알람 생성
        List<User> users = groupUserRepository.findAllUsersByGroupIdWithoutMe(groupId, userId);

        for(User user : users){
            String content = "새로운 정기 모임: " + requestDTO.name();
            String redirectURL = "groups/" + groupId + "/meetings/"+meeting.getId();
            LocalDateTime date = LocalDateTime.now();

            AlarmRequest.AlarmDTO alarmDTO = new AlarmRequest.AlarmDTO(
                    user.getId(),
                    content,
                    redirectURL,
                    date,
                    AlarmType.newMeeting);

            brokerService.produceAlarm(user.getId(), alarmDTO);
        }
        
        return new GroupResponse.CreateMeetingDTO(meeting.getId());
    }

    @Transactional
    public void updateMeeting(GroupRequest.UpdateMeetingDTO requestDTO, Long groupId, Long meetingId, Long userId){
        // 존재하지 않는 모임이면 에러 처리
        checkMeetingExist(meetingId);

        // 권한 체크(메니저급만 수정 가능)
        checkAdminAuthority(groupId, userId);

        Meeting meeting = meetingRepository.findById(meetingId).orElseThrow(
                () -> new CustomException(ExceptionCode.MEETING_NOT_FOUND)
        );

        meeting.updateMeeting(requestDTO.name(), requestDTO.date(), requestDTO.location(), requestDTO.cost(), requestDTO.maxNum(), requestDTO.description(), requestDTO.profileURL());
    }

    @Transactional
    public void joinMeeting(Long groupId, Long meetingId, Long userId){
        // 존재하지 않는 모임이면 에러 처리
        Meeting meeting = meetingRepository.findById(meetingId).orElseThrow(
                () -> new CustomException(ExceptionCode.MEETING_NOT_FOUND)
        );

        // 그룹의 맴버가 아니면 에러 처리
        checkIsMember(groupId, userId);

        // 이미 참가중인 모임이면 에러 처리
        if(meetingUserRepository.existsByMeetingIdAndUserId(meetingId, userId)){
            throw new CustomException(ExceptionCode.MEETING_ALREADY_JOIN);
        }

        // 기본 프로필은 나중에 주소를 설정해야 함
        User userRef = entityManager.getReference(User.class, userId);
        String profileURL = userRepository.findProfileById(userId).orElse("www.s3.basicProfile");
        MeetingUser meetingUser = MeetingUser.builder()
                .user(userRef)
                .profileURL(profileURL)
                .build();

        // 양방향 관계 설정 후 meeting 저장
        meeting.addMeetingUser(meetingUser);
        meetingUserRepository.save(meetingUser);

        // 그룹 참가자 수 증가
        redisService.incrementCnt("meetingParticipantNum", meetingId.toString(), 1L);
    }

    @Transactional
    public void withdrawMeeting(Long groupId, Long meetingId, Long userId){
        // 존재하지 않는 모임이면 에러 처리
        checkMeetingExist(meetingId);

        // 그룹의 맴버가 아니면 에러 처리
        checkIsMember(groupId, userId);

        // 참가중이 맴버가 아니라면 에러 처리
        if(!meetingUserRepository.existsByMeetingIdAndUserId(meetingId, userId)){
            throw new CustomException(ExceptionCode.MEETING_NOT_MEMBER);
        }

        meetingUserRepository.deleteByMeetingIdAndUserId(meetingId, userId);

        // 참가자 수 감소
        redisService.decrementCnt("meetingParticipantNum", meetingId.toString(), 1L);
    }

    @Transactional
    public void deleteMeeting(Long groupId, Long meetingId, Long userId){
        // 존재하지 않는 모임이면 에러 처리
        checkMeetingExist(meetingId);

        // 권한 체크 (메니저급만 삭제 가능)
        checkAdminAuthority(groupId, userId);

        // redis에 저장된 참가자 수 삭제
        redisService.removeData("meetingParticipantNum", meetingId.toString());

        meetingUserRepository.deleteAllByMeetingId(meetingId);
        meetingRepository.deleteById(meetingId);
    }

    private List<GroupResponse.RecommendGroupDTO> getRecommendGroupDTOS(Long userId, String region){
        // 내가 가입한 그룹
        Set<Long> joinedGroupIds = getGroupIds(userId);

        // 1. 같은 지역의 그룹  2. 좋아요, 사용자 순
        Sort sort = Sort.by(Sort.Order.desc("likeNum"));
        Pageable pageableForRecommend = PageRequest.of(0, 30, sort);

        Page<Group> recommendGroups = groupRepository.findByRegion(region, pageableForRecommend);
        List<GroupResponse.RecommendGroupDTO> allRecommendGroupDTOS = recommendGroups.getContent().stream()
                .filter(group -> !joinedGroupIds.contains(group.getId())) // 내가 가입한 그룹을 제외
                .map(group -> {
                    Long participantNum = redisService.getDataInLong("groupParticipantNum", group.getId().toString());
                    Long likeNum = redisService.getDataInLong("groupLikeNum", group.getId().toString());

                    return new GroupResponse.RecommendGroupDTO(
                        group.getId(),
                        group.getName(),
                        group.getDescription(),
                        participantNum,
                        group.getCategory(),
                        group.getRegion(),
                        group.getSubRegion(),
                        group.getProfileURL(),
                        likeNum);
                })
                .collect(Collectors.toList());

        // 매번 동일하게 추천을 할 수는 없으니, 간추린 추천 목록 중에서 5개를 랜덤으로 보내준다.
        Collections.shuffle(allRecommendGroupDTOS);
        List<GroupResponse.RecommendGroupDTO> recommendGroupDTOS = allRecommendGroupDTOS.stream()
                .limit(5)
                .collect(Collectors.toList());

        return recommendGroupDTOS;
    }

    private List<GroupResponse.LocalGroupDTO> getLocalGroupDTOS(Long userId, String region, Pageable pageable){
        // 내가 가입한 그룹
        Set<Long> joinedGroupIds = getGroupIds(userId);

        Page<Group> localGroups = groupRepository.findByRegion(region, pageable);

        List<GroupResponse.LocalGroupDTO> localGroupDTOS = localGroups.getContent().stream()
                .filter(group -> !joinedGroupIds.contains(group.getId())) // 내가 가입한 그룹을 제외
                .map(group -> {
                    Long participantNum = redisService.getDataInLong("groupParticipantNum", group.getId().toString());
                    Long likeNum = redisService.getDataInLong("groupLikeNum", group.getId().toString());

                    return new GroupResponse.LocalGroupDTO(
                        group.getId(),
                        group.getName(),
                        group.getDescription(),
                        participantNum,
                        group.getCategory(),
                        group.getRegion(),
                        group.getSubRegion(),
                        group.getProfileURL(),
                        likeNum);
                })
                .collect(Collectors.toList());

        return localGroupDTOS;
    }

    private List<GroupResponse.NewGroupDTO> getNewGroupDTOS(Long userId, Pageable pageable){
        // 내가 가입한 그룹
        Set<Long> joinedGroupIds = getGroupIds(userId);

        Page<Group> newGroups = groupRepository.findAll(pageable);

        List<GroupResponse.NewGroupDTO> newGroupDTOS = newGroups.getContent().stream()
                .filter(group -> !joinedGroupIds.contains(group.getId())) // 내가 가입한 그룹을 제외
                .map(group -> new GroupResponse.NewGroupDTO(
                        group.getId(),
                        group.getName(),
                        group.getCategory(),
                        group.getRegion(),
                        group.getSubRegion(),
                        group.getProfileURL()))
                .collect(Collectors.toList());

        return newGroupDTOS;
    }

    private List<GroupResponse.MyGroupDTO> getMyGroupDTOS(Long userId, Pageable pageable){
        List<Group> joinedGroups = groupUserRepository.findAllGroupByUserId(userId, pageable).getContent();

        List<GroupResponse.MyGroupDTO> myGroupDTOS = joinedGroups.stream()
                .map(group -> {
                    Long participantNum = redisService.getDataInLong("groupParticipantNum", group.getId().toString());
                    Long likeNum = redisService.getDataInLong("groupLikeNum", group.getId().toString());

                    return new GroupResponse.MyGroupDTO(
                        group.getId(),
                        group.getName(),
                        group.getDescription(),
                        participantNum,
                        group.getCategory(),
                        group.getRegion(),
                        group.getSubRegion(),
                        group.getProfileURL(),
                        likeNum);
                })
                .collect(Collectors.toList());

        return myGroupDTOS;
    }

    private Set<Long> getGroupIds(Long userId){
        List<Group> groups = groupUserRepository.findAllGroupByUserId(userId);

        Set<Long> groupIds = groups.stream()
                .map(Group::getId)
                .collect(Collectors.toSet());

        return groupIds;
    }

    private Pageable createPageable(int page, int size, String sortProperty) {
        return PageRequest.of(page, size, Sort.by(Sort.Direction.DESC, sortProperty));
    }

    public void checkIsMember(Long groupId, Long userId){
        groupUserRepository.findByGroupIdAndUserId(groupId, userId)
                .filter(groupUser -> groupUser.getRole().equals(Role.USER) || groupUser.getRole().equals(Role.ADMIN) || groupUser.getRole().equals(Role.CREATOR))
                .orElseThrow( () -> new CustomException(ExceptionCode.GROUP_NOT_MEMBER));
    }

    private void checkAdminAuthority(Long groupId, Long userId){
        // 권한 체크, 엔티티 사이즈가 크지 않으니 그냥 불러오자
        groupUserRepository.findByGroupIdAndUserId(groupId, userId)
                .filter(groupUser -> groupUser.getRole().equals(Role.ADMIN) || groupUser.getRole().equals(Role.CREATOR)) // ADMIN인 경우에만 통과 (ADMIN이 아니면 null이 되어 orElseThrow 실행)
                .orElseThrow(() -> new CustomException(ExceptionCode.USER_FORBIDDEN)); // ADMIN이 아니거나 그룹과 관련없는 사람이면 에러 보냄
    }

    private void checkCreatorAuthority(Long groupId, Long userId){
        groupUserRepository.findByGroupIdAndUserId(groupId, userId)
                .filter(groupUser -> groupUser.getRole().equals(Role.CREATOR))
                .orElseThrow(() -> new CustomException(ExceptionCode.USER_FORBIDDEN));
    }

    private void checkAlreadyApplyOrMember(Optional<GroupUser> groupApplicantOP){
        // 가입 신청한 적이 없음
        if(groupApplicantOP.isEmpty()){
            throw new CustomException(ExceptionCode.GROUP_NOT_APPLY);
        } // 이미 승인된 회원
        else if(groupApplicantOP.get().getRole().equals(Role.USER) || groupApplicantOP.get().getRole().equals(Role.ADMIN)){
            throw new CustomException(ExceptionCode.GROUP_ALREADY_JOIN);
        }
    }

    private void checkGroupExist(Long groupId){
        if(!groupRepository.existsById(groupId)){
            throw new CustomException(ExceptionCode.GROUP_NOT_FOUND);
        }
    }

    private void checkMeetingExist(Long meetingId){
        if(!meetingRepository.existsById(meetingId)){
            throw new CustomException(ExceptionCode.MEETING_NOT_FOUND);
        }
    }

    private List<GroupResponse.NoticeDTO> getNoticeDTOS(Long userId, Long groupId, Pageable pageable){
        // user를 패치조인 해서 조회
        Page<Post> notices = postRepository.findByGroupId(groupId, pageable);
        // 해당 유저가 읽은 post의 id 목록
        List<Long> postIds = postRepository.findAllPostIdByUserId(userId);

        List<GroupResponse.NoticeDTO> noticeDTOS = notices.getContent().stream()
                .map(notice -> new GroupResponse.NoticeDTO(
                            notice.getId(),
                            notice.getUser().getNickName(),
                            notice.getCreatedDate(),
                            notice.getTitle(),
                            postIds.contains(notice.getId())))
                .collect(Collectors.toList());

        return noticeDTOS;
    }

    private List<GroupResponse.MeetingDTO> getMeetingDTOS(Long groupId, Pageable pageable){
        Page<Meeting> meetings = meetingRepository.findByGroupId(groupId, pageable);

        List<GroupResponse.MeetingDTO> meetingDTOS = meetings.getContent().stream()
                .map(meeting -> {
                    List<GroupResponse.ParticipantDTO> participantDTOS = meeting.getMeetingUsers().stream()
                            .map(meetingUser -> new GroupResponse.ParticipantDTO(meetingUser.getProfileURL()))
                            .toList();

                    Long participantNum = redisService.getDataInLong("meetingParticipantNum", meeting.getId().toString());

                    return new GroupResponse.MeetingDTO(
                            meeting.getId(),
                            meeting.getName(),
                            meeting.getDate(),
                            meeting.getLocation(),
                            meeting.getCost(),
                            participantNum,
                            meeting.getMaxNum(),
                            meeting.getProfileURL(),
                            meeting.getDescription(),
                            participantDTOS);
                })
                .toList();

        return meetingDTOS;
    }

    private List<GroupResponse.MemberDTO> getMemberDTOS(Long groupId){
        // user를 패치조인 해서 조회
        List<GroupUser> groupUsers = groupUserRepository.findByGroupIdWithUser(groupId);

        List<GroupResponse.MemberDTO> memberDTOS = groupUsers.stream()
                .filter(groupUser -> !groupUser.getRole().equals(Role.TEMP)) // 가입 승인 상태가 아니면 제외
                .map(groupUser -> new GroupResponse.MemberDTO(
                        groupUser.getUser().getId(),
                        groupUser.getUser().getNickName(),
                        groupUser.getRole(),
                        groupUser.getUser().getProfileURL()))
                .collect(Collectors.toList());

        return memberDTOS;
    }
}