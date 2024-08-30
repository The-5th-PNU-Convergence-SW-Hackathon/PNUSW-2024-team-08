import FindAccount01UI from "./FindAccount01.presenter";
import { useEmailCheck } from "./hooks/useEmailCheck";
import { useEmailDropdown } from "./hooks/useEmailDropdown";

export default function FindAccount01() {
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
    navigateTo,
  } = useEmailCheck(selectedEmail);

  return (
    <>
      <FindAccount01UI
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
        navigateTo={navigateTo}
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
