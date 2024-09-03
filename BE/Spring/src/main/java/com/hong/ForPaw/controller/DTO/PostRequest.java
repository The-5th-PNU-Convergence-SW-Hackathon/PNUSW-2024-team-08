package com.hong.ForPaw.controller.DTO;


import com.hong.ForPaw.domain.Post.PostType;
import jakarta.validation.constraints.NotBlank;

import java.util.List;

public class PostRequest {

    public record CreatePostDTO(
            @NotBlank(message = "제목을 입력해주세요.")
            String title,
            @NotBlank
            PostType type,
            @NotBlank(message = "본문을 입력해주세요.")
            String content,
            List<PostImageDTO> images) {}

    public record CreateAnswerDTO(@NotBlank(message = "답변을 입력해주세요.") String content, List<PostImageDTO> images) {}

    public record PostImageDTO(String imageURL) {}

    public record UpdatePostDTO(
            @NotBlank(message = "제목을 입력해주세요.")
            String title,
            @NotBlank(message = "본문을 입력해주세요.")
            String content,
            List<Long> retainedImageIds,
            List<PostImageDTO> newImages) {}

    public record CreateCommentDTO(@NotBlank(message = "댓글을 입력해주세요.") String content) {}

    public record UpdateCommentDTO(@NotBlank(message = "본문을 입력해주세요.") String content) {}
}
