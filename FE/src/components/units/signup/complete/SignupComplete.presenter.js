import * as S from "./SignupComplete.styles";
import Image from "next/image";

export default function SignupCompleteUI(props) {
  return (
    <>
      <S.WrapperContainer>
        <S.CompleteHeaderWrapper>
          <S.CompleteHeaderContainer>
            <S.CompleteImageAndLogoBlock>
              <S.ImageItem>
                <Image
                  src="/images/header/forpaw_icon.svg"
                  alt="paw"
                  width={30}
                  height={25}
                />
              </S.ImageItem>
              <S.LogoItem>
                <Image
                  src="/images/header/forpaw_logo.svg"
                  alt="paw-logo"
                  width={73}
                  height={31}
                />
              </S.LogoItem>
            </S.CompleteImageAndLogoBlock>
            <S.CompletePhrase>회원가입이 완료되었습니다.</S.CompletePhrase>
            <S.CompleteMsg>
              포포와 함께 더 나은 세상을 만들어 가는
              <br />
              힘찬 발자국을 내딛어요!
            </S.CompleteMsg>
          </S.CompleteHeaderContainer>
        </S.CompleteHeaderWrapper>
        <S.ComplateImageContainer>
          <Image
            src="/images/complete/signup_complete.svg"
            alt="complete"
            width={390}
            height={582}
          />
          <S.BlurrBlock>
            <S.NextButtonBlock>
              <S.NextButtonItem onClick={props.verifyLogin}>
                지금 시작하기
              </S.NextButtonItem>
            </S.NextButtonBlock>
          </S.BlurrBlock>
        </S.ComplateImageContainer>
      </S.WrapperContainer>
    </>
  );
}
