import * as S from "./Login.styles";
import Image from "next/image";

export default function LoginUI(props) {
  return (
    <>
      <S.WrapperContainer>
        <S.WraaperLogoAndImage>
          <S.LogoAndImageBlock>
            <S.WrapperImage>
              <Image
                src="/images/header/forpaw_icon.svg"
                alt="paw"
                width={59}
                height={47}
              />
            </S.WrapperImage>
            <S.WrapperLogo>
              <Image
                src="/images/header/forpaw_logo.svg"
                alt="paw_logo"
                width={73}
                height={22}
              />
            </S.WrapperLogo>
          </S.LogoAndImageBlock>
        </S.WraaperLogoAndImage>
        <S.WrapperLoginContents>
          <S.LoginContentsBlock>
            <S.IdAndPassWordContainer>
              <S.IdInput
                placeholder="아이디"
                type="text"
                value={props.email}
                onChange={props.handleEmailChange}
              />
              <S.PassWordInput
                placeholder="비밀번호"
                type="password"
                value={props.password}
                onChange={props.handlePasswordChange}
              />
            </S.IdAndPassWordContainer>
            <S.LoginContainer>
              <S.LoginButton type="submit" onClick={props.verifyLogin}>
                로그인
              </S.LoginButton>
              <S.SignUpBtn
                onClick={props.navigateTo("/login/signup/agreements")}
              >
                회원가입
              </S.SignUpBtn>
            </S.LoginContainer>
            <S.OrContainer>or</S.OrContainer>
            <S.KakaoAndGoogleBlock>
              <S.KakaoButton onClick={props.handleKakaoLoginClick}>
                <Image
                  src="/images/login/kakao.svg"
                  alt="kakao"
                  width={27}
                  height={24}
                />
                카카오로 계속하기
              </S.KakaoButton>
              <S.GoogleButton onClick={props.handleGoogleLoginClick}>
                <Image
                  src="/images/login/google.svg"
                  alt="naver"
                  width={29}
                  height={26}
                />
                구글로 계속하기
              </S.GoogleButton>
            </S.KakaoAndGoogleBlock>
            <S.AccoutAndInfoContainer>
              <S.AccoutFind
                onClick={props.navigateTo(`/login/find_account/01`)}
              >
                계정을 잃어버리셨나요?
              </S.AccoutFind>
              <S.BrowseAsGeust onClick={props.browseAsGeust}>
                둘러보기
              </S.BrowseAsGeust>
              <S.InfoPaw>이용약관 | 개인정보취급방침</S.InfoPaw>
            </S.AccoutAndInfoContainer>
          </S.LoginContentsBlock>
        </S.WrapperLoginContents>
      </S.WrapperContainer>
    </>
  );
}
