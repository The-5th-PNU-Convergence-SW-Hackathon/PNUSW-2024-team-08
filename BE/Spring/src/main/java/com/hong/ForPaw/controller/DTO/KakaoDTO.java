package com.hong.ForPaw.controller.DTO;

public class KakaoDTO {
    public record TokenDTO(String token_type,
                           String access_token,
                           Integer expires_in,
                           String refresh_token,
                           Integer refresh_token_expires_in,
                           String scope) {}

    public record UserInfoDTO(Long id,
                              String connected_at,
                              Properties properties,
                              Account kakao_account) {}

    public record Properties(String nickname, String profile_image, String thumbnail_image) {}

    public record Account(Boolean profile_nickname_needs_agreement, Boolean profile_image_needs_agreement, Profile profile) {}

    public record Profile(String nickname,
                          String thumbnail_image_url,
                          String profile_image_url,
                          Boolean is_default_image) {}
}
