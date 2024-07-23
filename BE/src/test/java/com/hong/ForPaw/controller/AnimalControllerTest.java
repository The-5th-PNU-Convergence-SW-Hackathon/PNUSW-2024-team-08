package com.hong.ForPaw.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.hong.ForPaw.controller.DTO.AnimalRequest;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithUserDetails;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@AutoConfigureMockMvc
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.MOCK)
@ActiveProfiles("local")
class AnimalControllerTest {

    @Autowired
    private MockMvc mvc;

    @Autowired
    private ObjectMapper om;

    @Test
    @WithUserDetails(value = "yg04076@naver.com")
    public void 보호동물_목록_조회_성공() throws Exception {

        // given
        // when
        ResultActions result = mvc.perform(
                get("/api/animals")
                        .contentType(MediaType.APPLICATION_JSON_VALUE)
                        .param("page", "0")
                        .param("size", "10")
                        .param("sort", "noticeSdt,desc")
        );

        // then
        String responseBody = result.andReturn().getResponse().getContentAsString();
        System.out.println("테스트 : " + responseBody);

        result.andExpect(jsonPath("$.success").value("true"));
    }

    @Test
    @WithUserDetails(value = "yg04076@naver.com")
    public void 보호동물_조회_성공() throws Exception {

        // given
        Long id = 427342202400090L;

        // when
        ResultActions result = mvc.perform(
                get("/api/animals/" + id)
                        .contentType(MediaType.APPLICATION_JSON_VALUE)
        );

        // then
        String responseBody = result.andReturn().getResponse().getContentAsString();
        System.out.println("테스트 : " + responseBody);

        result.andExpect(jsonPath("$.success").value("true"));
    }

    @Test
    @WithUserDetails(value = "yg04076@naver.com")
    public void 보호동물_조회_실패() throws Exception {

        // given
        // 존재하지 않는 동물
        Long id = 42734220L;

        // when
        ResultActions result = mvc.perform(
                get("/api/animals/" + id)
                        .contentType(MediaType.APPLICATION_JSON_VALUE)
        );

        // then
        String responseBody = result.andReturn().getResponse().getContentAsString();
        System.out.println("테스트 : " + responseBody);

        result.andExpect(jsonPath("$.success").value("false"));
    }

    @Test
    @WithUserDetails(value = "yg04076@naver.com")
    public void 관심동물_담기_성공() throws Exception {

        // given
        Long id = 427342202400090L;

        // when
        ResultActions result = mvc.perform(
                post("/api/animals/" + id + "/like")
                        .contentType(MediaType.APPLICATION_JSON_VALUE)
        );

        String responseBody = result.andReturn().getResponse().getContentAsString();
        System.out.println("테스트 : " + responseBody);

        result.andExpect(jsonPath("$.success").value("true"));
    }

    @Test
    @WithUserDetails(value = "yg04076@naver.com")
    public void 관심동물_담기_실패() throws Exception {

        // given
        // 존재하지 않는 동물
        Long id = 427342200090L;

        // when
        ResultActions result = mvc.perform(
                post("/api/animals/" + id + "/like")
                        .contentType(MediaType.APPLICATION_JSON_VALUE)
        );

        String responseBody = result.andReturn().getResponse().getContentAsString();
        System.out.println("테스트 : " + responseBody);

        result.andExpect(jsonPath("$.success").value("false"));
    }

    @Test
    @WithUserDetails(value = "yg04076@naver.com")
    public void 입양_지원서_작성_성공() throws Exception {

        // given
        Long id = 427342202400090L;
        AnimalRequest.ApplyAdoptionDTO requestDTO = new AnimalRequest.ApplyAdoptionDTO("이한홍", "010-1234-5678", "부산광역시 금정구 부산대학로64번길 79 (장전동, xx아파트)");
        String requestBody = om.writeValueAsString(requestDTO);

        // when
        ResultActions result = mvc.perform(
                post("/api/animals/" + id + "/apply")
                        .contentType(MediaType.APPLICATION_JSON_VALUE)
                        .content(requestBody)
        );

        String responseBody = result.andReturn().getResponse().getContentAsString();
        System.out.println("테스트 : " + responseBody);

        result.andExpect(jsonPath("$.success").value("true"));
    }

    @Test
    @WithUserDetails(value = "yg04076@naver.com")
    public void 입양_지원서_작성_실패() throws Exception {

        // given
        // 존재하지 않는 동물
        Long id = 427342202090L;
        AnimalRequest.ApplyAdoptionDTO requestDTO = new AnimalRequest.ApplyAdoptionDTO("이한홍", "010-1234-5678", "부산광역시 금정구 부산대학로64번길 79 (장전동, xx아파트)");
        String requestBody = om.writeValueAsString(requestDTO);

        // when
        ResultActions result = mvc.perform(
                post("/api/animals/" + id + "/apply")
                        .contentType(MediaType.APPLICATION_JSON_VALUE)
                        .content(requestBody)
        );

        String responseBody = result.andReturn().getResponse().getContentAsString();
        System.out.println("테스트 : " + responseBody);

        result.andExpect(jsonPath("$.success").value("false"));
    }

    @Test
    @WithUserDetails(value = "yg04076@naver.com")
    public void 입양_지원서_조회_성공() throws Exception {

        // given

        // when
        ResultActions result = mvc.perform(
                get("/api/applies")
                        .contentType(MediaType.APPLICATION_JSON_VALUE)
        );

        // then
        String responseBody = result.andReturn().getResponse().getContentAsString();
        System.out.println("테스트 : " + responseBody);

        result.andExpect(jsonPath("$.success").value("true"));
    }

    @Test
    @WithUserDetails(value = "yg04076@naver.com")
    public void 입양_문의_취소하기_성공() throws Exception {

        // given
        Long id = 1L;

        // when
        ResultActions result = mvc.perform(
                delete("/api/applies/" + id)
                        .contentType(MediaType.APPLICATION_JSON_VALUE)
        );

        String responseBody = result.andReturn().getResponse().getContentAsString();
        System.out.println("테스트 : " + responseBody);

        result.andExpect(jsonPath("$.success").value("true"));
    }

    @Test
    @WithUserDetails(value = "yg04076@naver.com")
    public void 입양_문의_취소하기_실패() throws Exception {

        // given
        // 존재하지 않는 아이디
        Long id = 10L;

        // when
        ResultActions result = mvc.perform(
                delete("/api/applies/" + id)
                        .contentType(MediaType.APPLICATION_JSON_VALUE)
        );

        String responseBody = result.andReturn().getResponse().getContentAsString();
        System.out.println("테스트 : " + responseBody);

        result.andExpect(jsonPath("$.success").value("false"));
    }

    @Test
    @WithUserDetails(value = "yg04076@naver.com")
    public void 보호소의_보호동물_목록_조회_성공() throws Exception {

        // given
        Long shelterId = 311305201300001L;

        // when
        ResultActions result = mvc.perform(
                get("/api/shelters/" + shelterId + "/animals")
                        .contentType(MediaType.APPLICATION_JSON_VALUE)
                        .param("page", "0")
                        .param("size", "10")
        );

        // then
        String responseBody = result.andReturn().getResponse().getContentAsString();
        System.out.println("테스트 : "+responseBody);

        result.andExpect(jsonPath("$.success").value("true"));
    }

    @Test
    @WithUserDetails(value = "yg04076@naver.com")
    public void 보호소의_보호동물_목록_조회_실패() throws Exception {

        // given
        // 존재하지 않는 아이디
        Long shelterId = 311305201300001L;

        // when
        ResultActions result = mvc.perform(
                get("/api/shelters/" + shelterId + "/animals")
                        .contentType(MediaType.APPLICATION_JSON_VALUE)
                        .param("page", "0")
                        .param("size", "10")
        );

        // then
        String responseBody = result.andReturn().getResponse().getContentAsString();
        System.out.println("테스트 : "+responseBody);

        result.andExpect(jsonPath("$.success").value("true"));
    }
}