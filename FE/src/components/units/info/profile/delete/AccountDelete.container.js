import { useRouter } from "next/router";
import { useCurrentPasswordCheck } from "./hooks/useCurrentPasswordCheck";
import AccountDeleteUI from "./AccountDelete.presenter";
import { useNavigate } from "../../../../../../src/components/commons/hooks/useNavigate";
import { useCheckBox } from "./hooks/useCheckBox";
import { useEmailCheck } from "./hooks/useEmailCheck";
import { useEffect, useState } from "react";
import useSignout from "./hooks/useSignout";
import ConfirmModalUI from "../../../../../../src/components/commons/confirmModal/ConfirmModal.presenter";
import ResultModalUI from "../../../../../../src/components/commons/resultModal/ResultModal.presenter";

export default function AccountDelete({ isSSRLoggedIn, profileData }) {
  const router = useRouter();
  const email = profileData.email;
  const isSocialJoined = profileData.isSocialJoined;
  const [isDeleteEnabled, setIsDeleteEnabled] = useState(false);

  const { isChecked, handleCheckboxChange } = useCheckBox();

  const {
    currentPassword,
    isCorrectPassword,
    correctMessage,
    handleCurrentPasswordChange,
  } = useCurrentPasswordCheck(isChecked);

  const {
    emailInput,
    codeInput,
    isCorrectEmail,
    isButtonClicked,
    isCorrectCode,
    correctEmailMessage,
    correctCodeMessage,
    handleEmailChange,
    handleCodeSend,
    handleCodeResend,
    handleCodeChange,
    timer,
    remainingTime,
    error,
    errorMessage,
  } = useEmailCheck(email, isChecked);

  const {
    isConfrimModalOpen,
    isResultModalOpen,
    confirmModalText,
    resultModalText,
    handleConfrimModal,
    handleResultModal,
    confirmSignout,
  } = useSignout();

  useEffect(() => {
    const newDeleteEnabled =
      (isChecked && isCorrectPassword) ||
      (isChecked && isCorrectEmail && isButtonClicked && isCorrectCode);

    if (isDeleteEnabled !== newDeleteEnabled) {
      setIsDeleteEnabled(newDeleteEnabled);
    }
  }, [
    isChecked,
    isCorrectPassword,
    isCorrectEmail,
    isButtonClicked,
    isCorrectCode,
  ]);

  const { navigateTo, navigateBack } = useNavigate();

  return (
    <>
      <AccountDeleteUI
        email={email}
        isSocialJoined={isSocialJoined}
        isChecked={isChecked}
        handleCheckboxChange={handleCheckboxChange}
        currentPassword={currentPassword}
        isCorrectPassword={isCorrectPassword}
        correctMessage={correctMessage}
        handleCurrentPasswordChange={handleCurrentPasswordChange}
        emailInput={emailInput}
        codeInput={codeInput}
        isCorrectEmail={isCorrectEmail}
        isButtonClicked={isButtonClicked}
        isCorrectCode={isCorrectCode}
        correctEmailMessage={correctEmailMessage}
        correctCodeMessage={correctCodeMessage}
        handleEmailChange={handleEmailChange}
        handleCodeSend={handleCodeSend}
        handleCodeResend={handleCodeResend}
        handleCodeChange={handleCodeChange}
        timer={timer}
        remainingTime={remainingTime}
        error={error}
        errorMessage={errorMessage}
        isDeleteEnabled={isDeleteEnabled}
        handleConfrimModal={handleConfrimModal}
        navigateTo={navigateTo}
        navigateBack={navigateBack}
      />
      <ConfirmModalUI
        modalText={confirmModalText}
        isModalOpen={isConfrimModalOpen}
        handleCancelBtn={handleConfrimModal}
        handleConfirmBtn={handleResultModal}
      />
      <ResultModalUI
        modalText={resultModalText}
        isModalOpen={isResultModalOpen}
        handleConfirmBtn={confirmSignout}
      />
    </>
  );
}
