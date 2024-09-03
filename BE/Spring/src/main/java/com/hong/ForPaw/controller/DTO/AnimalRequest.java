package com.hong.ForPaw.controller.DTO;

import jakarta.validation.constraints.NotBlank;

public class AnimalRequest {

    public record ApplyAdoptionDTO(
                @NotBlank(message = "지원자 이름을 입력해주세요.")
                String name,
                @NotBlank(message = "연락처를 입력해주세요.")
                String tel,
                @NotBlank(message = "거주지를 입력해주세요.")
                String residence) {}

    public record UpdateApplyDTO(
            @NotBlank(message = "지원자 이름을 입력해주세요.")
            String name,
            @NotBlank(message = "연락처를 입력해주세요.")
            String tel,
            @NotBlank(message = "거주지를 입력해주세요.")
            String residence) {}
}
