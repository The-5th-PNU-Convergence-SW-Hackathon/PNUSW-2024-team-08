import { usePasswordCheck } from "./hooks/usePasswordCheck";
import { usePasswordVerify } from "./hooks/usePasswordVerify";
import Signup03UI from "./Signup03.presenter";

export default function Signup03() {
  const {
    password,
    passwordConfirm,
    isPasswordValid,
    isPasswordMatching,
    validationMessage,
    confirmMessage,
    handlePasswordChange,
    handlePasswordConfirmChange,
  } = usePasswordCheck();

  const { email, handledNextButton } = usePasswordVerify(
    password,
    passwordConfirm,
    isPasswordValid,
    isPasswordMatching
  );

  return (
    <>
      <Signup03UI
        email={email}
        password={password}
        passwordConfirm={passwordConfirm}
        isPasswordValid={isPasswordValid}
        isPasswordMatching={isPasswordMatching}
        validationMessage={validationMessage}
        confirmMessage={confirmMessage}
        handlePasswordChange={handlePasswordChange}
        handlePasswordConfirmChange={handlePasswordConfirmChange}
        handledNextButton={handledNextButton}
      />
    </>
  );
}
