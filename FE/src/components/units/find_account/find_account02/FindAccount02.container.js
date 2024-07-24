import FindAccount02UI from "./FIndAccount02.presenter";
import { useRouter } from "next/router";
import { useNewPasswordCheck } from "./hooks/useNewPasswordCheck";

export default function FindAccount02(){
  const router = useRouter();

  const navigateTo = (path) => () => router.push(path);

  const {
    password,
    isPasswordAvailable,
    confirmPassword,
    isPasswordMatch,
    isVisible,
    handlePasswordChange,
    handleConfirmPasswordChange
  } = useNewPasswordCheck();

  return(
    <>
      <FindAccount02UI 
        navigateTo={navigateTo}
        password={password}
        isPasswordAvailable={isPasswordAvailable}
        confirmPassword={confirmPassword}
        isPasswordMatch={isPasswordMatch}
        handlePasswordChange={handlePasswordChange}
        handleConfirmPasswordChange={handleConfirmPasswordChange}
        isVisible={isVisible}
      />
    </>
  )
}