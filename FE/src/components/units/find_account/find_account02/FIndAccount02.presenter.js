import * as S from "./FindAccount02.styles";
// import PropTypes from 'prop-types';
import SignupHeader from "../../signup/SignupHeader/SignupHeader.container";
import Progress from "../../signup/component/Progress";

export default function FindAccount02UI(props) {
  return (
    <>
      <S.WrapperContainer>
        <SignupHeader />
        <S.ProgressBarBlock>
          <S.ProgressBar
            value={Progress({ startValue: 50, max: 100, interval: 10 })}
            max={100}
          />
        </S.ProgressBarBlock>
        <S.InfoContainer>
          <S.InfoTitleItem>새 비밀번호를 설정해주세요</S.InfoTitleItem>
          <S.InfoContentsBlock>
            <S.InfoTitlePassWord>새 비밀번호</S.InfoTitlePassWord>
            <S.SetPassWord
              type="password"
              value={props.password}
              onChange={props.handlePasswordChange}
              placeholder="새 비밀번호"
            />
          </S.InfoContentsBlock>
          <S.ConfrimMessageBlock>
            <S.ConfirmMessage isValid={props.isPasswordValid}>
              {props.validationMessage}
            </S.ConfirmMessage>
          </S.ConfrimMessageBlock>
          <S.InfoContentsBlock>
            <S.CheckPassWordTitle>새 비밀번호 확인</S.CheckPassWordTitle>
            <S.CheckPassWord
              type="password"
              value={props.passwordConfirm}
              onChange={props.handlePasswordConfirmChange}
              placeholder="새 비밀번호 확인"
              disabled={props.password === "" || props.isPasswordValid !== true}
            />
          </S.InfoContentsBlock>
          <S.ConfrimMessageBlock>
            <S.ConfirmMessage isValid={props.isPasswordMatching}>
              {props.confirmMessage}
            </S.ConfirmMessage>
          </S.ConfrimMessageBlock>
          <S.NextButton onClick={props.changePassword}>다음</S.NextButton>
        </S.InfoContainer>
      </S.WrapperContainer>
    </>
  );
}
