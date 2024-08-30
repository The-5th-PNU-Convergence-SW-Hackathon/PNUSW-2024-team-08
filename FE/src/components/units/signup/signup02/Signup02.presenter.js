import * as S from "./Signup02.styles";
import SignupHeader from "../SignupHeader/SignupHeader.container";
import Progress from "../component/Progress";
import Image from "next/image";

export default function Signup02UI(props) {
  return (
    <S.WrapperContainer>
      <SignupHeader />
      <S.ProgressBarBlock>
        <S.ProgressBar
          value={Progress({ startValue: 40, max: 60, interval: 10 })}
          max={60}
        />
      </S.ProgressBarBlock>
      <S.InfoContainer>
        <S.InfoTitleItem>정보를 입력해주세요</S.InfoTitleItem>
        <S.EmailTitle>이메일</S.EmailTitle>
        <S.EmailBlock>
          <S.EmailItem
            placeholder="이메일"
            type="email"
            value={props.email}
            onChange={props.handleEmailChange}
          />
          <S.AddressIcon>@</S.AddressIcon>
          <S.SelectAddressBlock ref={props.emailRef}>
            <S.SelectAddress
              isEmailFocused={props.isEmailFocused}
              onClick={props.toggleEmailDropdown}
            >
              {props.selectedEmail}
            </S.SelectAddress>
            <S.SmallSelectArrow onClick={props.toggleEmailDropdown}>
              <Image
                src="/images/signup/small_select_arrow_icon.svg"
                alt="small_select"
                width={15}
                height={15}
              />
            </S.SmallSelectArrow>
            {props.isEmailDropdownOpen && (
              <S.EmailDropdown>
                <S.EmailOption onClick={props.handleEmailSelect}>
                  gmail.com
                </S.EmailOption>
                <S.EmailOption onClick={props.handleEmailSelect}>
                  naver.com
                </S.EmailOption>
              </S.EmailDropdown>
            )}
          </S.SelectAddressBlock>
        </S.EmailBlock>
        <S.CheckEmailBlock>
          <S.AvailableEmail isValid={props.isEmailAvailable}>
            {props.emailMsg}
          </S.AvailableEmail>
          <S.CheckEmailBtn type="button" onClick={() => props.verifyEmail()}>
            중복확인
          </S.CheckEmailBtn>
        </S.CheckEmailBlock>
        <S.InputVerificationCodeContainer isVisible={props.isEmailAvailable}>
          <S.VerificationCodeTitle>인증번호</S.VerificationCodeTitle>
          <S.VerificationCodeItem
            placeholder="인증번호"
            value={props.code}
            onChange={props.handleCodeChange}
            type="text"
            disabled={props.timer === 0}
          />
          <S.TimerItem
            style={{
              visibility: props.isEmailAvailable ? "visible" : "hidden",
            }}
          >
            {Math.floor(props.timer / 60)}:
            {(props.timer % 60).toString().padStart(2, "0")}
          </S.TimerItem>
          <S.CheckCodeBlock>
            <S.CodeMessage isValid={props.isCodeAvailable}>
              {props.codeMsg}
            </S.CodeMessage>
            <S.CodeResendBtn
              onClick={() => props.resendCode()}
              disabled={props.isEmailAvailable && props.timer > 0}
            >
              코드 재전송
            </S.CodeResendBtn>
          </S.CheckCodeBlock>
        </S.InputVerificationCodeContainer>
      </S.InfoContainer>
      <S.NextButtonItem
        isVisible={props.isEmailAvailable}
        onClick={() => props.handledNextButton("/login/signup/03")}
      >
        다음
      </S.NextButtonItem>
    </S.WrapperContainer>
  );
}
