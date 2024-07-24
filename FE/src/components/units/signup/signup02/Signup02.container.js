import SignUpUI02 from "./Signup02.presenter";
import { useEmailCheck } from "./hooks/useEmailCheck";

export default function SignUp02() {

  const {
    email,
    emailOption,
    isEmailAvailable,
    isVisible,
    timer,
    code,
    handleEmailIdValueChange,
    handleSelectOptionChange,
    handleCodeChange,
    verifyEmail, //중복확인을 누르면 백에서 판단을 하여 사용가능한 이메일인지 알려준다.
    verifyCode, //다음을 누르면 인증번호가 맞는지 확인하고 다음으로 넘어가게끔 할 수 있게끔
    navigateTo
  } = useEmailCheck();

  return (
    <>
      <SignUpUI02
        navigateTo={navigateTo}
        email={email}
        handleEmailIdValueChange={handleEmailIdValueChange}
        emailOption={emailOption}
        handleSelectOptionChange={handleSelectOptionChange}
        isEmailAvailable={isEmailAvailable}
        isVisible={isVisible}
        code={code}
        handleCodeChange={handleCodeChange}
        timer={timer}
        verifyEmail={verifyEmail}
        verifyCode={verifyCode} //다음버튼에 들어가는 함수
      />
    </>
  )
}