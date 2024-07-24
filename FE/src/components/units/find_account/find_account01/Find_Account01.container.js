import { useRouter } from "next/router";
import FindAccount01UI from "./Find_Account01.presenter";
import { useEmailAndCodeCheck } from "./hooks/useEmailAndCodeCheck";

export default function FindAccount01() {
  const router = useRouter();
  const navigateTo = (path) => () => router.push(path);

  const {
    email,
    selectedOption,
    isEmailAvailable,
    isVisible,
    timer,
    handleEmailValueChange,
    handleSelectOptionChange,
    handleCode,
    handleCheckEmailAndStartTimer,
    StartTimer,
    verifyEmail,
    verifyCode
  } = useEmailAndCodeCheck();

  return (
    <>
      <FindAccount01UI
        navigateTo={navigateTo}
        email={email}
        handleEmailValueChange={handleEmailValueChange}
        selectedOption={selectedOption}
        handleSelectOptionChange={handleSelectOptionChange}
        isEmailAvailable={isEmailAvailable}
        isVisible={isVisible}
        timer={timer}
        handleCode={handleCode}
        handleCheckEmailAndStartTimer={handleCheckEmailAndStartTimer}
        StartTimer={StartTimer}
        verifyEmail={verifyEmail}
        verifyCode={verifyCode} // 다음 버튼에 들어가야 함
      />
    </>
  )
}