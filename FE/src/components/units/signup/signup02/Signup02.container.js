import Signup02UI from "./Signup02.presenter";
import { useEmailCheck } from "./hooks/useEmailCheck";
import { useEmailDropdown } from "./hooks/useEmailDropdown";

export default function Signup02() {
  const {
    isEmailDropdownOpen,
    isEmailFocused,
    emailRef,
    selectedEmail,
    toggleEmailDropdown,
    handleEmailSelect,
  } = useEmailDropdown("gmail.com");

  const {
    email,
    code,
    isEmailAvailable,
    isCodeAvailable,
    emailMsg,
    codeMsg,
    timer,
    handleEmailChange,
    handleCodeChange,
    verifyEmail,
    verifyCode,
    resendCode,
    handledNextButton,
  } = useEmailCheck(selectedEmail);

  return (
    <>
      <Signup02UI
        email={email}
        emailMsg={emailMsg}
        handleEmailChange={handleEmailChange}
        isEmailAvailable={isEmailAvailable}
        code={code}
        codeMsg={codeMsg}
        isCodeAvailable={isCodeAvailable}
        handleCodeChange={handleCodeChange}
        timer={timer}
        verifyEmail={verifyEmail}
        resendCode={resendCode}
        verifyCode={verifyCode}
        handledNextButton={handledNextButton}
        isEmailDropdownOpen={isEmailDropdownOpen}
        isEmailFocused={isEmailFocused}
        emailRef={emailRef}
        selectedEmail={selectedEmail}
        toggleEmailDropdown={toggleEmailDropdown}
        handleEmailSelect={handleEmailSelect}
      />
    </>
  );
}
