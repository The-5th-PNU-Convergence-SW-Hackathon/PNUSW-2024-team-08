import * as S from "./Find_Account01.styles";
import SignupHeader from "../../signup/SignupHeader/SignupHeader.container";
import Progress from "../../signup/component/Progress";

export default function FindAccount01UI(props) {
  return (
    <>
      <S.WrapperContainer>
        <S.Container>
          <SignupHeader />
          <S.ProgressBarBlock>
            <S.ProgressBar value={Progress({ startValue: 0, max: 50, interval: 10 })} max={50} />
          </S.ProgressBarBlock>
          <S.InfoContainer>
            <S.InfoBlock>
              <S.InfoTitleItem>
                계정찾기
              </S.InfoTitleItem>
              <S.EmailTitle>
                이메일
              </S.EmailTitle>
              <S.EmailBlock>
                <S.EmailItem placeholder="이메일" type="email" value={props.email} onChange={props.handleEmailValueChange} />
                <S.AddressIcon>@</S.AddressIcon>
                <S.SelectAddress value={props.selectedOption} onChange={props.handleSelectOptionChange}>
                  <S.AddressOption value="">직접입력</S.AddressOption>
                  <S.AddressOption value="gmail.com">gmail.com</S.AddressOption>
                  <S.AddressOption value="naver.com">naver.com</S.AddressOption>
                </S.SelectAddress>
              </S.EmailBlock>
              <S.CheckEmailBlock>
                {props.isEmailAvailable ? (
                  <S.AvailableEmail style={{ visibility: props.isVisible ? 'visible' : 'hidden' }}>
                    사용가능한 이메일입니다.
                  </S.AvailableEmail>
                ) : (
                  <S.AvailableEmail style={{ color: '#FF9A9A', visibility: props.isVisible ? 'visible' : 'hidden' }}>가입되지 않은 이메일입니다.</S.AvailableEmail>
                )}
                <S.CheckEmailBtn type="button" onClick={props.handleCheckEmailAndStartTimer}>
                  코드전송
                </S.CheckEmailBtn>
              </S.CheckEmailBlock>
              <S.InputCodeContainer style={{ visibility: props.isVisible ? 'visible' : 'hidden' }}>
                <S.GetCodeTitle>
                  코드입력
                </S.GetCodeTitle>
                <S.GetCodeBlock>
                  <S.GetCodeItem value={props.code} onChange={props.handleCode} placeholder="1234" type="text" />
                  <S.TimerItem>{Math.floor(props.timer / 60)}:{(props.timer % 60).toString().padStart(2, '0')}</S.TimerItem>
                </S.GetCodeBlock>
                <S.CorretCode>
                  코드가 일치합니다
                </S.CorretCode>
              </S.InputCodeContainer>
              <S.NextButtonBlock>
                <S.NextButtonItem onClick={props.navigateTo("/login/find_account/02")}>
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