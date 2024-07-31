package com.hong.ForPaw.controller;

import com.hong.ForPaw.controller.DTO.UserRequest;
import com.hong.ForPaw.controller.DTO.UserResponse;
import com.hong.ForPaw.core.security.CustomUserDetails;
import com.hong.ForPaw.core.security.JWTProvider;
import com.hong.ForPaw.core.utils.ApiUtils;
import com.hong.ForPaw.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class UserController {

    private final UserService userService;

    @PostMapping("/auth/login")
    public ResponseEntity<?> login(@RequestBody UserRequest.LoginDTO requestDTO, Errors errors) {
        Map<String, String> tokens = userService.login(requestDTO);

        return ResponseEntity.ok()
                .header(HttpHeaders.SET_COOKIE, ResponseCookie.from("refreshToken", tokens.get("refreshToken"))
                        .httpOnly(true)
                        .secure(true)
                        .sameSite("None")
                        .maxAge(JWTProvider.REFRESH_EXP)
                        .build().toString())
                .body(ApiUtils.success(HttpStatus.OK, new UserResponse.loginDTO(tokens.get("accessToken"))));
    }

    @GetMapping("/auth/login/kakao")
    public ResponseEntity<?> kakaoLogin(@RequestParam String code) {
        Map<String, String> tokenOrEmail = userService.kakaoLogin(code);

        // 가입된 계정이 아님
        if(tokenOrEmail.get("email") != null){
            return ResponseEntity.ok().body((ApiUtils.success(HttpStatus.OK, new UserResponse.kakaoLoginDTO("", tokenOrEmail.get("email")))));
        }

        // 가입된 계정이면, jwt 토큰 반환
        return ResponseEntity.ok()
                .header(HttpHeaders.SET_COOKIE, ResponseCookie.from("refreshToken", tokenOrEmail.get("refreshToken"))
                        .httpOnly(true)
                        .secure(true)
                        .sameSite("None")
                        .maxAge(JWTProvider.REFRESH_EXP)
                        .build().toString())
                .body(ApiUtils.success(HttpStatus.OK, new UserResponse.kakaoLoginDTO(tokenOrEmail.get("accessToken"), "")));
    }

    @GetMapping("/auth/login/google")
    public ResponseEntity<?> googleLogin(@RequestParam String code){
        Map<String, String> tokenOrEmail = userService.googleLogin(code);

        // 가입된 계정이 아님
        if(tokenOrEmail.get("email") != null){
            return ResponseEntity.ok().body((ApiUtils.success(HttpStatus.OK, new UserResponse.googleLoginDTO("", tokenOrEmail.get("email")))));
        }

        // 가입된 계정이면, jwt 토큰 반환
        return ResponseEntity.ok()
                .header(HttpHeaders.SET_COOKIE, ResponseCookie.from("refreshToken", tokenOrEmail.get("refreshToken"))
                        .httpOnly(true)
                        .secure(true)
                        .sameSite("None")
                        .maxAge(JWTProvider.REFRESH_EXP)
                        .build().toString())
                .body(ApiUtils.success(HttpStatus.OK, new UserResponse.googleLoginDTO(tokenOrEmail.get("accessToken"), "")));
    }

    @PostMapping("/accounts")
    public ResponseEntity<?> join(@RequestBody UserRequest.JoinDTO requestDTO, Errors errors){
        userService.join(requestDTO);
        return ResponseEntity.ok().body(ApiUtils.success(HttpStatus.CREATED, null));
    }

    @PostMapping("/accounts/social")
    public ResponseEntity<?> socialJoin(@RequestBody UserRequest.SocialJoinDTO requestDTO, Errors errors){
        userService.socialJoin(requestDTO);
        return ResponseEntity.ok().body(ApiUtils.success(HttpStatus.CREATED, null));
    }

    @PostMapping("/accounts/check/email")
    public ResponseEntity<?> checkEmailAndSendCode(@RequestBody UserRequest.EmailDTO requestDTO, Errors errors){
        userService.checkEmailAndSendCode(requestDTO);
        return ResponseEntity.ok().body(ApiUtils.success(HttpStatus.OK, null));
    }

    @PostMapping("/accounts/check/nick")
    public ResponseEntity<?> checkNick(@RequestBody UserRequest.CheckNickDTO requestDTO, Errors errors){
        userService.checkNick(requestDTO);
        return ResponseEntity.ok().body(ApiUtils.success(HttpStatus.OK, null));
    }

    @PostMapping("/accounts/check/email/verify")
    public ResponseEntity<?> verifyRegisterCode(@RequestBody UserRequest.VerifyCodeDTO requestDTO, Errors errors){
        userService.verifyCode(requestDTO);
        return ResponseEntity.ok().body(ApiUtils.success(HttpStatus.OK, null));
    }

    @PostMapping("/accounts/recovery")
    public ResponseEntity<?> sendRecoveryCode(@RequestBody UserRequest.EmailDTO requestDTO, Errors errors){
        userService.sendRecoveryCode(requestDTO);
        return ResponseEntity.ok().body(ApiUtils.success(HttpStatus.OK, null));
    }

    @PostMapping("/accounts/recovery/verify")
    public ResponseEntity<?> verifyAndSendPassword(@RequestBody UserRequest.VerifyCodeDTO requestDTO, Errors errors){
        userService.verifyAndSendPassword(requestDTO);
        return ResponseEntity.ok().body(ApiUtils.success(HttpStatus.OK, null));
    }

    @PostMapping("/accounts/password/verify")
    public ResponseEntity<?> verifyPassword(@RequestBody UserRequest.CurPasswordDTO requestDTO, Errors errors, @AuthenticationPrincipal CustomUserDetails userDetails){
        userService.verifyPassword(requestDTO, userDetails.getUser().getId());
        return ResponseEntity.ok().body(ApiUtils.success(HttpStatus.OK, null));
    }


    @PatchMapping("/accounts/password")
    public ResponseEntity<?> updatePassword(@RequestBody UserRequest.UpdatePasswordDTO requestDTO, Errors errors, @AuthenticationPrincipal CustomUserDetails userDetails){
        userService.updatePassword(requestDTO, userDetails.getUser().getId());
        return ResponseEntity.ok().body(ApiUtils.success(HttpStatus.OK, null));
    }

    @GetMapping("/accounts/profile")
    public ResponseEntity<?> findProfile(@AuthenticationPrincipal CustomUserDetails userDetails){
        UserResponse.ProfileDTO responseDTO = userService.findProfile(userDetails.getUser().getId());
        return ResponseEntity.ok().body(ApiUtils.success(HttpStatus.OK, responseDTO));
    }

    @PatchMapping("/accounts/profile")
    public ResponseEntity<?> updateProfile(@RequestBody UserRequest.UpdateProfileDTO requestDTO, Errors errors, @AuthenticationPrincipal CustomUserDetails userDetails){
        userService.updateProfile(requestDTO, userDetails.getUser().getId());
        return ResponseEntity.ok().body(ApiUtils.success(HttpStatus.OK, null));
    }

    @PatchMapping("/auth/access")
    public ResponseEntity<?> updateAccessToken(@RequestBody UserRequest.UpdateAccessTokenDTO requestDTO, Errors errors){
        UserResponse.AccessTokenDTO responseDTO = userService.updateAccessToken(requestDTO);
        return ResponseEntity.ok().body(ApiUtils.success(HttpStatus.OK, responseDTO));
    }

    @PatchMapping("/accounts/role")
    public ResponseEntity<?> updateRole(@RequestBody UserRequest.UpdateRoleDTO requestDTO, Errors errors, @AuthenticationPrincipal CustomUserDetails userDetails){
        userService.updateRole(requestDTO, userDetails.getUser().getId(), userDetails.getUser().getRole());
        return ResponseEntity.ok().body(ApiUtils.success(HttpStatus.OK, null));
    }

    @DeleteMapping("/accounts")
    public ResponseEntity<?> withdrawMember(@AuthenticationPrincipal CustomUserDetails userDetails){
        userService.withdrawMember(userDetails.getUser().getId());
        return ResponseEntity.ok().body(ApiUtils.success(HttpStatus.OK, null));
    }
}