import * as S from "./FindAccount02.styles";
import SignupHeader from "../../signup/SignupHeader/SignupHeader.container";
import Progress from "../../signup/component/Progress";

export default function FindAccount02UI(props) {
  return (
    <>
      <S.WrapperContainer>
        <S.Container>
          <SignupHeader />
          <S.ProgressBarBlock>
            <S.ProgressBar value={Progress({ startValue: 50, max: 100, interval: 10 })} max={100} />
          </S.ProgressBarBlock>
          <S.InfoContainer>
            <S.InfoBlock>
              <S.InfoTitleItem>새 비밀번호를 설정해주세요</S.InfoTitleItem>
              <S.InfoContentsBlock>
                <S.InfoTileNewPassWord>새 비밀번호</S.InfoTileNewPassWord>
                <S.SetNewPassWord
                  type="password"
                  value={props.password}
                  onChange={props.handlePasswordChange}
                  placeholder="비밀번호"
                />
              </S.InfoContentsBlock>
              <S.InfoFormPassWord>
                {props.isPasswordAvailable ? (
                  <S.isPwAvailable style={{color: '#9AC8FF'}}>사용가능한 비밀번호입니다.</S.isPwAvailable>
                ) : <S.isPwAvailable>특수문자를 포함 한 10자리를 입력해주세요.</S.isPwAvailable>}
              </S.InfoFormPassWord>
              <S.InfoContentsBlock>
                <S.CheckNewPassWordTitle>새 비밀번호 확인</S.CheckNewPassWordTitle>
                <S.CheckPassWord
                  type="password"
                  value={props.confirmPassword}
                  onChange={props.handleConfirmPasswordChange}
                  placeholder="비밀번호 확인"
                />
              </S.InfoContentsBlock>
              {props.isPasswordMatch ? (
                <S.NewPassWordCorrect style={{ visibility: props.isVisible ? 'visible' : 'hidden' }}>비밀번호가 일치합니다.</S.NewPassWordCorrect>
              ) : (
                <S.NewPassWordCorrect style={{ color: '#FF9A9A', visibility: props.isVisible ? 'visible' : 'hidden' }}>비밀번호가 일치하지 않습니다.</S.NewPassWordCorrect>
              )}
              <S.NextButtonBlock>
                <S.NextButtonItem onClick={props.navigateTo("/login")}>
                  확인
                </S.NextButtonItem>
              </S.NextButtonBlock>
            </S.InfoBlock>
          </S.InfoContainer>
        </S.Container>
      </S.WrapperContainer>
    </>
  )
}