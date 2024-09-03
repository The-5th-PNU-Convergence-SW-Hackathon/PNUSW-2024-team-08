package com.hong.ForPaw.controller.DTO;

import com.hong.ForPaw.domain.Group.Role;
import jakarta.validation.constraints.NotBlank;

import java.time.LocalDateTime;
import java.util.List;

public class GroupRequest {

    public record CreateGroupDTO(
            @NotBlank(message = "그룹의 이름을 입력해주세요.")
            String name,
            @NotBlank(message = "활동 지역을 입력해주세요.")
            String region,
            String subRegion,
            @NotBlank(message = "그룹의 설명을 입력해주세요.")
            String description,
            String category,
            @NotBlank
            String profileURL){}

    public record UpdateGroupDTO(
            @NotBlank(message = "그룹의 이름을 입력해주세요.")
            String name,
            @NotBlank(message = "활동 지역을 입력해주세요.")
            String region,
            String subRegion,
            @NotBlank(message = "그룹의 설명을 입력해주세요.")
            String description,
            String category,
            @NotBlank
            String profileURL){}

    public record ApproveJoinDTO(@NotBlank Long id) {}

    public record RejectJoinDTO(@NotBlank Long id) {}

    public record JoinGroupDTO(@NotBlank(message = "가입 인사말을 입력해주세요.") String greeting) {}

    public record UpdateUserRoleDTO(@NotBlank Long id, @NotBlank Role role) {}

    public record CreateMeetingDTO(
            @NotBlank(message = "정기모임의 이름을 입력해주세요.")
            String name,
            @NotBlank(message = "모임 날짜를 입력해주세요.")
            LocalDateTime date,
            @NotBlank(message = "모임 장소를 입력해주세요.")
            String location,
            @NotBlank(message = "모임 비용을 입력해주세요.")
            Long cost,
            @NotBlank(message = "최대 인원수를 입력해주세요.")
            Integer maxNum,
            @NotBlank(message = "모임의 설명을 입력해주세요.")
            String description,
            @NotBlank
            String profileURL) {}

    public record UpdateMeetingDTO(
            @NotBlank(message = "정기모임의 이름을 입력해주세요.")
            String name,
            @NotBlank(message = "모임 날짜를 입력해주세요.")
            LocalDateTime date,
            @NotBlank(message = "모임 장소를 입력해주세요.")
            String location,
            @NotBlank(message = "모임 비용을 입력해주세요.")
            Long cost,
            @NotBlank(message = "최대 인원수를 입력해주세요.")
            Integer maxNum,
            @NotBlank(message = "모임의 설명을 입력해주세요.")
            String description,
            @NotBlank
            String profileURL) {}

    public record CreateNoticeDTO(
            @NotBlank(message = "제목을 입력해주세요.")
            String title,
            @NotBlank(message = "본문을 입력해주세요.")
            String content,
            List<PostRequest.PostImageDTO> images) {}
}