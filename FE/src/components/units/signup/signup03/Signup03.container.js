import { useRouter } from "next/router";
import SignUpUI03 from "./Signup03.presenter";
import { usePasswordCheck } from "./hooks/usePasswordCheck";

export default function SignUp03() {

  const {
    email,
    password,
    passwordConfirm,
    isPasswordMatch,
    isVisible,
    isPasswordAvailable,
    handlePasswordChange,
    handleConfirmPasswordChange,
    verifyPassword,
    navigateTo,
  } = usePasswordCheck();

  return (
    <>
      <SignUpUI03
        navigateTo={navigateTo}
        email={email}
        password={password}
        passwordConfirm={passwordConfirm}
        isPasswordMatch={isPasswordMatch}
        handlePasswordChange={handlePasswordChange}
        handleConfirmPasswordChange={handleConfirmPasswordChange}
        isVisible={isVisible}
        isPasswordAvailable={isPasswordAvailable} //사용가능한 비밀번호인지 확인
        verifyPassword={verifyPassword} //다음 버튼에 들어갈 기능
      />
    </>
  );
}
