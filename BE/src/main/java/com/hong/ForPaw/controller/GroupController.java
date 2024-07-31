package com.hong.ForPaw.controller;

import com.hong.ForPaw.controller.DTO.GroupRequest;
import com.hong.ForPaw.controller.DTO.GroupResponse;
import com.hong.ForPaw.core.security.CustomUserDetails;
import com.hong.ForPaw.core.utils.ApiUtils;
import com.hong.ForPaw.service.GroupService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Controller;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.*;

@Controller
@RequiredArgsConstructor
@RequestMapping("/api")
public class GroupController {

    private final GroupService groupService;

    @PostMapping("/groups")
    public ResponseEntity<?> createGroup(@RequestBody GroupRequest.CreateGroupDTO requestDTO, Errors errors, @AuthenticationPrincipal CustomUserDetails userDetails){
        GroupResponse.CreateGroupDTO responseDTO = groupService.createGroup(requestDTO, userDetails.getUser().getId());
        return ResponseEntity.ok().body(ApiUtils.success(HttpStatus.OK, responseDTO));
    }

    @GetMapping("/groups/{groupId}")
    public ResponseEntity<?> findGroupById(@PathVariable Long groupId, @AuthenticationPrincipal CustomUserDetails userDetails){
        GroupResponse.FindGroupByIdDTO responseDTO = groupService.findGroupById(groupId, userDetails.getUser().getId());
        return ResponseEntity.ok().body(ApiUtils.success(HttpStatus.OK, responseDTO));
    }

    @PatchMapping("/groups/{groupId}")
    public ResponseEntity<?> updateGroup(@RequestBody GroupRequest.UpdateGroupDTO requestDTO, Errors errors, @PathVariable Long groupId, @AuthenticationPrincipal CustomUserDetails userDetails){
        groupService.updateGroup(requestDTO, groupId, userDetails.getUser().getId());
        return ResponseEntity.ok().body(ApiUtils.success(HttpStatus.OK, null));
    }

    @GetMapping("/groups")
    public ResponseEntity<?> findGroupList(@RequestParam("region") String region, @AuthenticationPrincipal CustomUserDetails userDetails){
        GroupResponse.FindAllGroupListDTO responseDTO = groupService.findGroupList(userDetails.getUser().getId(), region);
        return ResponseEntity.ok().body(ApiUtils.success(HttpStatus.OK, responseDTO));
    }

    @GetMapping("/groups/local")
    public ResponseEntity<?> findLocalGroupList(@RequestParam("region") String region, @RequestParam("page") Integer page, @RequestParam("size") Integer size, @AuthenticationPrincipal CustomUserDetails userDetails){
        GroupResponse.FindLocalGroupListDTO responseDTO = groupService.findLocalGroupList(userDetails.getUser().getId(), region, page, size);
        return ResponseEntity.ok().body(ApiUtils.success(HttpStatus.OK, responseDTO));
    }

    @GetMapping("/groups/new")
    public ResponseEntity<?> findNewGroupList(@RequestParam("page") Integer page, @RequestParam("size") Integer size, @AuthenticationPrincipal CustomUserDetails userDetails){
        GroupResponse.FindNewGroupListDTO responseDTO = groupService.findNewGroupList(userDetails.getUser().getId(), page, size);
        return ResponseEntity.ok().body(ApiUtils.success(HttpStatus.OK, responseDTO));
    }

    @GetMapping("/groups/my")
    public ResponseEntity<?> findMyGroupList(@RequestParam("page") Integer page, @RequestParam("size") Integer size, @AuthenticationPrincipal CustomUserDetails userDetails){
        GroupResponse.FindMyGroupListDTO responseDTO = groupService.findMyGroupList(userDetails.getUser().getId(), page, size);
        return ResponseEntity.ok().body(ApiUtils.success(HttpStatus.OK, responseDTO));
    }

    @GetMapping("/groups/{groupId}/detail")
    public ResponseEntity<?> findGroupDetailById(@PathVariable Long groupId, @AuthenticationPrincipal CustomUserDetails userDetails){
        GroupResponse.FindGroupDetailByIdDTO responseDTO = groupService.findGroupDetailById(userDetails.getUser().getId(), groupId);
        return ResponseEntity.ok().body(ApiUtils.success(HttpStatus.OK, responseDTO));
    }

    @GetMapping("/groups/{groupId}/notices")
    public ResponseEntity<?> findNoticeList(@PathVariable Long groupId, @AuthenticationPrincipal CustomUserDetails userDetails, @RequestParam("page") Integer page, @RequestParam("size") Integer size){
        GroupResponse.FindNoticeListDTO responseDTO = groupService.findNoticeList(userDetails.getUser().getId(), groupId, page, size);
        return ResponseEntity.ok().body(ApiUtils.success(HttpStatus.OK, responseDTO));
    }

    @GetMapping("/groups/{groupId}/meetings")
    public ResponseEntity<?> findMeetingList(@PathVariable Long groupId, @RequestParam("page") Integer page, @RequestParam("size") Integer size, @AuthenticationPrincipal CustomUserDetails userDetails){
        GroupResponse.FindMeetingListDTO responseDTO = groupService.findMeetingList(userDetails.getUser().getId(), groupId, page, size);
        return ResponseEntity.ok().body(ApiUtils.success(HttpStatus.OK, responseDTO));
    }

    @GetMapping("/groups/{groupId}/meetings/{meetingId}")
    public ResponseEntity<?> findMeetingById(@PathVariable Long groupId, @PathVariable Long meetingId, @AuthenticationPrincipal CustomUserDetails userDetails){
        GroupResponse.MeetingDTO responseDTO = groupService.findMeetingById(meetingId, groupId, userDetails.getUser().getId());
        return ResponseEntity.ok().body(ApiUtils.success(HttpStatus.OK, responseDTO));
    }

    @PostMapping("/groups/{groupId}/join")
    public ResponseEntity<?> joinGroup(@RequestBody GroupRequest.JoinGroupDTO requestDTO, Errors errors, @PathVariable Long groupId, @AuthenticationPrincipal CustomUserDetails userDetails){
        groupService.joinGroup(requestDTO, userDetails.getUser().getId(), groupId);
        return ResponseEntity.ok().body(ApiUtils.success(HttpStatus.OK, null));
    }

    @PostMapping("/groups/{groupId}/withdraw")
    public ResponseEntity<?> withdrawGroup(@PathVariable Long groupId, @AuthenticationPrincipal CustomUserDetails userDetails){
        groupService.withdrawGroup(userDetails.getUser().getId(), groupId);
        return ResponseEntity.ok().body(ApiUtils.success(HttpStatus.OK, null));
    }

    @PostMapping("/groups/{groupID}/join/approve")
    public ResponseEntity<?> approveJoin(@RequestBody GroupRequest.ApproveJoinDTO requestDTO, Errors errors, @PathVariable Long groupID, @AuthenticationPrincipal CustomUserDetails userDetails){
        groupService.approveJoin(userDetails.getUser().getId(), requestDTO.id(), groupID);
        return ResponseEntity.ok().body(ApiUtils.success(HttpStatus.OK, null));
    }

    @PostMapping("/groups/{groupID}/join/reject")
    public ResponseEntity<?> rejectJoin(@RequestBody GroupRequest.RejectJoinDTO requestDTO, Errors errors, @PathVariable Long groupID, @AuthenticationPrincipal CustomUserDetails userDetails){
        groupService.rejectJoin(userDetails.getUser().getId(), requestDTO.id(), groupID);
        return ResponseEntity.ok().body(ApiUtils.success(HttpStatus.OK, null));
    }

    @PostMapping("/groups/{groupId}/notices")
    public ResponseEntity<?> createNotice(@RequestBody GroupRequest.CreateNoticeDTO requestDTO, Errors errors, @PathVariable Long groupId, @AuthenticationPrincipal CustomUserDetails userDetails){
        GroupResponse.CreateNoticeDTO responseDTO = groupService.createNotice(requestDTO, userDetails.getUser().getId(), groupId);
        return ResponseEntity.ok().body(ApiUtils.success(HttpStatus.OK, responseDTO));
    }

    @PostMapping("/groups/{groupId}/like")
    public ResponseEntity<?> likeGroup(@PathVariable Long groupId, @AuthenticationPrincipal CustomUserDetails userDetails){
        groupService.likeGroup(userDetails.getUser().getId(), groupId);
        return ResponseEntity.ok().body(ApiUtils.success(HttpStatus.OK, null));
    }

    @DeleteMapping("/groups/{groupId}")
    public ResponseEntity<?> deleteGroup(@PathVariable Long groupId, @AuthenticationPrincipal CustomUserDetails userDetails){
        groupService.deleteGroup(groupId, userDetails.getUser().getId());
        return ResponseEntity.ok().body(ApiUtils.success(HttpStatus.OK, null));
    }

    @PatchMapping("/groups/{groupId}/role")
    public ResponseEntity<?> updateUserRole(@RequestBody GroupRequest.UpdateUserRoleDTO requestDTO, Errors errors, @PathVariable Long groupId, @AuthenticationPrincipal CustomUserDetails userDetails){
        groupService.updateUserRole(requestDTO, groupId, userDetails.getUser().getId());
        return ResponseEntity.ok().body(ApiUtils.success(HttpStatus.OK, null));
    }

    @PostMapping("/groups/{groupId}/meetings")
    public ResponseEntity<?> createMeeting(@RequestBody GroupRequest.CreateMeetingDTO requestDTO, Errors errors, @PathVariable Long groupId, @AuthenticationPrincipal CustomUserDetails userDetails){
        GroupResponse.CreateMeetingDTO responseDTO = groupService.createMeeting(requestDTO, groupId, userDetails.getUser().getId());
        return ResponseEntity.ok().body(ApiUtils.success(HttpStatus.OK, responseDTO));
    }

    @PatchMapping("/groups/{groupId}/meetings/{meetingId}")
    public ResponseEntity<?> updateMeeting(@RequestBody GroupRequest.UpdateMeetingDTO requestDTO, Errors errors, @PathVariable Long groupId, @PathVariable Long meetingId, @AuthenticationPrincipal CustomUserDetails userDetails){
        groupService.updateMeeting(requestDTO, groupId, meetingId, userDetails.getUser().getId());
        return ResponseEntity.ok().body(ApiUtils.success(HttpStatus.OK, null));
    }

    @PostMapping("/groups/{groupId}/meetings/{meetingId}/join")
    public ResponseEntity<?> joinMeeting(@PathVariable Long groupId, @PathVariable Long meetingId, @AuthenticationPrincipal CustomUserDetails userDetails){
        groupService.joinMeeting(groupId, meetingId, userDetails.getUser().getId());
        return ResponseEntity.ok().body(ApiUtils.success(HttpStatus.OK, null));
    }

    @PostMapping("/groups/{groupId}/meetings/{meetingId}/withdraw")
    public ResponseEntity<?> withdrawMeeting(@PathVariable Long groupId, @PathVariable Long meetingId, @AuthenticationPrincipal CustomUserDetails userDetails){
        groupService.withdrawMeeting(groupId, meetingId, userDetails.getUser().getId());
        return ResponseEntity.ok().body(ApiUtils.success(HttpStatus.OK, null));
    }

    @DeleteMapping("/groups/{groupId}/meetings/{meetingId}")
    public ResponseEntity<?> deleteMeeting(@PathVariable Long groupId, @PathVariable Long meetingId, @AuthenticationPrincipal CustomUserDetails userDetails){
        groupService.deleteMeeting(groupId, meetingId, userDetails.getUser().getId());
        return ResponseEntity.ok().body(ApiUtils.success(HttpStatus.OK, null));
    }
}