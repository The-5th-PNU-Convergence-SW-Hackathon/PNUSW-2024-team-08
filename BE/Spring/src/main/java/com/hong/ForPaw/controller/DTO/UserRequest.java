package com.hong.ForPaw.controller.DTO;

import com.hong.ForPaw.domain.User.Role;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;

public class UserRequest {

    public record LoginDTO(
            @NotBlank(message = "이메일을 입력해주세요.")
            @Pattern(regexp = "^[\\w._%+-]+@[\\w.-]+\\.[a-zA-Z]{2,6}$", message = "올바른 이메일 형식을 입력해주세요.")
            String email,

            @NotBlank(message = "비밀번호를 입력해주세요.")
            @Size(min=8, max=20, message = "비밀번호는 8자에서 20자 이내여야 합니다.")
            @Pattern(regexp = "^(?=.*[a-zA-Z])(?=.*\\d)(?=.*[@#$%^&+=!~`<>,./?;:'\"\\[\\]{}\\\\()|_-])\\S*$", message = "올바른 비밀번호 형식을 입력해주세요.")
            String password){}

    public record EmailDTO(
            @NotBlank(message = "이메일을 입력해주세요.")
            @Pattern(regexp = "^[\\w._%+-]+@[\\w.-]+\\.[a-zA-Z]{2,6}$", message = "올바른 이메일 형식을 입력해주세요.")
            String email){}

    public record CheckNickDTO(
            @NotBlank(message = "닉네임을 입력해주세요.")
            String nickName){}

    public record VerifyCodeDTO(
            @NotBlank
            String email,
            @NotBlank(message = "코드를 입력해주세요.")
            String code){}

    public record JoinDTO(
            @NotBlank(message = "이메일을 입력해주세요.")
            @Pattern(regexp = "^[\\w._%+-]+@[\\w.-]+\\.[a-zA-Z]{2,6}$", message = "올바른 이메일 형식을 입력해주세요.")
            String email,
            @NotBlank(message = "이름을 입력해주세요.")
            String name,
            @NotBlank(message="닉네을 입력해주세요.")
            @Size(min=2, max=20, message = "닉네임은 2자에서 20자 이내여야 합니다.")
            String nickName,
            @NotBlank(message = "활동 지역을 입력해주세요.")
            String region,
            String subRegion,
            @NotBlank(message = "비밀번호를 입력해주세요.")
            @Size(min=8, max=20, message = "비밀번호는 8자에서 20자 이내여야 합니다.")
            @Pattern(regexp = "^(?=.*[a-zA-Z])(?=.*\\d)(?=.*[@#$%^&+=!~`<>,./?;:'\"\\[\\]{}\\\\()|_-])\\S*$", message = "올바른 비밀번호 형식을 입력해주세요.")
            String password,
            @NotBlank(message = "비밀번호를 입력해주세요.")
            String passwordConfirm,
            String profileURL) {}

    public record SocialJoinDTO(
            @NotBlank(message = "이메일을 입력해주세요.")
            @Pattern(regexp = "^[\\w._%+-]+@[\\w.-]+\\.[a-zA-Z]{2,6}$", message = "올바른 이메일 형식을 입력해주세요.")
            String email,
            @NotBlank(message = "이름을 입력해주세요.")
            String name,
            @NotBlank(message="닉네을 입력해주세요.")
            @Size(min=2, max=20, message = "닉네임은 2자에서 20자 이내여야 합니다.")
            String nickName,
            @NotBlank(message = "활동 지역을 입력해주세요.")
            String region,
            String subRegion,
            String profileURL) {}

    public record CurPasswordDTO(@NotBlank String password) {}

    public record UpdatePasswordDTO(
            @NotBlank(message = "비밀번호를 입력해주세요.")
            @Size(min=8, max=20, message = "비밀번호는 8자에서 20자 이내여야 합니다.")
            @Pattern(regexp = "^(?=.*[a-zA-Z])(?=.*\\d)(?=.*[@#$%^&+=!~`<>,./?;:'\"\\[\\]{}\\\\()|_-])\\S*$", message = "올바른 비밀번호 형식을 입력해주세요.")
            String newPassword,
            @NotBlank(message = "비밀번호를 입력해주세요.")
            String newPasswordConfirm,
            @NotBlank(message = "현재 비밀번호를 입력해주세요.")
            String curPassword) {}

    public record UpdateProfileDTO(
            @NotBlank(message="닉네을 입력해주세요.")
            String nickName,
            @NotBlank(message = "활동 지역을 입력해주세요.")
            String region,
            String subRegion,
            String profileURL) {}

    public record UpdateAccessTokenDTO(String refreshToken) {}

    public record UpdateRoleDTO(@NotBlank Role role) {}
}