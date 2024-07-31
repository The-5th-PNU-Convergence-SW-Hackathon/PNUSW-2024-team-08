package com.hong.ForPaw.controller.DTO;

import java.time.LocalDateTime;
import java.util.List;

public class PostResponse {

    public record CreatePostDTO(Long id) {}

    public record CreateAnswerDTO(Long id) {}

    public record FindAllPostDTO(List<PostDTO> adoptions, List<PostDTO> protections, List<QnaDTO> questions) {}

    public record FindAdoptionPostListDTO(List<PostDTO> adoptions) {}

    public record FindProtectionPostListDTO(List<PostDTO> protections) {}

    public record FindQnaPostListDTO(List<QnaDTO> questions) {}

    public record PostDTO(Long id,
                          String name,
                          String title,
                          String content,
                          LocalDateTime date,
                          Long commentNum,
                          Long likeNum,
                          String imageURL){}

    public record QnaDTO(Long id,
                         String name,
                         String title,
                         String content,
                         LocalDateTime date,
                         Long answerNum) {}

    public record PostImageDTO(Long id, String imageURL) {}

    public record FindPostByIdDTO(String name,
                                  String title,
                                  String content,
                                  LocalDateTime date,
                                  Long commentNum,
                                  Long likeNum,
                                  List<PostImageDTO> images,
                                  List<CommentDTO> comments){}

    public record FIndQnaByIdDTO(String name,
                                 String title,
                                 String content,
                                 LocalDateTime date,
                                 List<PostImageDTO> images,
                                 List<AnswerDTO> answers) {}

    public record AnswerDTO(Long id,
                            String name,
                            String content,
                            LocalDateTime date,
                            List<PostImageDTO> images) {}

    public record CommentDTO(Long id,
                             String name,
                             String content,
                             LocalDateTime date,
                             String location,
                             List<ReplyDTO> replies) {}

    public record ReplyDTO(Long id,
                           String name,
                           String content,
                           LocalDateTime date,
                           String location) {}

    public record CreateCommentDTO(Long id) {}
}
