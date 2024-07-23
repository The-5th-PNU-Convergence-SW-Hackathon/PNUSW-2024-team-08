package com.hong.ForPaw.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.hong.ForPaw.controller.DTO.PostRequest;
import com.hong.ForPaw.domain.Post.PostType;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithUserDetails;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;

import java.util.ArrayList;
import java.util.List;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;

@AutoConfigureMockMvc
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.MOCK)
@ActiveProfiles("local")
class PostControllerTest {

    @Autowired
    private MockMvc mvc;

    @Autowired
    private ObjectMapper om;

    @Test
    @WithUserDetails(value = "yg04076@naver.com")
    public void 게시글_작성_성공() throws Exception {
        // given
        List<PostRequest.PostImageDTO> imageDTOS = new ArrayList<>();
        imageDTOS.add(new PostRequest.PostImageDTO("https://example.com/image1.jpg"));
        imageDTOS.add(new PostRequest.PostImageDTO("https://example.com/image2.jpg"));

        PostRequest.CreatePostDTO requestDTO = new PostRequest.CreatePostDTO("불독 입양 후기 올립니다5!", PostType.adoption, "입양 2일차 입니다!", imageDTOS);
        String requestBody = om.writeValueAsString(requestDTO);

        // when
        ResultActions result = mvc.perform(
                post("/api/posts")
                        .contentType(MediaType.APPLICATION_JSON_VALUE)
                        .content(requestBody)
        );

        String responseBody = result.andReturn().getResponse().getContentAsString();
        System.out.println("테스트 : " + responseBody);

        result.andExpect(jsonPath("$.success").value("true"));
    }

    @Test
    @WithUserDetails(value = "yg04076@naver.com")
    public void 게시글_목록_조회_성공_최신순() throws Exception {
        // given
        // when => 최신순
        ResultActions result = mvc.perform(
                get("/api/posts" )
                        .contentType(MediaType.APPLICATION_JSON_VALUE)
                        .param("type", "adoption")
                        .param("size", "5")
                        .param("page", "0")
                        .param("sort", "createdDate,desc")
        );

        // then
        String responseBody = result.andReturn().getResponse().getContentAsString();
        System.out.println("테스트 : " + responseBody);

        result.andExpect(jsonPath("$.success").value("true"));
    }

    @Test
    @WithUserDetails(value = "yg04076@naver.com")
    public void 게시글_목록_조회_성공_좋아요순() throws Exception {
        // given
        // when
        ResultActions result = mvc.perform(
                get("/api/posts" )
                        .contentType(MediaType.APPLICATION_JSON_VALUE)
                        .param("type", "adoption")
                        .param("size", "5")
                        .param("page", "0")
                        .param("sort", "likeNum,desc")
        );

        // then
        String responseBody = result.andReturn().getResponse().getContentAsString();
        System.out.println("테스트 : " + responseBody);

        result.andExpect(jsonPath("$.success").value("true"));
    }

    @Test
    @WithUserDetails(value = "yg04076@naver.com")
    public void 게시글_업데이트_성공() throws Exception {
        // given
        Long postId = 1L;

        List<Long> retainedImageIds = new ArrayList<>();
        retainedImageIds.add(1L);

        List<PostRequest.PostImageDTO> imageDTOS = new ArrayList<>();
        imageDTOS.add(new PostRequest.PostImageDTO("https://apple.com/image1.jpg"));
        imageDTOS.add(new PostRequest.PostImageDTO("https://apple.com/image2.jpg"));

        PostRequest.UpdatePostDTO requestDTO = new PostRequest.UpdatePostDTO("치와아 입양 후기 올립니다5!", "입양 2일차 입니다!", retainedImageIds, imageDTOS);
        String requestBody = om.writeValueAsString(requestDTO);

        // when
        ResultActions result = mvc.perform(
                patch("/api/posts/" + postId )
                        .contentType(MediaType.APPLICATION_JSON_VALUE)
                        .content(requestBody)
        );

        String responseBody = result.andReturn().getResponse().getContentAsString();
        System.out.println("테스트 : " + responseBody);

        result.andExpect(jsonPath("$.success").value("true"));
    }

    @Test
    @WithUserDetails(value = "yg04076@naver.com")
    public void 게시글_업데이트_실패_존재하지_않는_포스트() throws Exception {
        // given
        Long postId = 10L;

        List<Long> retainedImageIds = new ArrayList<>();
        retainedImageIds.add(1L);

        List<PostRequest.PostImageDTO> imageDTOS = new ArrayList<>();
        imageDTOS.add(new PostRequest.PostImageDTO("https://apple.com/image1.jpg"));
        imageDTOS.add(new PostRequest.PostImageDTO("https://apple.com/image2.jpg"));

        PostRequest.UpdatePostDTO requestDTO = new PostRequest.UpdatePostDTO("치와아 입양 후기 올립니다5!", "입양 2일차 입니다!", retainedImageIds, imageDTOS);
        String requestBody = om.writeValueAsString(requestDTO);

        // when
        ResultActions result = mvc.perform(
                patch("/api/posts/" + postId )
                        .contentType(MediaType.APPLICATION_JSON_VALUE)
                        .content(requestBody)
        );

        String responseBody = result.andReturn().getResponse().getContentAsString();
        System.out.println("테스트 : " + responseBody);

        result.andExpect(jsonPath("$.success").value("false"));
    }

    @Test
    @WithUserDetails(value = "yg040762@naver.com")
    public void 게시글_업데이트_실패_권한_없음() throws Exception {
        // given
        Long postId = 1L;

        List<Long> retainedImageIds = new ArrayList<>();
        retainedImageIds.add(1L);

        List<PostRequest.PostImageDTO> imageDTOS = new ArrayList<>();
        imageDTOS.add(new PostRequest.PostImageDTO("https://apple.com/image1.jpg"));
        imageDTOS.add(new PostRequest.PostImageDTO("https://apple.com/image2.jpg"));

        PostRequest.UpdatePostDTO requestDTO = new PostRequest.UpdatePostDTO("치와아 입양 후기 올립니다5!", "입양 2일차 입니다!", retainedImageIds, imageDTOS);
        String requestBody = om.writeValueAsString(requestDTO);

        // when
        ResultActions result = mvc.perform(
                patch("/api/posts/" + postId )
                        .contentType(MediaType.APPLICATION_JSON_VALUE)
                        .content(requestBody)
        );

        String responseBody = result.andReturn().getResponse().getContentAsString();
        System.out.println("테스트 : " + responseBody);

        result.andExpect(jsonPath("$.success").value("false"));
    }

    @Test
    @WithUserDetails(value = "yg04076@naver.com")
    public void 게시글_삭제_성공() throws Exception {
        // given
        Long postId = 3L;

        // when
        ResultActions result = mvc.perform(
                delete("/api/posts/"+postId)
                .contentType(MediaType.APPLICATION_JSON_VALUE)
        );

        String responseBody = result.andReturn().getResponse().getContentAsString();
        System.out.println("테스트 : " + responseBody);

        result.andExpect(jsonPath("$.success").value("true"));
    }

    @Test
    @WithUserDetails(value = "yg04076@naver.com")
    public void 게시글_삭제_실패_존재하지_않는_게시글() throws Exception {
        // given
        Long postId = 10L;

        // when
        ResultActions result = mvc.perform(
                delete("/api/posts/"+postId)
                        .contentType(MediaType.APPLICATION_JSON_VALUE)
        );

        String responseBody = result.andReturn().getResponse().getContentAsString();
        System.out.println("테스트 : " + responseBody);

        result.andExpect(jsonPath("$.success").value("false"));
    }

    @Test
    @WithUserDetails(value = "yg040762@naver.com")
    public void 게시글_삭제_실패_권한_없음() throws Exception {
        // given
        Long postId = 3L;

        // when
        ResultActions result = mvc.perform(
                delete("/api/posts/"+postId)
                        .contentType(MediaType.APPLICATION_JSON_VALUE)
        );

        String responseBody = result.andReturn().getResponse().getContentAsString();
        System.out.println("테스트 : " + responseBody);

        result.andExpect(jsonPath("$.success").value("false"));
    }

    @Test
    @WithUserDetails(value = "yg040762@naver.com")
    public void 게시글_좋아요_성공() throws Exception {
        // given
        Long postId = 1L;

        // when
        ResultActions result = mvc.perform(
                post("/api/posts/"+postId+"/like")
                        .contentType(MediaType.APPLICATION_JSON_VALUE)
        );

        String responseBody = result.andReturn().getResponse().getContentAsString();
        System.out.println("테스트 : " + responseBody);

        result.andExpect(jsonPath("$.success").value("true"));
    }

    @Test
    @WithUserDetails(value = "yg04076@naver.com")
    public void 게시글_좋아요_실패_자신의_글에_좋아요() throws Exception {
        // given
        Long postId = 1L;

        // when
        ResultActions result = mvc.perform(
                post("/api/posts/"+postId+"/like")
                        .contentType(MediaType.APPLICATION_JSON_VALUE)
        );

        String responseBody = result.andReturn().getResponse().getContentAsString();
        System.out.println("테스트 : " + responseBody);

        result.andExpect(jsonPath("$.success").value("false"));
    }

    @Test
    @WithUserDetails(value = "yg04076@naver.com")
    public void 게시글_좋아요_실패_존재하지_않는_글() throws Exception {
        // given
        Long postId = 100L;

        // when
        ResultActions result = mvc.perform(
                post("/api/posts/"+postId+"/like")
                        .contentType(MediaType.APPLICATION_JSON_VALUE)
        );

        String responseBody = result.andReturn().getResponse().getContentAsString();
        System.out.println("테스트 : " + responseBody);

        result.andExpect(jsonPath("$.success").value("false"));
    }

    @Test
    @WithUserDetails(value = "yg04076@naver.com")
    public void 댓글_작성_성공() throws Exception {
        // given
        Long postId = 4L;

        PostRequest.CreateCommentDTO requestDTO = new PostRequest.CreateCommentDTO("hello");
        String requestBody = om.writeValueAsString(requestDTO);

        // when
        ResultActions result = mvc.perform(
                post("/api/posts/"+postId+"/comments")
                        .contentType(MediaType.APPLICATION_JSON_VALUE)
                        .content(requestBody)
        );

        String responseBody = result.andReturn().getResponse().getContentAsString();
        System.out.println("테스트 : " + responseBody);

        result.andExpect(jsonPath("$.success").value("true"));
    }

    @Test
    @WithUserDetails(value = "yg04076@naver.com")
    public void 댓글_작성_실패_존재하지_않는_게시글() throws Exception {
        // given
        Long postId = 100L;

        PostRequest.CreateCommentDTO requestDTO = new PostRequest.CreateCommentDTO("hello");
        String requestBody = om.writeValueAsString(requestDTO);

        // when
        ResultActions result = mvc.perform(
                post("/api/posts/"+postId+"/comments")
                        .contentType(MediaType.APPLICATION_JSON_VALUE)
                        .content(requestBody)
        );

        String responseBody = result.andReturn().getResponse().getContentAsString();
        System.out.println("테스트 : " + responseBody);

        result.andExpect(jsonPath("$.success").value("false"));
    }

    @Test
    @WithUserDetails(value = "yg04076@naver.com")
    public void 댓글_수정_성공() throws Exception {
        // given
        Long commentId = 1L;

        PostRequest.UpdateCommentDTO requestDTO = new PostRequest.UpdateCommentDTO("수정된 댓글입니다");
        String requestBody = om.writeValueAsString(requestDTO);

        // when
        ResultActions result = mvc.perform(
                patch("/api/comments/" + commentId)
                        .contentType(MediaType.APPLICATION_JSON_VALUE)
                        .content(requestBody)
        );

        String responseBody = result.andReturn().getResponse().getContentAsString();
        System.out.println("테스트 : " + responseBody);

        result.andExpect(jsonPath("$.success").value("true"));
    }

    @Test
    @WithUserDetails(value = "yg040762@naver.com")
    public void 댓글_수정_실패_권한_없음() throws Exception {
        // given
        Long commentId = 1L;

        PostRequest.UpdateCommentDTO requestDTO = new PostRequest.UpdateCommentDTO("수정된 댓글입니다");
        String requestBody = om.writeValueAsString(requestDTO);

        // when
        ResultActions result = mvc.perform(
                patch("/api/comments/" + commentId)
                        .contentType(MediaType.APPLICATION_JSON_VALUE)
                        .content(requestBody)
        );

        String responseBody = result.andReturn().getResponse().getContentAsString();
        System.out.println("테스트 : " + responseBody);

        result.andExpect(jsonPath("$.success").value("false"));
    }

    @Test
    @WithUserDetails(value = "yg04076@naver.com")
    public void 댓글_수정_실패_존재하지_않는_댓글() throws Exception {
        // given
        Long commentId = 10L;

        PostRequest.UpdateCommentDTO requestDTO = new PostRequest.UpdateCommentDTO("수정된 댓글입니다");
        String requestBody = om.writeValueAsString(requestDTO);

        // when
        ResultActions result = mvc.perform(
                patch("/api/comments/" + commentId)
                        .contentType(MediaType.APPLICATION_JSON_VALUE)
                        .content(requestBody)
        );

        String responseBody = result.andReturn().getResponse().getContentAsString();
        System.out.println("테스트 : " + responseBody);

        result.andExpect(jsonPath("$.success").value("false"));
    }

    @Test
    @WithUserDetails(value = "yg04076@naver.com")
    public void 댓글_삭제_성공() throws Exception {
        // given
        Long postId = 4L;
        Long commentId = 1L;

        // when
        ResultActions result = mvc.perform(
                delete("/api/posts/"+postId+"/comments/"+commentId)
                        .contentType(MediaType.APPLICATION_JSON_VALUE)
        );

        String responseBody = result.andReturn().getResponse().getContentAsString();
        System.out.println("테스트 : " + responseBody);

        result.andExpect(jsonPath("$.success").value("true"));
    }

    @Test
    @WithUserDetails(value = "yg04076@naver.com")
    public void 댓글_삭제_실패_존재하지_않는_댓글() throws Exception {
        // given
        Long postId = 4L;
        Long commentId = 10L;

        // when
        ResultActions result = mvc.perform(
                delete("/api/posts/"+postId+"/comments/"+commentId)
                        .contentType(MediaType.APPLICATION_JSON_VALUE)
        );

        String responseBody = result.andReturn().getResponse().getContentAsString();
        System.out.println("테스트 : " + responseBody);

        result.andExpect(jsonPath("$.success").value("false"));
    }
    @Test
    @WithUserDetails(value = "yg040762@naver.com")
    public void 댓글_삭제_실패_권한_없음() throws Exception {
        // given
        Long postId = 4L;
        Long commentId = 1L;

        // when
        ResultActions result = mvc.perform(
                delete("/api/posts/"+postId+"/comments/"+commentId)
                        .contentType(MediaType.APPLICATION_JSON_VALUE)
        );

        String responseBody = result.andReturn().getResponse().getContentAsString();
        System.out.println("테스트 : " + responseBody);

        result.andExpect(jsonPath("$.success").value("false"));
    }

    @Test
    @WithUserDetails(value = "yg040762@naver.com")
    public void 댓글에_좋아요_성공() throws Exception {
        // given
        Long commentId = 1L;

        // when
        ResultActions result = mvc.perform(
                post("/api/comments/"+commentId+"/like")
                        .contentType(MediaType.APPLICATION_JSON_VALUE)
        );

        String responseBody = result.andReturn().getResponse().getContentAsString();
        System.out.println("테스트 : " + responseBody);

        result.andExpect(jsonPath("$.success").value("true"));
    }

    @Test
    @WithUserDetails(value = "yg04076@naver.com")
    public void 댓글에_좋아요_실패_자신의_댓글에_좋아요() throws Exception {
        // given
        Long commentId = 1L;

        // when
        ResultActions result = mvc.perform(
                post("/api/comments/"+commentId+"/like")
                        .contentType(MediaType.APPLICATION_JSON_VALUE)
        );

        String responseBody = result.andReturn().getResponse().getContentAsString();
        System.out.println("테스트 : " + responseBody);

        result.andExpect(jsonPath("$.success").value("false"));
    }

    @Test
    @WithUserDetails(value = "yg040762@naver.com")
    public void 댓글에_좋아요_실패_존재하지_않는_댓글() throws Exception {
        // given
        Long commentId = 10L;

        // when
        ResultActions result = mvc.perform(
                post("/api/comments/"+commentId+"/like")
                        .contentType(MediaType.APPLICATION_JSON_VALUE)
        );

        String responseBody = result.andReturn().getResponse().getContentAsString();
        System.out.println("테스트 : " + responseBody);

        result.andExpect(jsonPath("$.success").value("false"));
    }
}