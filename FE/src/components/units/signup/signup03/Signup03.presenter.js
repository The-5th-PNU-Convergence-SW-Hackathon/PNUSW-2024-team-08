import * as S from "./Signup03.styles";
import SignupHeader from "../SignupHeader/SignupHeader.container";
// import PropTypes from 'prop-types';
import Progress from "../component/Progress";

export default function Signup03UI(props) {
  return (
    <>
      <S.WrapperContainer>
        <SignupHeader />
        <S.ProgressBarBlock>
          <S.ProgressBar
            value={Progress({ startValue: 60, max: 80, interval: 10 })}
            max={80}
          />
        </S.ProgressBarBlock>
        <S.InfoContainer>
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
          <S.ConfrimMessageBlock>
            <S.ConfirmMessage isValid={props.isPasswordValid}>
              {props.validationMessage}
            </S.ConfirmMessage>
          </S.ConfrimMessageBlock>
          <S.InfoContentsBlock>
            <S.CheckPassWordTitle>비밀번호 확인</S.CheckPassWordTitle>
            <S.CheckPassWord
              type="password"
              value={props.passwordConfirm}
              onChange={props.handlePasswordConfirmChange}
              placeholder="비밀번호 확인"
              disabled={props.password === "" || props.isPasswordValid !== true}
            />
          </S.InfoContentsBlock>
          <S.ConfrimMessageBlock>
            <S.ConfirmMessage isValid={props.isPasswordMatching}>
              {props.confirmMessage}
            </S.ConfirmMessage>
          </S.ConfrimMessageBlock>
          <S.NextButtonItem
            onClick={() => props.handledNextButton("/login/signup/04")}
          >
            다음
          </S.NextButtonItem>
        </S.InfoContainer>
      </S.WrapperContainer>
    </>
  );
}
