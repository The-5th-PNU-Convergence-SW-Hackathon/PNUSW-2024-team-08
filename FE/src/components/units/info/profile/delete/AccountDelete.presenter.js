import * as S from "./AccountDelete.styles";
import Image from "next/image";

export default function AccountDeleteUI(props) {
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
            <S.Title>회원탈퇴</S.Title>
          </S.LeftArrowTitleContainer>
        </S.Header>
      </S.WrapperHeader>
      <S.WrapperAccountDelete>
        <S.LogoImageBlock>
          <Image
            src="/images/landing/landing_forpaw_icon.svg"
            alt="landing_forpaw_icon"
            width={40}
            height={44}
          />
        </S.LogoImageBlock>
        <S.DeleteText1>포포 탈퇴 전에 꼭 확인하세요</S.DeleteText1>
        <S.DeleteText2>
          탈퇴하시면 이용 중인 계정이 폐쇄되며 <br />
          모든 데이터는 복구가 불가능합니다.
        </S.DeleteText2>
        <S.DeleteText3>
          • 게시글, 프로필 등 모든 정보가 삭제됩니다.
          <br />• 타인 글의 댓글은 삭제되지 않으니 미리 확인하세요.
        </S.DeleteText3>
        <S.CheckboxContainer onClick={props.handleCheckboxChange}>
          <S.Checkbox type="checkbox" checked={props.isChecked} readOnly />
          <S.StyledCheckbox isChecked={props.isChecked} />
          <S.Label>안내사항을 모두 확인하였으며, 이에 동의합니다.</S.Label>
        </S.CheckboxContainer>
        <S.BorderLine isChecked={props.isChecked}></S.BorderLine>
        {props.isSocialJoined ? (
          <>
            <S.AccountDeleteContainer isChecked={props.isChecked}>
              <S.EmailInput
                type="text"
                placeholder="이메일"
                value={props.emailInput}
                onChange={props.handleEmailChange}
              />
              <S.VerificationButton
                isChecked={props.isChecked}
                onClick={() => {
                  if (props.isButtonClicked) {
                    props.handleCodeResend();
                  } else {
                    props.handleCodeSend();
                  }
                }}
                disabled={
                  !props.isCorrectEmail ||
                  (props.isCorrectEmail &&
                    props.isButtonClicked &&
                    props.timer > 0) ||
                  (props.error &&
                    props.remainingTime > 0 &&
                    props.remainingTime <= 180)
                }
              >
                {props.isButtonClicked ? "코드 재전송" : "코드 전송"}
              </S.VerificationButton>
              <S.ConfrimMessageBlock>
                {props.error ? (
                  <S.ErrorMessage>
                    {props.errorMessage}
                    {props.remainingTime > 0 &&
                      "(" +
                        Math.floor(props.timer / 60) +
                        ":" +
                        (props.timer % 60).toString().padStart(2, "0") +
                        ")"}
                  </S.ErrorMessage>
                ) : (
                  <S.ConfirmMessage isValid={props.isCorrectEmail}>
                    {props.correctEmailMessage}
                  </S.ConfirmMessage>
                )}
              </S.ConfrimMessageBlock>
            </S.AccountDeleteContainer>
            <S.VerificationContainer
              isChecked={props.isChecked}
              isCorrectEmail={props.isCorrectEmail}
              isButtonClicked={props.isButtonClicked}
            >
              <S.VerificationInput
                type="text"
                placeholder="인증번호"
                value={props.codeInput}
                onChange={props.handleCodeChange}
                disabled={props.timer === 0}
              />
              <S.TimerItem
                isChecked={props.isChecked}
                isCorrectEmail={props.isCorrectEmail}
                isButtonClicked={props.isButtonClicked}
              >
                {Math.floor(props.timer / 60)}:
                {(props.timer % 60).toString().padStart(2, "0")}
              </S.TimerItem>
              <S.ConfrimMessageBlock>
                <S.ConfirmMessage isValid={props.isCorrectCode}>
                  {props.correctCodeMessage}
                </S.ConfirmMessage>
              </S.ConfrimMessageBlock>
            </S.VerificationContainer>
          </>
        ) : (
          <S.AccountDeleteContainer isChecked={props.isChecked}>
            <S.AccountDeleteInput
              type="password"
              placeholder="비밀번호"
              value={props.currentPassword}
              onChange={props.handleCurrentPasswordChange}
            />
            <S.ConfrimMessageBlock>
              <S.ConfirmMessage isValid={props.isCorrectPassword}>
                {props.correctMessage}
              </S.ConfirmMessage>
            </S.ConfrimMessageBlock>
          </S.AccountDeleteContainer>
        )}
        <S.AccountDeleteButton
          isDeleteEnabled={props.isDeleteEnabled}
          disabled={!props.isDeleteEnabled}
          onClick={() => {
            if (props.isDeleteEnabled) {
              props.handleConfrimModal();
            }
          }}
        >
          탈퇴하기
        </S.AccountDeleteButton>
      </S.WrapperAccountDelete>

      {/* {props.isSignoutClicked && (
        <S.SignoutModalOverlay>
          {!props.isConfirmSignout ? (
            <S.SignoutModalContainer>
              <S.SignoutModalText>정말 탈퇴하시겠습니까?</S.SignoutModalText>
              <S.SignoutSubModalText>
                탈퇴 안내 서브메세지
              </S.SignoutSubModalText>
              <S.SignoutModalBtnBlock>
                <S.SignoutCancelModalBtn onClick={props.toggleSignoutState}>
                  다음에
                </S.SignoutCancelModalBtn>
                <S.SignoutConfirmModalBtn onClick={props.confirmSignout}>
                  탈퇴하기
                </S.SignoutConfirmModalBtn>
              </S.SignoutModalBtnBlock>
            </S.SignoutModalContainer>
          ) : (
            <S.SignoutModalContainer>
              <S.SignoutModalText>탈퇴가 완료되었습니다.</S.SignoutModalText>
              <S.SignoutSubModalText>
                탈퇴 확인 서브 메세지
              </S.SignoutSubModalText>
              <S.SignoutModalBtnBlock>
                <S.SignoutConfirmModalBtn>확인</S.SignoutConfirmModalBtn>
              </S.SignoutModalBtnBlock>
            </S.SignoutModalContainer>
          )}
        </S.SignoutModalOverlay>
      )} */}
    </>
  );
}
