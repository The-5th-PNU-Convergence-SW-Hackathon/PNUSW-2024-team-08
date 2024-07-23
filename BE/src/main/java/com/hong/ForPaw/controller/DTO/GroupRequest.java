package com.hong.ForPaw.controller.DTO;

import com.hong.ForPaw.domain.Group.Role;

import java.time.LocalDateTime;
import java.util.List;

public class GroupRequest {

    public record CreateGroupDTO(String name, String region, String subRegion, String description,
                                 String category, String profileURL){}

    public record UpdateGroupDTO(String name, String region, String subRegion, String description,
                                 String category, String profileURL){}

    public record ApproveJoinDTO(Long id) {}

    public record RejectJoinDTO(Long id) {}

    public record JoinGroupDTO(String greeting) {}

    public record UpdateUserRoleDTO(Long id, Role role) {}

    public record CreateMeetingDTO(String name, LocalDateTime date, String location, Long cost,
                                   Integer maxNum, String description, String profileURL) {}

    public record UpdateMeetingDTO(String name, LocalDateTime date, String location, Long cost,
                                   Integer maxNum, String description, String profileURL) {}

    public record CreateNoticeDTO(String title, String content, List<PostRequest.PostImageDTO> images) {}
}