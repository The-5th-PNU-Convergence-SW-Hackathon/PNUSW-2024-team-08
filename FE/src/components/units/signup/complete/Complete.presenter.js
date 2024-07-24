import * as S from "./Complete.styles";
import Image from "next/image";



export default function SignUpCompleteUI(props) {
  return (
    <>
      <S.WrapperContainer>
        <S.Container>
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
              <S.CompletePhrase>회원가입이 완료되었습니다.<br />포포와 함께 반려동물의<br />동반자가 되어주세요!</S.CompletePhrase>
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
                <S.NextButtonItem onClick={props.navigateTo("/login")}>시작하기</S.NextButtonItem>
              </S.NextButtonBlock>
            </S.BlurrBlock>
          </S.ComplateImageContainer>
        </S.Container>
      </S.WrapperContainer>
    </>
  )
}