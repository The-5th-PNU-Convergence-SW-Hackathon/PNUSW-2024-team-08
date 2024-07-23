package com.hong.ForPaw.controller.DTO;

import com.hong.ForPaw.domain.Group.Role;

import java.time.LocalDateTime;
import java.util.List;

public class GroupResponse {

    public record FindGroupByIdDTO(String name, String region, String subRegion, String description,
                                   String category, String profileURL) {}

    public record FindAllGroupDTO(List<RecommendGroupDTO> recommendGroups, List<NewGroupDTO> newGroups, List<LocalGroupDTO> localGroups, List<MyGroupDTO> myGroups) {}

    public record FindLocalGroupDTO(List<LocalGroupDTO> localGroups) {}

    public record FindNewGroupDTO(List<NewGroupDTO> newGroups) {}

    public record FindMyGroupDTO(List<MyGroupDTO> myGroups) {}

    public record RecommendGroupDTO(Long id, String name, String description, Integer participationNum, String category,
                                    String region, String subRegion, String profileURL, Integer likeNum) {}

    public record NewGroupDTO(Long id, String name, String category, String region,
                              String subRegion, String profileURL) {}

    public record LocalGroupDTO(Long id, String name, String description, Integer participationNum, String category,
                                String region, String subRegion, String profileURL, Integer likeNum) {}

    public record MyGroupDTO(Long id, String name, String description, Integer participationNum, String category,
                             String region, String subRegion, String profileURL, Integer likeNum) {}

    public record FindGroupDetailByIdDTO(String description, List<NoticeDTO> notices, List<MeetingDTO> meetings, List<MemberDTO> members) {}

    public record FindNoticesDTO(List<NoticeDTO> notices) {}

    public record FindMeetingsDTO(List<MeetingDTO> meetings) {}

    public record NoticeDTO(Long id, String name, LocalDateTime date, String title, String content, Boolean isRead) {}

    public record MeetingDTO(Long id, String name, LocalDateTime date, String location, Long cost, Integer participantCnt, Integer maxCnt, String profileURL, String description, List<ParticipantDTO> participants) {}

    public record ParticipantDTO(String profileURL) {}

    public record MemberDTO(Long id, String name, Role role, String profileURL) {}

    public record CreateMeetingDTO(Long id) {}

    public record CreateNoticeDTO(Long id) {}
}