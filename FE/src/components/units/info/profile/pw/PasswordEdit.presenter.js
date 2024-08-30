import * as S from "./PasswordEdit.styles";
import Image from "next/image";

export default function PasswordEditUI(props) {
  return (
    <>
      <S.WrapperHeader>
        <S.Header>
          <S.LeftArrowTitleContainer>
            <Image
              src="/images/header/arrow_left_icon.svg"
              alt="arrow_left_icon"
              width={15}
              height={25}
              onClick={props.navigateTo("/info/profile")}
            />
            <S.Title>비밀번호 변경</S.Title>
          </S.LeftArrowTitleContainer>
        </S.Header>
      </S.WrapperHeader>
      <S.WrapperPasswordEdit>
        <form onSubmit={props.updatePasswords}>
          <S.PasswordEditContainer>
            <S.EditTextBlock>
              <S.EditTitle>현재 비밀번호</S.EditTitle>
            </S.EditTextBlock>
            <S.PasswordInput
              type="password"
              placeholder="현재 비밀번호"
              value={props.currentPassword}
              onChange={props.handleCurrentPasswordChange}
            />
            <S.ConfrimMessageBlock>
              <S.ConfirmMessage isValid={props.isCorrectPassword}>
                {props.correctMessage}
              </S.ConfirmMessage>
            </S.ConfrimMessageBlock>
          </S.PasswordEditContainer>
          <S.PasswordEditContainer>
            <S.EditTextBlock>
              <S.EditTitle>새 비밀번호</S.EditTitle>
            </S.EditTextBlock>
            <S.PasswordInput
              type="password"
              placeholder="새 비밀번호"
              value={props.newPassword}
              onChange={props.handleNewPasswordChange}
              disabled={
                props.currentPassword === "" || props.isCorrectPassword !== true
              }
            />
            <S.ConfrimMessageBlock>
              <S.ConfirmMessage isValid={props.isPasswordValid}>
                {props.validationMessage}
              </S.ConfirmMessage>
            </S.ConfrimMessageBlock>
            <S.PasswordInput
              type="password"
              placeholder="새 비밀번호 확인"
              value={props.confirmPassword}
              onChange={props.handleConfirmPasswordChange}
              disabled={
                props.newPassword === "" || props.isPasswordValid !== true
              }
            />
            <S.ConfrimMessageBlock>
              <S.ConfirmMessage isValid={props.isPasswordMatching}>
                {props.confirmMessage}
              </S.ConfirmMessage>
            </S.ConfrimMessageBlock>
          </S.PasswordEditContainer>
          <S.PasswordEditButton type="submit">
            비밀번호 변경
          </S.PasswordEditButton>
        </form>
      </S.WrapperPasswordEdit>
    </>
  );
}
