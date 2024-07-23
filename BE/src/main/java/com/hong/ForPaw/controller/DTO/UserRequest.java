package com.hong.ForPaw.controller.DTO;

import com.hong.ForPaw.domain.User.Role;

public class UserRequest {

    public record LoginDTO(String email, String password){}

    public record EmailDTO(String email){}

    public record VerifyCodeDTO(String email, String code){}

    public record JoinDTO(String email, String name, String nickName,
                          String region, String subRegion, String password,
                          String passwordConfirm, String profileURL) {}

    public record SocialJoinDTO(String email, String name, String nickName, String region,
                                String subRegion, String profileURL) {}

    public record CurPasswordDTO(String password) {}

    public record UpdatePasswordDTO(String newPassword, String newPasswordConfirm, String curPassword) {}

    public record UpdateProfileDTO(String nickName, String region, String subRegion, String profileURL) {}

    public record UpdateAccessTokenDTO(String refreshToken) {}

    public record UpdateRoleDTO(Role role) {}
}