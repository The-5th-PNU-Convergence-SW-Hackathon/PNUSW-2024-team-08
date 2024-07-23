package com.hong.ForPaw.service;

import com.hong.ForPaw.controller.DTO.KakaoDTO;
import com.hong.ForPaw.controller.DTO.UserRequest;
import com.hong.ForPaw.controller.DTO.UserResponse;
import com.hong.ForPaw.core.errors.CustomException;
import com.hong.ForPaw.core.errors.ExceptionCode;
import com.hong.ForPaw.domain.User.Role;
import com.hong.ForPaw.domain.User.User;
import com.hong.ForPaw.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.hong.ForPaw.core.security.JWTProvider;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.reactive.function.BodyInserters;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.security.SecureRandom;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;
import java.util.stream.Collectors;
import java.util.stream.IntStream;
import java.util.stream.Stream;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class UserService {

    private final PasswordEncoder passwordEncoder;
    private final UserRepository userRepository;
    private final RedisService redisService;
    private final JavaMailSender mailSender;
    private final WebClient webClient;

    @Value("${spring.mail.username}")
    private String fromEmail;

    @Value("${kakao.key}")
    private String kakaoAPIKey;

    @Value("${kakao.token.uri}")
    private String kakaoTokenURI;

    @Value("${kakao.userInfo.uri}")
    private String kakaoUserInfoURI;

    @Value("${kakao.redirect.uri}")
    private String kakaoRedirectURI;

    @Transactional
    public Map<String, String> login(UserRequest.LoginDTO requestDTO){

        User user = userRepository.findByEmail(requestDTO.email()).orElseThrow(
                () -> new CustomException(ExceptionCode.USER_ACCOUNT_WRONG)
        );

        if(!passwordEncoder.matches(requestDTO.password(), user.getPassword())){
            throw new CustomException(ExceptionCode.USER_ACCOUNT_WRONG);
        }

        checkDuplicateLogin(user);

        return createToken(user);
    }

    @Transactional
    public Map<String, String> kakaoLogin(String code) {
        // 카카오 엑세스 토큰 획득 => 유저 정보 획득
        KakaoDTO.TokenDTO token = getKakaoToken(code);
        KakaoDTO.UserInfoDTO userInfo = getUserInfo(token.access_token());

        // 카카오 계정으로 가입한 계정의 이메일은 {카카오 id}@kakao.com로 구성
        String email = userInfo.id().toString() + "@kakao.com";

        // 가입되지 않음 => email을 넘겨서 추가 정보를 입력하도록 함
        if(userRepository.findByEmail(email).isEmpty()){
            Map<String, String> response = new HashMap<>();
            response.put("email", email);
            return response;
        }

        User user = userRepository.findByEmail(email).get();
        checkDuplicateLogin(user);

        return createToken(user);
    }

    @Transactional
    public void join(UserRequest.JoinDTO requestDTO){

        if (!requestDTO.password().equals(requestDTO.passwordConfirm()))
            throw new CustomException(ExceptionCode.USER_PASSWORD_WRONG);

        User user = User.builder()
                .name(requestDTO.name())
                .nickName(requestDTO.nickName())
                .email(requestDTO.email())
                .password(passwordEncoder.encode(requestDTO.password()))
                .role(Role.USER)
                .profileURL(requestDTO.profileURL())
                .regin(requestDTO.region())
                .subRegion(requestDTO.subRegion())
                .build();

        userRepository.save(user);
    }

    @Transactional
    public void socialJoin(UserRequest.SocialJoinDTO requestDTO){

        User user = User.builder()
                .name(requestDTO.name())
                .nickName(requestDTO.nickName())
                .email(requestDTO.email())
                .role(Role.USER)
                .profileURL(requestDTO.profileURL())
                .regin(requestDTO.region())
                .subRegion(requestDTO.subRegion())
                .build();

        userRepository.save(user);
    }

    // 중복 여부 확인 => 만약 사용 가능한 메일이면, 코드 전송
    @Transactional
    public void checkAndSendCode(UserRequest.EmailDTO requestDTO){
        // 가입한 이메일이 존재 한다면
        if(userRepository.findByEmail(requestDTO.email()).isPresent())
            throw new CustomException(ExceptionCode.USER_EMAIL_EXIST);

        // 인증 코드 전송 및 레디스에 저장
        String verificationCode = sendCodeByMail(requestDTO.email());
        redisService.storeDate("emailCode", requestDTO.email(), verificationCode, 5 * 60 * 1000L); // 5분 동안 유효
    }

    @Transactional
    public void verifyCode(UserRequest.VerifyCodeDTO requestDTO){
        // 레디스를 통해 해당 코드가 유효한지 확인
        if(!redisService.validateData("emailCode", requestDTO.email(), requestDTO.code()))
            throw new CustomException(ExceptionCode.CODE_WRONG);
        redisService.removeData("emailCode", requestDTO.email()); // 검증 후 토큰 삭제
    }

    @Transactional
    public void sendRecoveryCode(UserRequest.EmailDTO requestDTO){
        // 가입된 계정이 아니라면
        if(userRepository.findByEmail(requestDTO.email()).isEmpty())
            throw new CustomException(ExceptionCode.USER_EMAIL_NOT_FOUND);

        // 요청 횟수 3회 넘아가면 10분 동안 요청 불가
        Long recoveryNum = redisService.getDataInLong("requestNum", requestDTO.email());
        if(recoveryNum >= 3L){
            throw new CustomException(ExceptionCode.EXCEED_REQUEST_NUM);
        }

        // 요청 횟수 업데이트
        redisService.storeDate("requestNum", requestDTO.email(), String.valueOf(recoveryNum + 1), 10 * 60 * 1000L);

        // 인증 코드 전송 및 레디스에 저장
        String verificationCode = sendCodeByMail(requestDTO.email());
        redisService.storeDate("emailCode", requestDTO.email(), verificationCode, 5 * 60 * 1000L);
    }

    @Transactional
    public void verifyAndSendPassword(UserRequest.VerifyCodeDTO requestDTO){

        // 레디스를 통해 해당 코드가 유효한지 확인
        if(!redisService.validateData("emailCode", requestDTO.email(), requestDTO.code()))
            throw new CustomException(ExceptionCode.CODE_WRONG);
        redisService.removeData("emailCode", requestDTO.email());

        // 임시 비밀번호 생성 후 업데이트
        String password = generatePassword();
        User user = userRepository.findByEmail(requestDTO.email()).get(); // 이미 앞에서 계정 존재 여부를 확인 했으니 바로 가져옴
        user.updatePassword(passwordEncoder.encode(password));

        sendPasswordByMail(requestDTO.email(), password);
    }

    // 재설정 화면에서 실시간으로 일치여부를 확인하기 위해 사용
    @Transactional
    public void verifyPassword(UserRequest.CurPasswordDTO requestDTO, Long userId){

        User user = userRepository.findById(userId).get();

        if(!passwordEncoder.matches(requestDTO.password(), user.getPassword())){
            throw new CustomException(ExceptionCode.USER_PASSWORD_WRONG);
        }
    }

    @Transactional
    public void updatePassword(UserRequest.UpdatePasswordDTO requestDTO, Long userId){

        User user = userRepository.findById(userId).get();

        // verifyPassword()로 일치 여부를 확인하지만, 해당 단계를 거치지 않고 인위적으로 요청을 보낼 수 있어서 한 번더 검증
        if(!passwordEncoder.matches(requestDTO.curPassword(), user.getPassword())){
            throw new CustomException(ExceptionCode.USER_ACCOUNT_WRONG);
        }

        if (!requestDTO.newPassword().equals(requestDTO.newPasswordConfirm()))
            throw new CustomException(ExceptionCode.USER_PASSWORD_MATCH_WRONG);

        user.updatePassword(passwordEncoder.encode(requestDTO.newPassword()));
    }

    @Transactional
    public UserResponse.ProfileDTO findProfile(Long userId){

        User user = userRepository.findById(userId).get();
        return new UserResponse.ProfileDTO(user.getName(), user.getNickName(), user.getRegin(), user.getSubRegion(), user.getProfileURL());
    }

    @Transactional
    public void updateProfile(UserRequest.UpdateProfileDTO requestDTO, Long userId){

        User user = userRepository.findById(userId).get();
        user.updateProfile(requestDTO.nickName(),requestDTO.region(), requestDTO.subRegion(), requestDTO.profileURL());
    }

    @Transactional
    public UserResponse.AccessTokenDTO updateAccessToken(UserRequest.UpdateAccessTokenDTO requestDTO){
        // 잘못된 토큰 형식인지 체크
        if(!JWTProvider.validateToken(requestDTO.refreshToken())) {
            throw new CustomException(ExceptionCode.TOKEN_WRONG);
        }

        Long userId =JWTProvider.getUserIdFromToken(requestDTO.refreshToken());

        // 토큰 만료 여부 체크
        if(!redisService.isDateExist("refreshToken", String.valueOf(userId)))
            throw new CustomException(ExceptionCode.TOKEN_EXPIRED);

        // 탈퇴한 회원의 refreshToken이 요청으로 왔으면, USER_NOT_FOUND 에러 발생
        User user = userRepository.findById(userId).orElseThrow(
                () -> new CustomException(ExceptionCode.USER_NOT_FOUND)
        );

        return new UserResponse.AccessTokenDTO(JWTProvider.createAccessToken(user));
    }

    // 관지라 API
    @Transactional
    public void updateRole(UserRequest.UpdateRoleDTO requestDTO, Long userId, Role role){

        // 관리자만 사용 가능 (테스트 상황에선 주석 처리)
        //if(role.equals(Role.ADMIN)){
        //    throw new CustomException(ExceptionCode.USER_FORBIDDEN);
        //}

        User user = userRepository.findById(userId).get();
        user.updateRole(requestDTO.role());
    }

    private String sendCodeByMail(String toEmail){

        String verificationCode = generateVerificationCode();
        String subject = "[ForPaw] 이메일 인증 코드입니다.";
        String text = "인증 코드는 다음과 같습니다: " + verificationCode + "\n이 코드를 입력하여 이메일을 인증해 주세요.";
        sendMail(fromEmail, toEmail, subject, text);

        return verificationCode;
    }

    private void sendPasswordByMail(String toEmail, String password){

        String subject = "[ForPaw] 임시 비밀번호 입니다.";
        String text = "임시 비밀번호: " + password + "\n로그인 후 비밀번호를 변경해 주세요.";
        sendMail(fromEmail, toEmail, subject, text);
    }

    private void sendMail(String fromEmail, String toEmail, String subject, String text){

        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom(fromEmail);
        message.setTo(toEmail);
        message.setSubject(subject);
        message.setText(text);
        mailSender.send(message);
    }

    // 알파벳, 숫자를 조합해서 인증 코드 생성
    private String generateVerificationCode() {

        String chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        SecureRandom random = new SecureRandom();

        return IntStream.range(0, 8) // 8자리
                .map(i -> random.nextInt(chars.length()))
                .mapToObj(chars::charAt)
                .map(Object::toString)
                .collect(Collectors.joining());
    }

    // 알파벳, 숫자, 특수문자가 모두 포함되도록 해서 임시 비밀번호 생성
    private String generatePassword() {

        String specialChars = "!@#$%^&*";
        String numbers = "0123456789";
        String upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        String lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
        SecureRandom random = new SecureRandom();

        // 각 범주에서 랜덤하게 하나씩 선택
        String mandatoryChars =
                Stream.of(specialChars, numbers, upperCaseLetters, lowerCaseLetters)
                        .map(s -> s.charAt(random.nextInt(s.length())))
                        .map(Object::toString)
                        .collect(Collectors.joining());

        // 나머지 자리를 전체 문자 집합에서 선택
        String allChars = specialChars + numbers + upperCaseLetters + lowerCaseLetters;
        String randomChars = IntStream.range(mandatoryChars.length(), 8)
                .map(i -> random.nextInt(allChars.length()))
                .mapToObj(allChars::charAt)
                .map(Object::toString)
                .collect(Collectors.joining());

        // 최종 문자열 생성을 위해 섞기
        String verificationCode = Stream.of(mandatoryChars.split(""), randomChars.split(""))
                .flatMap(Arrays::stream)
                .collect(Collectors.collectingAndThen(Collectors.toList(), list -> {
                    Collections.shuffle(list);
                    return list.stream();
                }))
                .collect(Collectors.joining());

        return verificationCode;
    }

    // 중복 로그인 체크 => 만약 이미 로그인된 상태라면 기존 세션은 삭제
    public void checkDuplicateLogin(User user){

        String accessToken = redisService.getDataInStr("accessToken", String.valueOf(user.getId()));
        if(accessToken != null){
            redisService.removeData("accessToken", String.valueOf(user.getId()));
        }
    }

    public Map<String, String> createToken(User user){
        String accessToken = JWTProvider.createAccessToken(user);
        String refreshToken = JWTProvider.createRefreshToken(user);

        // Access Token 세션에 저장 (중복 로그인 방지)
        redisService.storeDate("accessToken", String.valueOf(user.getId()), accessToken, JWTProvider.ACCESS_EXP);

        // Refresh Token 갱신
        redisService.removeData("refreshToken", String.valueOf(user.getId()));
        redisService.storeDate("refreshToken", String.valueOf(user.getId()), refreshToken, JWTProvider.REFRESH_EXP);

        // Map으로 토큰들을 담아 반환
        Map<String, String> tokens = new HashMap<>();
        tokens.put("accessToken", accessToken);
        tokens.put("refreshToken", refreshToken);

        return tokens;
    }

    public KakaoDTO.TokenDTO getKakaoToken(String code) {

        MultiValueMap<String, String> formData = new LinkedMultiValueMap<>();
        formData.add("grant_type", "authorization_code");
        formData.add("client_id", kakaoAPIKey);
        formData.add("redirect_uri", kakaoRedirectURI);
        formData.add("code", code);

        Mono<KakaoDTO.TokenDTO> response = webClient.post()
                .uri(kakaoTokenURI)
                .contentType(MediaType.APPLICATION_FORM_URLENCODED)
                .body(BodyInserters.fromFormData(formData))
                .retrieve()
                .bodyToMono(KakaoDTO.TokenDTO.class);

        return response.block();
    }

    public KakaoDTO.UserInfoDTO getUserInfo(String token) {

        Flux<KakaoDTO.UserInfoDTO> response = webClient.get()
                .uri(kakaoUserInfoURI)
                .header("Authorization", "Bearer " + token)
                .retrieve()
                .bodyToFlux(KakaoDTO.UserInfoDTO.class);
        return response.blockFirst();
    }
}