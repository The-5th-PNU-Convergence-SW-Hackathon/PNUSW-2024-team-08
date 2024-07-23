package com.hong.ForPaw.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.hong.ForPaw.controller.DTO.UserRequest;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.test.context.support.WithUserDetails;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;


import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@AutoConfigureMockMvc
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.MOCK)
@ActiveProfiles("local")
class UserControllerTest {

    @Autowired
    private MockMvc mvc;

    @Autowired
    private ObjectMapper om;

    @Autowired
    private PasswordEncoder passwordEncoder;

    // 테스트 시 ddl=create로 하고 써야한다.
    @Test
    public void 로그인_성공() throws Exception {

        // given
        UserRequest.LoginDTO requestDTO = new UserRequest.LoginDTO("yg04076@naver.com", "hong1234");
        String requestBody = om.writeValueAsString(requestDTO);

        // when
        ResultActions result = mvc.perform(
                post("/api/auth/login")
                        .contentType(MediaType.APPLICATION_JSON_VALUE)
                        .content(requestBody)
        );

        // then
        result.andExpect(status().isOk()) // 상태 코드가 200인지 검증
                .andExpect(jsonPath("$.accessToken").exists()) // accessToken 필드가 응답 JSON에 존재하는지 검증
                .andExpect(cookie().exists("refreshToken")) // refreshToken 쿠키가 존재하는지 검증
                .andExpect(cookie().httpOnly("refreshToken", true)) // refreshToken 쿠키가 HttpOnly인지 검증
                .andExpect(header().exists("Set-Cookie")); // Set-Cookie 헤더가 존재하는지 검증
    }

    @Test
    public void 회원가입_성공() throws Exception {

        // given
        UserRequest.JoinDTO requestDTO = new UserRequest.JoinDTO("hoyai@naver.com", "한홍", "호얘이", "대구", "수성구", "pnu1234!", "pnu1234!", "www.s3.1234.com");
        String requestBody = om.writeValueAsString(requestDTO);

        // when
        ResultActions result = mvc.perform(
                post("/api/accounts")
                        .contentType(MediaType.APPLICATION_JSON_VALUE)
                        .content(requestBody)
        );

        // then
        result.andExpect(jsonPath("$.success").value("true"));
        result.andExpect(jsonPath("$.message").value("Created"));
    }

    @Test
    public void 이메일_중복체크_후_코드_전송_성공() throws Exception {

        // given
        UserRequest.EmailDTO requestDTO = new UserRequest.EmailDTO("yg04077@naver.com");
        String requestBody = om.writeValueAsString(requestDTO);

        // when
        ResultActions result = mvc.perform(
                post("/api/accounts/check")
                        .contentType(MediaType.APPLICATION_JSON_VALUE)
                        .content(requestBody)
        );

        String responseBody = result.andReturn().getResponse().getContentAsString();
        System.out.println("테스트 : "+responseBody);

        result.andExpect(jsonPath("$.success").value("true"));
    }

    @Test
    public void 비밀번호_재설정_이메일_코드전송_성공() throws Exception {

        // given
        UserRequest.EmailDTO requestDTO = new UserRequest.EmailDTO("yg04076@naver.com");
        String requestBody = om.writeValueAsString(requestDTO);

        // when
        ResultActions result = mvc.perform(
                post("/api/accounts/recovery")
                        .contentType(MediaType.APPLICATION_JSON_VALUE)
                        .content(requestBody)
        );

        String responseBody = result.andReturn().getResponse().getContentAsString();
        System.out.println("테스트 : "+responseBody);

        result.andExpect(jsonPath("$.success").value("true"));
    }

    @Test
    public void 비밀번호_재설정_이메일_코드전송_실패() throws Exception {

        // given
        UserRequest.EmailDTO requestDTO = new UserRequest.EmailDTO("yg04077@naver.com");
        String requestBody = om.writeValueAsString(requestDTO);

        // when
        ResultActions result = mvc.perform(
                post("/api/accounts/recovery")
                        .contentType(MediaType.APPLICATION_JSON_VALUE)
                        .content(requestBody)
        );

        String responseBody = result.andReturn().getResponse().getContentAsString();
        System.out.println("테스트 : "+responseBody);

        result.andExpect(jsonPath("$.success").value("false"));
    }

    // 테스트 방법은 비밀번호_재설정_이메일_코드전송_성공() 테스트 실행 => 이메일에서 받은 코드 DTO에 입력 후 실행
    @Test
    public void 임시비밀번호_전송_성공() throws Exception {

        // given
        UserRequest.VerifyCodeDTO requestDTO = new UserRequest.VerifyCodeDTO("yg04076@naver.com", "iZ6Wk4Wu");
        String requestBody = om.writeValueAsString(requestDTO);

        // when
        ResultActions result = mvc.perform(
                post("/api/accounts/recovery/verify")
                        .contentType(MediaType.APPLICATION_JSON_VALUE)
                        .content(requestBody)
        );

        String responseBody = result.andReturn().getResponse().getContentAsString();
        System.out.println("테스트 : "+responseBody);

        result.andExpect(jsonPath("$.success").value("true"));
    }

    @Test
    public void 임시비밀번호_전송_실패() throws Exception {

        // given
        // 잘못된 코드 입력
        UserRequest.VerifyCodeDTO requestDTO = new UserRequest.VerifyCodeDTO("yg04076@naver.com", "noAdv");
        String requestBody = om.writeValueAsString(requestDTO);

        // when
        ResultActions result = mvc.perform(
                post("/api/accounts/recovery/verify")
                        .contentType(MediaType.APPLICATION_JSON_VALUE)
                        .content(requestBody)
        );

        String responseBody = result.andReturn().getResponse().getContentAsString();
        System.out.println("테스트 : "+responseBody);

        result.andExpect(jsonPath("$.success").value("false"));
    }

    @Test
    @WithUserDetails(value = "yg04076@naver.com")
    public void 현재_비밀번호_일치여부_확인_성공() throws Exception {

        // given
        UserRequest.CurPasswordDTO requestDTO = new UserRequest.CurPasswordDTO("pnu1234~");
        String requestBody = om.writeValueAsString(requestDTO);

        // when
        ResultActions result = mvc.perform(
                post("/api/accounts/password/verify")
                        .contentType(MediaType.APPLICATION_JSON_VALUE)
                        .content(requestBody)
        );

        String responseBody = result.andReturn().getResponse().getContentAsString();
        System.out.println("테스트 : "+responseBody);

        result.andExpect(jsonPath("$.success").value("true"));
    }

    @Test
    @WithUserDetails(value = "yg04076@naver.com")
    public void 현재_비밀번호_일치여부_확인_실패() throws Exception {

        // given
        // 잘못된 비밀번호
        UserRequest.CurPasswordDTO requestDTO = new UserRequest.CurPasswordDTO("pnu1234");
        String requestBody = om.writeValueAsString(requestDTO);

        // when
        ResultActions result = mvc.perform(
                post("/api/accounts/password/verify")
                        .contentType(MediaType.APPLICATION_JSON_VALUE)
                        .content(requestBody)
        );

        String responseBody = result.andReturn().getResponse().getContentAsString();
        System.out.println("테스트 : "+responseBody);

        result.andExpect(jsonPath("$.success").value("false"));
    }

    @Test
    @WithUserDetails(value = "yg04076@naver.com")
    public void 비밀번호_재설정_성공() throws Exception {

        // given
        UserRequest.UpdatePasswordDTO requestDTO = new UserRequest.UpdatePasswordDTO("pnu1234~", "pnu1234~", "446y*4MD");
        String requestBody = om.writeValueAsString(requestDTO);

        // when
        ResultActions result = mvc.perform(
                patch("/api/accounts/password")
                        .contentType(MediaType.APPLICATION_JSON_VALUE)
                        .content(requestBody)
        );

        String responseBody = result.andReturn().getResponse().getContentAsString();
        System.out.println("테스트 : "+responseBody);

        result.andExpect(jsonPath("$.success").value("true"));
    }

    @Test
    @WithUserDetails(value = "yg04076@naver.com")
    public void 비밀번호_재설정_실패_1() throws Exception {

        // given
        UserRequest.UpdatePasswordDTO requestDTO = new UserRequest.UpdatePasswordDTO("pnu1234~", "pnu1234~", "pnu123~");
        String requestBody = om.writeValueAsString(requestDTO);

        // when
        ResultActions result = mvc.perform(
                patch("/api/accounts/password")
                        .contentType(MediaType.APPLICATION_JSON_VALUE)
                        .content(requestBody)
        );

        String responseBody = result.andReturn().getResponse().getContentAsString();
        System.out.println("테스트 : "+responseBody);

        result.andExpect(jsonPath("$.success").value("false"));
    }

    @Test
    @WithUserDetails(value = "yg04076@naver.com")
    public void 비밀번호_재설정_실패_2() throws Exception {

        // given
        UserRequest.UpdatePasswordDTO requestDTO = new UserRequest.UpdatePasswordDTO("pnu1234~", "pnu124~", "pnu1234~");
        String requestBody = om.writeValueAsString(requestDTO);

        // when
        ResultActions result = mvc.perform(
                patch("/api/accounts/password")
                        .contentType(MediaType.APPLICATION_JSON_VALUE)
                        .content(requestBody)
        );

        String responseBody = result.andReturn().getResponse().getContentAsString();
        System.out.println("테스트 : "+responseBody);

        result.andExpect(jsonPath("$.success").value("false"));
    }

    // 테스트를 위해선 로그인을 통해 RefreshToken을 발급 받아야 한다
    @Test
    public void 엑세스_토큰_재발급_성공() throws Exception {

        // given
        UserRequest.UpdateAccessTokenDTO requestDTO = new UserRequest.UpdateAccessTokenDTO("eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ5ZzA0MDc2QG5hdmVyLmNvbSIsInJvbGUiOjAsImlkIjo0LCJleHAiOjE3MDk3MDEyODl9.iSpEDE4HIbaQV77xWyPuKJe2Xi5A6LC-zqhfpzIHRhe5TzGWoB0VYagM8xf1GhzqGhoRyyPa_1KZ6D3-5sKQxA");
        String requestBody = om.writeValueAsString(requestDTO);

        // when
        ResultActions result = mvc.perform(
                patch("/api/auth/access")
                        .contentType(MediaType.APPLICATION_JSON_VALUE)
                        .content(requestBody)
        );

        String responseBody = result.andReturn().getResponse().getContentAsString();
        System.out.println("테스트 : "+responseBody);

        result.andExpect(jsonPath("$.success").value("true"));
    }

    @Test
    public void 엑세스_토큰_재발급_실패_1() throws Exception {

        // given
        // 잘못된 토큰 형식
        UserRequest.UpdateAccessTokenDTO requestDTO = new UserRequest.UpdateAccessTokenDTO("eyJ0eXAiOiJKVJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ5ZzA0MDc2QG5hdmVyLmNvbSIsInJvbGUiOjAsImlkIjo0LCJleHAiOjE3MDk3MDEyODl9.iSpEDE4HIbaQV77xWyPuKJe2Xi5A6LC-zqhfpzIHRhe5TzGWoB0VYagM8xf1GhzqGhoRyyPa_1KZ6D3-5sKQxA");
        String requestBody = om.writeValueAsString(requestDTO);

        // when
        ResultActions result = mvc.perform(
                patch("/api/auth/access")
                        .contentType(MediaType.APPLICATION_JSON_VALUE)
                        .content(requestBody)
        );

        String responseBody = result.andReturn().getResponse().getContentAsString();
        System.out.println("테스트 : "+responseBody);

        result.andExpect(jsonPath("$.success").value("false"));
    }

    @Test
    public void 엑세스_토큰_재발급_실패_2() throws Exception {

        // given
        // 만료된 토큰 (그냥 레디스의 데이터를 삭제하고 테스트 하면 됨)
        UserRequest.UpdateAccessTokenDTO requestDTO = new UserRequest.UpdateAccessTokenDTO("eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ5ZzA0MDc2QG5hdmVyLmNvbSIsInJvbGUiOjAsImlkIjo0LCJleHAiOjE3MDkxODI4ODl9.bfbTxdeGrYTpZn6ii-nKzfEm4BA4rgxfkRXQkR8uVTKN42q0EyrxS3arjbmpkKjag6EJbNanP8dNqxU924EyEA");
        String requestBody = om.writeValueAsString(requestDTO);

        // when
        ResultActions result = mvc.perform(
                patch("/api/auth/access")
                        .contentType(MediaType.APPLICATION_JSON_VALUE)
                        .content(requestBody)
        );

        String responseBody = result.andReturn().getResponse().getContentAsString();
        System.out.println("테스트 : "+responseBody);

        result.andExpect(jsonPath("$.success").value("false"));
    }

    @Test
    @WithUserDetails(value = "yg04076@naver.com")
    public void 프로필_조회_성공() throws Exception {

        // given
        // when
        ResultActions result = mvc.perform(
                get("/api/accounts/profile")
                        .contentType(MediaType.APPLICATION_JSON_VALUE)
        );

        String responseBody = result.andReturn().getResponse().getContentAsString();
        System.out.println("테스트 : "+responseBody);

        result.andExpect(jsonPath("$.success").value("true"));
    }

    @Test
    @WithUserDetails(value = "yg04076@naver.com")
    public void 프로필_수정_성공() throws Exception {

        // given
        UserRequest.UpdateProfileDTO requestDTO = new UserRequest.UpdateProfileDTO("hayaii", "대구", "수성구", "www.naver.com");
        String requestBody = om.writeValueAsString(requestDTO);

        // when
        ResultActions result = mvc.perform(
                patch("/api/accounts/profile")
                        .contentType(MediaType.APPLICATION_JSON_VALUE)
                        .content(requestBody)
        );

        String responseBody = result.andReturn().getResponse().getContentAsString();
        System.out.println("테스트 : "+responseBody);

        result.andExpect(jsonPath("$.success").value("true"));
    }
}