import { useNavigate } from "../../../../../src/components/commons/hooks/useNavigate";
import FindAccount02UI from "./FIndAccount02.presenter";
import { useGetUserInfo } from "./hooks/useGetUserInfo";
import { usePasswordCheck } from "./hooks/usePasswordCheck";

export default function FindAccount02() {
  const { code } = useGetUserInfo();

  const {
    password,
    passwordConfirm,
    isPasswordValid,
    isPasswordMatching,
    validationMessage,
    confirmMessage,
    handlePasswordChange,
    handlePasswordConfirmChange,
    isPasswordChangeSuccess,
    changePassword,
  } = usePasswordCheck(code);

  const { navigateTo } = useNavigate();

  return (
    <>
      <FindAccount02UI
        password={password}
        passwordConfirm={passwordConfirm}
        isPasswordValid={isPasswordValid}
        isPasswordMatching={isPasswordMatching}
        validationMessage={validationMessage}
        confirmMessage={confirmMessage}
        handlePasswordChange={handlePasswordChange}
        handlePasswordConfirmChange={handlePasswordConfirmChange}
        isPasswordChangeSuccess={isPasswordChangeSuccess}
        changePassword={changePassword}
        navigateTo={navigateTo}
      />
    </>
  );
}
