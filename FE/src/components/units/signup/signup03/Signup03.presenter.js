import * as S from "./Signup03.styles";
import SignupHeader from "../SignupHeader/SignupHeader.container";
// import PropTypes from 'prop-types';
import Progress from "../component/Progress";

export default function SignUpUI03(props) {
  return (
    <>
      <S.WrapperContainer>
        <S.Container>
          <SignupHeader />
          <S.ProgressBarBlock>
            <S.ProgressBar value={Progress({ startValue: 50, max: 75, interval: 10 })} max={75} />
          </S.ProgressBarBlock>
          <S.InfoContainer>
            <S.InfoBlock>
              <S.InfoTitleItem>비밀번호를 설정해주세요</S.InfoTitleItem>
              <S.InfoContentsBlock>
                <S.InfoTitleEmail>이메일</S.InfoTitleEmail>
                <S.CheckEmail>
                  <S.ShowEmail>{props.email}</S.ShowEmail>
                </S.CheckEmail>
              </S.InfoContentsBlock>
              <S.InfoContentsBlock>
                <S.InfoTitlePassWord>비밀번호</S.InfoTitlePassWord>
                <S.SetPassWord
                  type="password"
                  value={props.password}
                  onChange={props.handlePasswordChange}
                  placeholder="비밀번호"
                />
              </S.InfoContentsBlock>
              <S.InfoFormPassWord>
                {props.isPasswordAvailable ? (
                  <span style={{ color: "#9AC8FF"}}>사용가능한 비밀버호입니다.</span>
                ) : (
                  <span style={{ color: "#FF9A9A"}}>특수문자를 포함한 10자리를 입력해주세요.</span>
                )}
              </S.InfoFormPassWord>
              <S.InfoContentsBlock>
                <S.CheckPassWordTitle>비밀번호 확인</S.CheckPassWordTitle>
                <S.CheckPassWord
                  type="password"
                  value={props.setPasswordConfirm}
                  onChange={props.handleConfirmPasswordChange}
                  placeholder="비밀번호 확인"
                />
              </S.InfoContentsBlock>
              {props.isPasswordMatch ? (
                <S.PassWordCorrect style={{ visibility: props.isVisible ? 'visible' : 'hidden' }}>비밀번호가 일치합니다.</S.PassWordCorrect>
              ) : (
                <S.PassWordCorrect style={{ color: '#FF9A9A', visibility: props.isVisible ? 'visible' : 'hidden' }}>비밀번호가 일치하지 않습니다.</S.PassWordCorrect>
              )}
              <S.NextButtonBlock>
                <S.NextButtonItem onClick={props.navigateTo("/login/signup/04")}>
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