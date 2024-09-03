package com.hong.ForPaw.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.hong.ForPaw.controller.DTO.AnimalRequest;
import com.hong.ForPaw.controller.DTO.GroupRequest;
import com.hong.ForPaw.controller.DTO.PostRequest;
import com.hong.ForPaw.domain.Group.Role;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithUserDetails;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;

import java.time.LocalDateTime;
import java.time.Month;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;

@AutoConfigureMockMvc
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.MOCK)
@ActiveProfiles("local")
class GroupControllerTest {

    @Autowired
    private MockMvc mvc;

    @Autowired
    private ObjectMapper om;

    @Test
    @WithUserDetails(value = "yg040762@naver.com")
    public void 그룹_생성_성공() throws Exception {
        // given
        GroupRequest.CreateGroupDTO requestDTO = new GroupRequest.CreateGroupDTO("동물 사랑!", "대구광역시", "수성구", "유기견들을 진료하는 모임입니다!", "봉사", "https://s3.xxxx.xx.com");
        String requestBody = om.writeValueAsString(requestDTO);

        // when
        ResultActions result = mvc.perform(
                post("/api/groups")
                        .contentType(MediaType.APPLICATION_JSON_VALUE)
                        .content(requestBody)
        );

        String responseBody = result.andReturn().getResponse().getContentAsString();
        System.out.println("테스트 : " + responseBody);

        result.andExpect(jsonPath("$.success").value("true"));
    }

    @Test
    @WithUserDetails(value = "yg04076@naver.com")
    public void 그룹_정보_조회_성공() throws Exception {
        // given
        Long id = 1L;

        // when
        ResultActions result = mvc.perform(
                get("/api/groups/" + id)
                        .contentType(MediaType.APPLICATION_JSON_VALUE)
        );

        // then
        String responseBody = result.andReturn().getResponse().getContentAsString();
        System.out.println("테스트 : " + responseBody);

        result.andExpect(jsonPath("$.success").value("true"));
    }

    @Test
    @WithUserDetails(value = "yg04076@naver.com")
    public void 그룹_정보_수정_성공() throws Exception {
        // given
        Long id = 1L;
        GroupRequest.UpdateGroupDTO requestDTO = new GroupRequest.UpdateGroupDTO("동물 사랑 협회2", "대구광역시", "수성구", "유기견들을 진료하는 모임입니다!", "봉사", "https://s3.xxxx.xx.com");
        String requestBody = om.writeValueAsString(requestDTO);

        // when
        ResultActions result = mvc.perform(
                patch("/api/groups/" + id)
                        .contentType(MediaType.APPLICATION_JSON_VALUE)
                        .content(requestBody)
        );

        String responseBody = result.andReturn().getResponse().getContentAsString();
        System.out.println("테스트 : " + responseBody);

        result.andExpect(jsonPath("$.success").value("true"));
    }

    // 테스트 시나리오를 짜고 DB 세팅 후테스트 해야함! yg04076@naver.com은 그룹 생성자, yg040762@naver.com은 가입 신청자
    @Test
    @WithUserDetails(value = "yg04076@naver.com")
    public void 그룹_가입_신청하기_성공() throws Exception {
        // given
        Long groupId = 1L;
        GroupRequest.JoinGroupDTO requestDTO = new GroupRequest.JoinGroupDTO("안녕하세요! 가입 인사 드립니다 ^^");
        String requestBody = om.writeValueAsString(requestDTO);

        // when
        ResultActions result = mvc.perform(
                post("/api/groups/"+groupId+"/join")
                        .contentType(MediaType.APPLICATION_JSON_VALUE)
                        .content(requestBody)
        );

        String responseBody = result.andReturn().getResponse().getContentAsString();
        System.out.println("테스트 : " + responseBody);

        result.andExpect(jsonPath("$.success").value("true"));
    }

    @Test
    @WithUserDetails(value = "yg040762@naver.com")
    public void 그룹_가입_신청하기_실패_이미_신청() throws Exception {
        // given
        Long groupId = 12L;
        GroupRequest.JoinGroupDTO requestDTO = new GroupRequest.JoinGroupDTO("안녕하세요! 가입 인사 드립니다 ^^");
        String requestBody = om.writeValueAsString(requestDTO);

        // when
        ResultActions result = mvc.perform(
                post("/api/groups/"+groupId+"/join")
                        .contentType(MediaType.APPLICATION_JSON_VALUE)
                        .content(requestBody)
        );

        String responseBody = result.andReturn().getResponse().getContentAsString();
        System.out.println("테스트 : " + responseBody);

        result.andExpect(jsonPath("$.success").value("false"));
    }

    @Test
    @WithUserDetails(value = "yg040762@naver.com")
    public void 그룹_가입_신청하기_실패_존재하지_않는_그룹() throws Exception {
        // given
        Long groupId = 100L;
        GroupRequest.JoinGroupDTO requestDTO = new GroupRequest.JoinGroupDTO("안녕하세요! 가입 인사 드립니다 ^^");
        String requestBody = om.writeValueAsString(requestDTO);

        // when
        ResultActions result = mvc.perform(
                post("/api/groups/"+groupId+"/join")
                        .contentType(MediaType.APPLICATION_JSON_VALUE)
                        .content(requestBody)
        );

        String responseBody = result.andReturn().getResponse().getContentAsString();
        System.out.println("테스트 : " + responseBody);

        result.andExpect(jsonPath("$.success").value("false"));
    }

    @Test
    @WithUserDetails(value = "yg040762@naver.com")
    public void 그룹_가입_승인하기_성공() throws Exception {
        // given
        Long groupId = 1L;

        GroupRequest.ApproveJoinDTO requestDTO = new GroupRequest.ApproveJoinDTO(11L);
        String requestBody = om.writeValueAsString(requestDTO);

        // when
        ResultActions result = mvc.perform(
                post("/api/groups/"+groupId+"/join/approve")
                        .contentType(MediaType.APPLICATION_JSON_VALUE)
                        .content(requestBody)
        );

        String responseBody = result.andReturn().getResponse().getContentAsString();
        System.out.println("테스트 : " + responseBody);

        result.andExpect(jsonPath("$.success").value("true"));
    }

    @Test
    @WithUserDetails(value = "yg04076@naver.com")
    public void 그룹_가입_승인하기_실패_이미_승인한_신청() throws Exception {
        // given
        Long groupId = 12L;
        Long applicantId = 2L;

        // when
        ResultActions result = mvc.perform(
                post("/api/groups/"+groupId+"/join/approve")
                        .contentType(MediaType.APPLICATION_JSON_VALUE)
                        .param("id", applicantId.toString())
        );

        String responseBody = result.andReturn().getResponse().getContentAsString();
        System.out.println("테스트 : " + responseBody);

        result.andExpect(jsonPath("$.success").value("false"));
    }

    @Test
    @WithUserDetails(value = "yg04076@naver.com")
    public void 그룹_가입_승인하기_실패_존재하지_않는_그룹() throws Exception {
        // given
        Long groupId = 100L;
        Long applicantId = 2L;

        // when
        ResultActions result = mvc.perform(
                post("/api/groups/"+groupId+"/join/approve")
                        .contentType(MediaType.APPLICATION_JSON_VALUE)
                        .param("id", applicantId.toString())
        );

        String responseBody = result.andReturn().getResponse().getContentAsString();
        System.out.println("테스트 : " + responseBody);

        result.andExpect(jsonPath("$.success").value("false"));
    }

    @Test
    @WithUserDetails(value = "yg040763@naver.com")
    public void 그룹_가입_승인하기_실패_권한_없음() throws Exception {
        // given
        Long groupId = 12L;
        Long applicantId = 2L;

        // when
        ResultActions result = mvc.perform(
                post("/api/groups/"+groupId+"/join/approve")
                        .contentType(MediaType.APPLICATION_JSON_VALUE)
                        .param("id", applicantId.toString())
        );

        String responseBody = result.andReturn().getResponse().getContentAsString();
        System.out.println("테스트 : " + responseBody);

        result.andExpect(jsonPath("$.success").value("false"));
    }

    @Test
    @WithUserDetails(value = "yg04076@naver.com")
    public void 그룹_가입_승인하기_실패_신청한_적_없음() throws Exception {
        // given
        Long groupId = 12L;
        Long applicantId = 3L;

        // when
        ResultActions result = mvc.perform(
                post("/api/groups/"+groupId+"/join/approve")
                        .contentType(MediaType.APPLICATION_JSON_VALUE)
                        .param("id", applicantId.toString())
        );

        String responseBody = result.andReturn().getResponse().getContentAsString();
        System.out.println("테스트 : " + responseBody);

        result.andExpect(jsonPath("$.success").value("false"));
    }

    @Test
    @WithUserDetails(value = "yg04076@naver.com")
    public void 그룹_가입_거절하기_성공() throws Exception {
        // given
        Long groupId = 12L;
        Long applicantId = 3L;

        // when
        ResultActions result = mvc.perform(
                post("/api/groups/"+groupId+"/join/reject")
                        .contentType(MediaType.APPLICATION_JSON_VALUE)
                        .param("id", applicantId.toString())
        );

        String responseBody = result.andReturn().getResponse().getContentAsString();
        System.out.println("테스트 : " + responseBody);

        result.andExpect(jsonPath("$.success").value("true"));
    }

    @Test
    @WithUserDetails(value = "yg04076@naver.com")
    public void 그룹_가입_거절하기_실패_이미_거절한_신청() throws Exception {
        // given
        Long groupId = 12L;
        Long applicantId = 3L;

        // when
        ResultActions result = mvc.perform(
                post("/api/groups/"+groupId+"/join/reject")
                        .contentType(MediaType.APPLICATION_JSON_VALUE)
                        .param("id", applicantId.toString())
        );

        String responseBody = result.andReturn().getResponse().getContentAsString();
        System.out.println("테스트 : " + responseBody);

        result.andExpect(jsonPath("$.success").value("false"));
    }

    @Test
    @WithUserDetails(value = "yg040763@naver.com")
    public void 그룹_가입_거절하기_실패_권한_없음() throws Exception {
        // given
        Long groupId = 12L;
        Long applicantId = 3L;

        // when
        ResultActions result = mvc.perform(
                post("/api/groups/"+groupId+"/join/reject")
                        .contentType(MediaType.APPLICATION_JSON_VALUE)
                        .param("id", applicantId.toString())
        );

        String responseBody = result.andReturn().getResponse().getContentAsString();
        System.out.println("테스트 : " + responseBody);

        result.andExpect(jsonPath("$.success").value("false"));
    }

    @Test
    @WithUserDetails(value = "yg04076@naver.com")
    public void 그룹_가입_거절하기_실패_신청한_적이_없음() throws Exception {
        // given
        Long groupId = 12L;
        Long applicantId = 13L;

        // when
        ResultActions result = mvc.perform(
                post("/api/groups/"+groupId+"/join/reject")
                        .contentType(MediaType.APPLICATION_JSON_VALUE)
                        .param("id", applicantId.toString())
        );

        String responseBody = result.andReturn().getResponse().getContentAsString();
        System.out.println("테스트 : " + responseBody);

        result.andExpect(jsonPath("$.success").value("false"));
    }

    @Test
    @WithUserDetails(value = "yg040762@naver.com")
    public void 공지_작성_성공() throws Exception {
        // given
        Long groupId = 1L;

        List<PostRequest.PostImageDTO> images = Arrays.asList(
                new PostRequest.PostImageDTO("https://s3.xxxx.xx.com"),
                new PostRequest.PostImageDTO("https://s3.xxxx.xx.com")
        );

        GroupRequest.CreateNoticeDTO requestDTO = new GroupRequest.CreateNoticeDTO("공지입니다4!", "내일 일정은 취소 되었습니다", images);
        String requestBody = om.writeValueAsString(requestDTO);

        // when
        ResultActions result = mvc.perform(
                post("/api/groups/"+groupId+"/notices")
                        .contentType(MediaType.APPLICATION_JSON_VALUE)
                        .content(requestBody)
        );

        String responseBody = result.andReturn().getResponse().getContentAsString();
        System.out.println("테스트 : " + responseBody);

        result.andExpect(jsonPath("$.success").value("true"));
    }

    @Test
    @WithUserDetails(value = "yg040762@naver.com")
    public void 공지_작성_실패_존재하지_않는_그룹() throws Exception {
        // given
        Long groupId = 10L;

        List<PostRequest.PostImageDTO> images = Arrays.asList(
                new PostRequest.PostImageDTO("https://s3.xxxx.xx.com"),
                new PostRequest.PostImageDTO("https://s3.xxxx.xx.com")
        );

        GroupRequest.CreateNoticeDTO requestDTO = new GroupRequest.CreateNoticeDTO("공지입니다!", "내일 일정은 취소 되었습니다", images);
        String requestBody = om.writeValueAsString(requestDTO);

        // when
        ResultActions result = mvc.perform(
                post("/api/groups/"+groupId+"/notices")
                        .contentType(MediaType.APPLICATION_JSON_VALUE)
                        .content(requestBody)
        );

        String responseBody = result.andReturn().getResponse().getContentAsString();
        System.out.println("테스트 : " + responseBody);

        result.andExpect(jsonPath("$.success").value("false"));
    }

    @Test
    @WithUserDetails(value = "yg04076@naver.com")
    public void 공지_작성_실패_권한_없음() throws Exception {
        // given
        Long groupId = 1L;

        List<PostRequest.PostImageDTO> images = Arrays.asList(
                new PostRequest.PostImageDTO("https://s3.xxxx.xx.com"),
                new PostRequest.PostImageDTO("https://s3.xxxx.xx.com")
        );

        GroupRequest.CreateNoticeDTO requestDTO = new GroupRequest.CreateNoticeDTO("공지입니다!", "내일 일정은 취소 되었습니다", images);
        String requestBody = om.writeValueAsString(requestDTO);

        // when
        ResultActions result = mvc.perform(
                post("/api/groups/"+groupId+"/notices")
                        .contentType(MediaType.APPLICATION_JSON_VALUE)
                        .content(requestBody)
        );

        String responseBody = result.andReturn().getResponse().getContentAsString();
        System.out.println("테스트 : " + responseBody);

        result.andExpect(jsonPath("$.success").value("false"));
    }

    @Test
    @WithUserDetails(value = "yg040762@naver.com")
    public void 그룹_탈퇴하기_성공() throws Exception {
        // given
        Long groupId = 12L;

        // when
        ResultActions result = mvc.perform(
                post("/api/groups/"+groupId+"/withdraw")
                        .contentType(MediaType.APPLICATION_JSON_VALUE)
        );

        String responseBody = result.andReturn().getResponse().getContentAsString();
        System.out.println("테스트 : " + responseBody);

        result.andExpect(jsonPath("$.success").value("true"));
    }

    @Test
    @WithUserDetails(value = "yg040762@naver.com")
    public void 그룹_탈퇴하기_실패_존재하지_않는_그룹() throws Exception {
        // given
        Long groupId = 100L;

        // when
        ResultActions result = mvc.perform(
                post("/api/groups/"+groupId+"/withdraw")
                        .contentType(MediaType.APPLICATION_JSON_VALUE)
        );

        String responseBody = result.andReturn().getResponse().getContentAsString();
        System.out.println("테스트 : " + responseBody);

        result.andExpect(jsonPath("$.success").value("false"));
    }

    @Test
    @WithUserDetails(value = "yg040763@naver.com")
    public void 그룹_탈퇴하기_실패_가입한_회원이_아님() throws Exception {
        // given
        Long groupId = 12L;

        // when
        ResultActions result = mvc.perform(
                post("/api/groups/"+groupId+"/withdraw")
                        .contentType(MediaType.APPLICATION_JSON_VALUE)
        );

        String responseBody = result.andReturn().getResponse().getContentAsString();
        System.out.println("테스트 : " + responseBody);

        result.andExpect(jsonPath("$.success").value("false"));
    }

    @Test
    @WithUserDetails(value = "yg040762@naver.com")
    public void 그룹_삭제하기_성공() throws Exception {
        // given
        Long groupId = 21L;

        // when
        ResultActions result = mvc.perform(
                delete("/api/groups/"+groupId)
                        .contentType(MediaType.APPLICATION_JSON_VALUE)
        );

        String responseBody = result.andReturn().getResponse().getContentAsString();
        System.out.println("테스트 : " + responseBody);

        result.andExpect(jsonPath("$.success").value("true"));
    }

    @Test
    @WithUserDetails(value = "yg04076@naver.com")
    public void 그룹_삭제하기_실패_존재하지_않는_그룹() throws Exception {
        // given
        Long groupId = 100L;

        // when
        ResultActions result = mvc.perform(
                delete("/api/groups/"+groupId)
                        .contentType(MediaType.APPLICATION_JSON_VALUE)
        );

        String responseBody = result.andReturn().getResponse().getContentAsString();
        System.out.println("테스트 : " + responseBody);

        result.andExpect(jsonPath("$.success").value("false"));
    }

    @Test
    @WithUserDetails(value = "yg04076@naver.com")
    public void 그룹_삭제하기_실패_권한_없음() throws Exception {
        // given
        Long groupId = 21L;

        // when
        ResultActions result = mvc.perform(
                delete("/api/groups/"+groupId)
                        .contentType(MediaType.APPLICATION_JSON_VALUE)
        );

        String responseBody = result.andReturn().getResponse().getContentAsString();
        System.out.println("테스트 : " + responseBody);

        result.andExpect(jsonPath("$.success").value("false"));
    }

    @Test
    @WithUserDetails(value = "yg040762@naver.com")
    public void 유저_역할_변경_성공() throws Exception {
        // given
        Long groupId = 22L;
        GroupRequest.UpdateUserRoleDTO requestDTO = new GroupRequest.UpdateUserRoleDTO(1L, Role.ADMIN);
        String requestBody = om.writeValueAsString(requestDTO);

        // when
        ResultActions result = mvc.perform(
                patch("/api/groups/"+groupId+"/role")
                        .contentType(MediaType.APPLICATION_JSON_VALUE)
                        .content(requestBody)
        );

        String responseBody = result.andReturn().getResponse().getContentAsString();
        System.out.println("테스트 : " + responseBody);

        result.andExpect(jsonPath("$.success").value("true"));
    }

    @Test
    @WithUserDetails(value = "yg040762@naver.com")
    public void 유저_역할_변경_실패_가입하지_않은_회원() throws Exception {
        // given
        Long groupId = 22L;
        GroupRequest.UpdateUserRoleDTO requestDTO = new GroupRequest.UpdateUserRoleDTO(4L, Role.ADMIN);
        String requestBody = om.writeValueAsString(requestDTO);

        // when
        ResultActions result = mvc.perform(
                patch("/api/groups/"+groupId+"/role")
                        .contentType(MediaType.APPLICATION_JSON_VALUE)
                        .content(requestBody)
        );

        String responseBody = result.andReturn().getResponse().getContentAsString();
        System.out.println("테스트 : " + responseBody);

        result.andExpect(jsonPath("$.success").value("false"));
    }

    @Test
    @WithUserDetails(value = "yg04076@naver.com")
    public void 유저_역할_변경_실패_권한_없음() throws Exception {
        // given
        Long groupId = 22L;
        GroupRequest.UpdateUserRoleDTO requestDTO = new GroupRequest.UpdateUserRoleDTO(1L, Role.ADMIN);
        String requestBody = om.writeValueAsString(requestDTO);

        // when
        ResultActions result = mvc.perform(
                patch("/api/groups/"+groupId+"/role")
                        .contentType(MediaType.APPLICATION_JSON_VALUE)
                        .content(requestBody)
        );

        String responseBody = result.andReturn().getResponse().getContentAsString();
        System.out.println("테스트 : " + responseBody);

        result.andExpect(jsonPath("$.success").value("false"));
    }

    @Test
    @WithUserDetails(value = "yg040762@naver.com")
    public void 유저_역할_변경_실패_그룹장으로_변경시도() throws Exception {
        // given
        Long groupId = 22L;
        GroupRequest.UpdateUserRoleDTO requestDTO = new GroupRequest.UpdateUserRoleDTO(1L, Role.CREATOR);
        String requestBody = om.writeValueAsString(requestDTO);

        // when
        ResultActions result = mvc.perform(
                patch("/api/groups/"+groupId+"/role")
                        .contentType(MediaType.APPLICATION_JSON_VALUE)
                        .content(requestBody)
        );

        String responseBody = result.andReturn().getResponse().getContentAsString();
        System.out.println("테스트 : " + responseBody);

        result.andExpect(jsonPath("$.success").value("false"));
    }

    @Test
    @WithUserDetails(value = "yg040762@naver.com")
    public void 유저_역할_변경_실패_그룹장_자신의_역할_변경불가() throws Exception {
        // given
        Long groupId = 22L;
        GroupRequest.UpdateUserRoleDTO requestDTO = new GroupRequest.UpdateUserRoleDTO(2L, Role.ADMIN);
        String requestBody = om.writeValueAsString(requestDTO);

        // when
        ResultActions result = mvc.perform(
                patch("/api/groups/"+groupId+"/role")
                        .contentType(MediaType.APPLICATION_JSON_VALUE)
                        .content(requestBody)
        );

        String responseBody = result.andReturn().getResponse().getContentAsString();
        System.out.println("테스트 : " + responseBody);

        result.andExpect(jsonPath("$.success").value("false"));
    }

    @Test
    @WithUserDetails(value = "yg04076@naver.com")
    public void 관심_그룹으로_등록_성공() throws Exception {
        // given
        Long groupId = 12L;

        // when
        ResultActions result = mvc.perform(
                post("/api/groups/"+groupId+"/like")
                        .contentType(MediaType.APPLICATION_JSON_VALUE)
        );

        String responseBody = result.andReturn().getResponse().getContentAsString();
        System.out.println("테스트 : " + responseBody);

        result.andExpect(jsonPath("$.success").value("true"));
    }

    @Test
    @WithUserDetails(value = "yg04076@naver.com")
    public void 관심_그룹으로_등록_실패_존재하지_않는_그룹() throws Exception {
        // given
        Long groupId = 100L;

        // when
        ResultActions result = mvc.perform(
                post("/api/groups/"+groupId+"/like")
                        .contentType(MediaType.APPLICATION_JSON_VALUE)
        );

        String responseBody = result.andReturn().getResponse().getContentAsString();
        System.out.println("테스트 : " + responseBody);

        result.andExpect(jsonPath("$.success").value("false"));
    }

    @Test
    @WithUserDetails(value = "yg040762@naver.com")
    public void 그룹_상세_조회_성공() throws Exception {
        // given
        Long groupId = 1L;

        // when
        ResultActions result = mvc.perform(
                get("/api/groups/"+groupId+"/detail")
                        .contentType(MediaType.APPLICATION_JSON_VALUE)
        );

        // then
        String responseBody = result.andReturn().getResponse().getContentAsString();
        System.out.println("테스트 : " + responseBody);

        result.andExpect(jsonPath("$.success").value("true"));
    }

    @Test
    @WithUserDetails(value = "yg040762@naver.com")
    public void 그룹_상세_조회_실패_존재하지_않는_그룹() throws Exception {
        // given
        Long groupId = 10L;

        // when
        ResultActions result = mvc.perform(
                get("/api/groups/"+groupId+"/detail")
                        .contentType(MediaType.APPLICATION_JSON_VALUE)
        );

        // then
        String responseBody = result.andReturn().getResponse().getContentAsString();
        System.out.println("테스트 : " + responseBody);

        result.andExpect(jsonPath("$.success").value("false"));
    }

    @Test
    @WithUserDetails(value = "yg040762@naver.com")
    public void 공지사항_추가_조회_성공() throws Exception {
        // given
        Long groupId = 1L;

        // when
        ResultActions result = mvc.perform(
                get("/api/groups/"+groupId+"/notices")
                        .contentType(MediaType.APPLICATION_JSON_VALUE)
                        .param("size", "5")
                        .param("page", "0")
        );

        // then
        String responseBody = result.andReturn().getResponse().getContentAsString();
        System.out.println("테스트 : " + responseBody);

        result.andExpect(jsonPath("$.success").value("true"));
    }

    @Test
    @WithUserDetails(value = "yg040762@naver.com")
    public void 공지사항_추가_조회_실패_존재하지_않는_그룹() throws Exception {
        // given
        Long groupId = 10L;

        // when
        ResultActions result = mvc.perform(
                get("/api/groups/"+groupId+"/notices")
                        .contentType(MediaType.APPLICATION_JSON_VALUE)
                        .param("size", "5")
                        .param("page", "0")
        );

        // then
        String responseBody = result.andReturn().getResponse().getContentAsString();
        System.out.println("테스트 : " + responseBody);

        result.andExpect(jsonPath("$.success").value("false"));
    }

    @Test
    @WithUserDetails(value = "yg040762@naver.com")
    public void 정기모임_추가_조회_성공() throws Exception {
        // given
        Long groupId = 1L;

        // when
        ResultActions result = mvc.perform(
                get("/api/groups/"+groupId+"/meetings")
                        .contentType(MediaType.APPLICATION_JSON_VALUE)
                        .param("size", "5")
                        .param("page", "0")
        );

        // then
        String responseBody = result.andReturn().getResponse().getContentAsString();
        System.out.println("테스트 : " + responseBody);

        result.andExpect(jsonPath("$.success").value("true"));
    }

    @Test
    @WithUserDetails(value = "yg040762@naver.com")
    public void 정기모임_추가_조회_실패_존재하지_않는_그룹() throws Exception {
        // given
        Long groupId = 10L;

        // when
        ResultActions result = mvc.perform(
                get("/api/groups/"+groupId+"/meetings")
                        .contentType(MediaType.APPLICATION_JSON_VALUE)
                        .param("size", "5")
                        .param("page", "0")
        );

        // then
        String responseBody = result.andReturn().getResponse().getContentAsString();
        System.out.println("테스트 : " + responseBody);

        result.andExpect(jsonPath("$.success").value("false"));
    }

    @Test
    @WithUserDetails(value = "yg04076@naver.com")
    public void 정기모임_조회_성공() throws Exception {
        // given
        Long groupId = 1L;
        Long meetingId = 1L;

        // when
        ResultActions result = mvc.perform(
                get("/api/groups/"+groupId+"/meetings/"+meetingId)
                        .contentType(MediaType.APPLICATION_JSON_VALUE)
        );

        // then
        String responseBody = result.andReturn().getResponse().getContentAsString();
        System.out.println("테스트 : " + responseBody);

        result.andExpect(jsonPath("$.success").value("true"));
    }

    @Test
    @WithUserDetails(value = "yg04076@naver.com")
    public void 정기모임_조회_실패_존재하지_않는_모임() throws Exception {
        // given
        Long groupId = 1L;
        Long meetingId = 100L;

        // when
        ResultActions result = mvc.perform(
                get("/api/groups/"+groupId+"/meetings/"+meetingId)
                        .contentType(MediaType.APPLICATION_JSON_VALUE)
        );

        // then
        String responseBody = result.andReturn().getResponse().getContentAsString();
        System.out.println("테스트 : " + responseBody);

        result.andExpect(jsonPath("$.success").value("false"));
    }

    @Test
    @WithUserDetails(value = "yg040763@naver.com")
    public void 정기모임_조회_실패_맴버가_아님() throws Exception {
        // given
        Long groupId = 1L;
        Long meetingId = 100L;

        // when
        ResultActions result = mvc.perform(
                get("/api/groups/"+groupId+"/meetings/"+meetingId)
                        .contentType(MediaType.APPLICATION_JSON_VALUE)
        );

        // then
        String responseBody = result.andReturn().getResponse().getContentAsString();
        System.out.println("테스트 : " + responseBody);

        result.andExpect(jsonPath("$.success").value("false"));
    }

    @Test
    @WithUserDetails(value = "yg040762@naver.com")
    public void 그룹_목록_조회_성공() throws Exception {
        // given
        String region = "대구광역시";

        // when
        ResultActions result = mvc.perform(
                get("/api/groups/")
                        .contentType(MediaType.APPLICATION_JSON_VALUE)
                        .param("region", region)
        );

        // then
        String responseBody = result.andReturn().getResponse().getContentAsString();
        System.out.println("테스트 : " + responseBody);

        result.andExpect(jsonPath("$.success").value("true"));
    }

    @Test
    @WithUserDetails(value = "yg040762@naver.com")
    public void 지역별_그룹_목록_추가조회_성공() throws Exception {
        // given
        String region = "대구광역시";

        // when
        ResultActions result = mvc.perform(
                get("/api/groups/local")
                        .contentType(MediaType.APPLICATION_JSON_VALUE)
                        .param("region", region)
                        .param("size", "5")
                        .param("page", "0")
        );

        // then
        String responseBody = result.andReturn().getResponse().getContentAsString();
        System.out.println("테스트 : " + responseBody);

        result.andExpect(jsonPath("$.success").value("true"));
    }

    @Test
    @WithUserDetails(value = "yg040762@naver.com")
    public void 새_그룹_목록_추가조회_성공() throws Exception {

        // given
        // when
        ResultActions result = mvc.perform(
                get("/api/groups/new")
                        .contentType(MediaType.APPLICATION_JSON_VALUE)
                        .param("size", "5")
                        .param("page", "0")
        );

        // then
        String responseBody = result.andReturn().getResponse().getContentAsString();
        System.out.println("테스트 : " + responseBody);

        result.andExpect(jsonPath("$.success").value("true"));
    }

    @Test
    @WithUserDetails(value = "yg04076@naver.com")
    public void 내_그룹_목록_추가조회_성공() throws Exception {
        // given
        // when
        ResultActions result = mvc.perform(
                get("/api/groups/my")
                        .contentType(MediaType.APPLICATION_JSON_VALUE)
                        .param("size", "5")
                        .param("page", "0")
        );

        // then
        String responseBody = result.andReturn().getResponse().getContentAsString();
        System.out.println("테스트 : " + responseBody);

        result.andExpect(jsonPath("$.success").value("true"));
    }

    @Test
    @WithUserDetails(value = "yg04076@naver.com")
    public void 정기모임_생성_성공() throws Exception {
        // given
        Long groupId = 1L;
        GroupRequest.CreateMeetingDTO requestDTO = new GroupRequest.CreateMeetingDTO("7차 동물 사랑 봉사", LocalDateTime.of(2024, Month.MARCH, 5, 10, 30), "범어역 1번 출구", 150000L, 15, "6차 모임입니다!", "https://s3.xxxx.xx.com");
        String requestBody = om.writeValueAsString(requestDTO);

        // when
        ResultActions result = mvc.perform(
                post("/api/groups/"+groupId+"/meetings")
                        .contentType(MediaType.APPLICATION_JSON_VALUE)
                        .content(requestBody)
        );

        String responseBody = result.andReturn().getResponse().getContentAsString();
        System.out.println("테스트 : " + responseBody);

        result.andExpect(jsonPath("$.success").value("true"));
    }

    @Test
    @WithUserDetails(value = "yg040762@naver.com")
    public void 정기모임_생성_실패_권한_없음() throws Exception {
        // given
        Long groupId = 12L;
        GroupRequest.CreateMeetingDTO requestDTO = new GroupRequest.CreateMeetingDTO("7차 동물 사랑 봉사", LocalDateTime.of(2024, Month.MARCH, 5, 10, 30), "범어역 1번 출구", 150000L, 15, "6차 모임입니다!", "https://s3.xxxx.xx.com");
        String requestBody = om.writeValueAsString(requestDTO);

        // when
        ResultActions result = mvc.perform(
                post("/api/groups/"+groupId+"/meetings")
                        .contentType(MediaType.APPLICATION_JSON_VALUE)
                        .content(requestBody)
        );

        String responseBody = result.andReturn().getResponse().getContentAsString();
        System.out.println("테스트 : " + responseBody);

        result.andExpect(jsonPath("$.success").value("false"));
    }

    @Test
    @WithUserDetails(value = "yg040762@naver.com")
    public void 정기모임_생성_실패_존재하지_않는_그룹() throws Exception {
        // given
        Long groupId = 100L;
        GroupRequest.CreateMeetingDTO requestDTO = new GroupRequest.CreateMeetingDTO("7차 동물 사랑 봉사", LocalDateTime.of(2024, Month.MARCH, 5, 10, 30), "범어역 1번 출구", 150000L, 15, "6차 모임입니다!", "https://s3.xxxx.xx.com");
        String requestBody = om.writeValueAsString(requestDTO);

        // when
        ResultActions result = mvc.perform(
                post("/api/groups/"+groupId+"/meetings")
                        .contentType(MediaType.APPLICATION_JSON_VALUE)
                        .content(requestBody)
        );

        String responseBody = result.andReturn().getResponse().getContentAsString();
        System.out.println("테스트 : " + responseBody);

        result.andExpect(jsonPath("$.success").value("false"));
    }

    @Test
    @WithUserDetails(value = "yg04076@naver.com")
    public void 정기모임_수정_성공() throws Exception {
        // given
        Long groupId = 12L;
        Long meetingId = 1L;
        GroupRequest.UpdateMeetingDTO requestDTO = new GroupRequest.UpdateMeetingDTO("7차 동물 사랑 봉사(수정)", LocalDateTime.of(2024, Month.MARCH, 5, 10, 30), "범어역 1번 출구", 150000L, 15, "6차 모임입니다!", "https://s3.xxxx.xx.com");
        String requestBody = om.writeValueAsString(requestDTO);

        // when
        ResultActions result = mvc.perform(
                patch("/api/groups/"+groupId+"/meetings/"+meetingId)
                        .contentType(MediaType.APPLICATION_JSON_VALUE)
                        .content(requestBody)
        );

        String responseBody = result.andReturn().getResponse().getContentAsString();
        System.out.println("테스트 : " + responseBody);

        result.andExpect(jsonPath("$.success").value("true"));
    }

    @Test
    @WithUserDetails(value = "yg040762@naver.com")
    public void 정기모임_수정_실패_권한_없음() throws Exception {
        // given
        Long groupId = 12L;
        Long meetingId = 1L;
        GroupRequest.UpdateMeetingDTO requestDTO = new GroupRequest.UpdateMeetingDTO("7차 동물 사랑 봉사(수정)", LocalDateTime.of(2024, Month.MARCH, 5, 10, 30), "범어역 1번 출구", 150000L, 15, "6차 모임입니다!", "https://s3.xxxx.xx.com");
        String requestBody = om.writeValueAsString(requestDTO);

        // when
        ResultActions result = mvc.perform(
                patch("/api/groups/"+groupId+"/meetings/"+meetingId)
                        .contentType(MediaType.APPLICATION_JSON_VALUE)
                        .content(requestBody)
        );

        String responseBody = result.andReturn().getResponse().getContentAsString();
        System.out.println("테스트 : " + responseBody);

        result.andExpect(jsonPath("$.success").value("false"));
    }

    @Test
    @WithUserDetails(value = "yg040762@naver.com")
    public void 정기모임_수정_실패_존재하지_않는_정기모임() throws Exception {
        // given
        Long groupId = 12L;
        Long meetingId = 10L;
        GroupRequest.UpdateMeetingDTO requestDTO = new GroupRequest.UpdateMeetingDTO("7차 동물 사랑 봉사(수정)", LocalDateTime.of(2024, Month.MARCH, 5, 10, 30), "범어역 1번 출구", 150000L, 15, "6차 모임입니다!", "https://s3.xxxx.xx.com");
        String requestBody = om.writeValueAsString(requestDTO);

        // when
        ResultActions result = mvc.perform(
                patch("/api/groups/"+groupId+"/meetings/"+meetingId)
                        .contentType(MediaType.APPLICATION_JSON_VALUE)
                        .content(requestBody)
        );

        String responseBody = result.andReturn().getResponse().getContentAsString();
        System.out.println("테스트 : " + responseBody);

        result.andExpect(jsonPath("$.success").value("false"));
    }

    @Test
    @WithUserDetails(value = "yg040762@naver.com")
    public void 정기모임_참여_성공() throws Exception {
        // given
        Long groupId = 12L;
        Long meetingId = 1L;

        // when
        ResultActions result = mvc.perform(
                post("/api/groups/"+groupId+"/meetings/"+meetingId+"/join")
                        .contentType(MediaType.APPLICATION_JSON_VALUE)
        );

        String responseBody = result.andReturn().getResponse().getContentAsString();
        System.out.println("테스트 : " + responseBody);

        result.andExpect(jsonPath("$.success").value("true"));
    }

    @Test
    @WithUserDetails(value = "yg040762@naver.com")
    public void 정기모임_참여_실패_이미_참여함() throws Exception {
        // given
        Long groupId = 12L;
        Long meetingId = 1L;

        // when
        ResultActions result = mvc.perform(
                post("/api/groups/"+groupId+"/meetings/"+meetingId+"/join")
                        .contentType(MediaType.APPLICATION_JSON_VALUE)
        );

        String responseBody = result.andReturn().getResponse().getContentAsString();
        System.out.println("테스트 : " + responseBody);

        result.andExpect(jsonPath("$.success").value("false"));
    }

    @Test
    @WithUserDetails(value = "yg040765@naver.com")
    public void 정기모임_참여_실패_그룹의_맴버가_아님() throws Exception {
        // given
        Long groupId = 12L;
        Long meetingId = 1L;

        // when
        ResultActions result = mvc.perform(
                post("/api/groups/"+groupId+"/meetings/"+meetingId+"/join")
                        .contentType(MediaType.APPLICATION_JSON_VALUE)
        );

        String responseBody = result.andReturn().getResponse().getContentAsString();
        System.out.println("테스트 : " + responseBody);

        result.andExpect(jsonPath("$.success").value("false"));
    }

    @Test
    @WithUserDetails(value = "yg040762@naver.com")
    public void 정기모임_참여_실패_존재하지_않는_미팅() throws Exception {
        // given
        Long groupId = 12L;
        Long meetingId = 10L;

        // when
        ResultActions result = mvc.perform(
                post("/api/groups/"+groupId+"/meetings/"+meetingId+"/join")
                        .contentType(MediaType.APPLICATION_JSON_VALUE)
        );

        String responseBody = result.andReturn().getResponse().getContentAsString();
        System.out.println("테스트 : " + responseBody);

        result.andExpect(jsonPath("$.success").value("false"));
    }

    @Test
    @WithUserDetails(value = "yg040762@naver.com")
    public void 정기모임_탈퇴_성공() throws Exception {
        // given
        Long groupId = 12L;
        Long meetingId = 1L;

        // when
        ResultActions result = mvc.perform(
                post("/api/groups/"+groupId+"/meetings/"+meetingId+"/withdraw")
                        .contentType(MediaType.APPLICATION_JSON_VALUE)
        );

        String responseBody = result.andReturn().getResponse().getContentAsString();
        System.out.println("테스트 : " + responseBody);

        result.andExpect(jsonPath("$.success").value("true"));
    }

    @Test
    @WithUserDetails(value = "yg04076@naver.com")
    public void 정기모임_탈퇴_실패_참여하지_않음() throws Exception {
        // given
        Long groupId = 12L;
        Long meetingId = 1L;

        // when
        ResultActions result = mvc.perform(
                post("/api/groups/"+groupId+"/meetings/"+meetingId+"/withdraw")
                        .contentType(MediaType.APPLICATION_JSON_VALUE)
        );

        String responseBody = result.andReturn().getResponse().getContentAsString();
        System.out.println("테스트 : " + responseBody);

        result.andExpect(jsonPath("$.success").value("false"));
    }

    @Test
    @WithUserDetails(value = "yg040765@naver.com")
    public void 정기모임_탈퇴_실패_그룹의_맴버가_아님() throws Exception {
        // given
        Long groupId = 12L;
        Long meetingId = 1L;

        // when
        ResultActions result = mvc.perform(
                post("/api/groups/"+groupId+"/meetings/"+meetingId+"/withdraw")
                        .contentType(MediaType.APPLICATION_JSON_VALUE)
        );

        String responseBody = result.andReturn().getResponse().getContentAsString();
        System.out.println("테스트 : " + responseBody);

        result.andExpect(jsonPath("$.success").value("false"));
    }

    @Test
    @WithUserDetails(value = "yg040765@naver.com")
    public void 정기모임_탈퇴_실패_존재하지_않는_미팅() throws Exception {
        // given
        Long groupId = 12L;
        Long meetingId = 100L;

        // when
        ResultActions result = mvc.perform(
                post("/api/groups/"+groupId+"/meetings/"+meetingId+"/withdraw")
                        .contentType(MediaType.APPLICATION_JSON_VALUE)
        );

        String responseBody = result.andReturn().getResponse().getContentAsString();
        System.out.println("테스트 : " + responseBody);

        result.andExpect(jsonPath("$.success").value("false"));
    }

    @Test
    @WithUserDetails(value = "yg04076@naver.com")
    public void 모임_삭제하기_성공() throws Exception {
        // given
        Long groupId = 12L;
        Long meetingId = 1L;

        // when
        ResultActions result = mvc.perform(
                delete("/api/groups/"+groupId+"/meetings/"+meetingId)
                        .contentType(MediaType.APPLICATION_JSON_VALUE)
        );

        String responseBody = result.andReturn().getResponse().getContentAsString();
        System.out.println("테스트 : " + responseBody);

        result.andExpect(jsonPath("$.success").value("true"));
    }

    @Test
    @WithUserDetails(value = "yg04076@naver.com")
    public void 모임_삭제하기_실패_존재하지_않는_모임() throws Exception {
        // given
        Long groupId = 12L;
        Long meetingId = 10L;

        // when
        ResultActions result = mvc.perform(
                delete("/api/groups/"+groupId+"/meetings/"+meetingId)
                        .contentType(MediaType.APPLICATION_JSON_VALUE)
        );

        String responseBody = result.andReturn().getResponse().getContentAsString();
        System.out.println("테스트 : " + responseBody);

        result.andExpect(jsonPath("$.success").value("false"));
    }

    @Test
    @WithUserDetails(value = "yg040762@naver.com")
    public void 모임_삭제하기_실패_권한_없음() throws Exception {
        // given
        Long groupId = 12L;
        Long meetingId = 2L;

        // when
        ResultActions result = mvc.perform(
                delete("/api/groups/"+groupId+"/meetings/"+meetingId)
                        .contentType(MediaType.APPLICATION_JSON_VALUE)
        );

        String responseBody = result.andReturn().getResponse().getContentAsString();
        System.out.println("테스트 : " + responseBody);

        result.andExpect(jsonPath("$.success").value("false"));
    }
}