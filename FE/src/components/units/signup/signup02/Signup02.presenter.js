import * as S from "./Signup02.styles";
import SignupHeader from "../SignupHeader/SignupHeader.container";
import Progress from "../component/Progress";
import Image from "next/image";

export default function SignUpUI02(props) {
  return (
    <>
      <S.WrapperContainer>
        <S.Container>
          <SignupHeader />
          <S.ProgressBarBlock>
            <S.ProgressBar value={Progress({ startValue: 20, max: 40, interval: 10 })} max={40} />
          </S.ProgressBarBlock>
          <S.InfoContainer>
            <S.InfoBlock>
              <S.InfoTitleItem>
                정보를 입력해주세요
              </S.InfoTitleItem>
              <S.EmailTitle>
                이메일
              </S.EmailTitle>
              <S.EmailBlock>
                <S.EmailItem
                  placeholder="이메일"
                  type="email"
                  value={props.email}
                  onChange={props.handleEmailIdValueChange}
                />
                <S.AddressIcon>@</S.AddressIcon>
                <S.SelectAddressBlock>
                  <S.SelectAddress
                    value={props.emailOption}
                    onChange={props.handleSelectOptionChange}
                  >
                    <option value="">직접입력</option>
                    <option value="gmail.com">gmail.com</option>
                    <option value="naver.com">naver.com</option>
                  </S.SelectAddress>
                  <S.SmallSelectArrow>
                    <Image
                      src="/images/signup/small_select_arrow_icon.svg"
                      alt="small_select"
                      width={15}
                      height={15}
                    />
                  </S.SmallSelectArrow>
                </S.SelectAddressBlock>
              </S.EmailBlock>
              <S.CheckEmailBlock>
                {props.isEmailAvailable ? (
                  <S.AvailableEmail
                    style={{ visibility: props.isVisible ? 'visible' : 'hidden' }}
                  >
                    사용가능한 이메일입니다.
                  </S.AvailableEmail>
                ) : (
                  <S.AvailableEmail
                    style={{ color: '#FF9A9A', visibility: props.isVisible ? 'visible' : 'hidden' }}
                  >
                    사용 불가능한 이메일입니다.
                  </S.AvailableEmail>
                )}
                <S.CheckEmailBtn type="button" onClick={() => props.verifyEmail()}>
                  중복확인
                </S.CheckEmailBtn>
              </S.CheckEmailBlock>
              <S.InputVerificationCodeContainer style={{ visibility: props.isEmailAvailable ? 'visible' : 'hidden' }}>
                <S.VerificationCodeTitle>
                  인증번호를 입력해주세요
                </S.VerificationCodeTitle>
                <S.VerificationCodeBlock>
                  <S.VerificationCodeItem value={props.code} onChange={props.handleCodeChange} type="text" />
                  <S.TimerItem style={{ visibility: props.isEmailAvailable ? 'visible' : 'hidden' }}>{Math.floor(props.timer / 60)}:{(props.timer % 60).toString().padStart(2, '0')}</S.TimerItem>
                </S.VerificationCodeBlock>
                <S.RetryVerification>
                  인증번호가 오지 않아요...
                </S.RetryVerification>
              </S.InputVerificationCodeContainer>
              <S.NextButtonBlock>
                <S.NextButtonItem onClick={() => props.verifyCode("/login/signup/03")}>
                  다음
                </S.NextButtonItem>
              </S.NextButtonBlock>
            </S.InfoBlock>
          </S.InfoContainer>
        </S.Container>
      </S.WrapperContainer>
    </>
  )
}