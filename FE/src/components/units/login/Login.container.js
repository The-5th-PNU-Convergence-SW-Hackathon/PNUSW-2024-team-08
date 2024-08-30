import LoginUI from "./Login.presenter";
import { useLoginCheck } from "./hooks/useLoginCheck";
import { useNavigate } from "../../commons/hooks/useNavigate";
import { useEmailPasswordCheck } from "./hooks/useEmailPasswordCheck";
import useKakaoGoogleLogin from "./hooks/useKakaoGoogleLogin";
import ResultModalUI from "../../commons/resultModal/ResultModal.presenter";

export default function Login() {
  const { navigateTo } = useNavigate();

  const { email, password, isValid, handleEmailChange, handlePasswordChange } =
    useEmailPasswordCheck();

  const { handleKakaoLoginClick, handleGoogleLoginClick } =
    useKakaoGoogleLogin();

  const {
    verifyLogin,
    browseAsGeust,
    isLoginFailed,
    resultModalText,
    handleLoginModalChange,
  } = useLoginCheck(email, password);

  return (
    <>
      <LoginUI
        navigateTo={navigateTo}
        email={email}
        isValid={isValid}
        handleEmailChange={handleEmailChange}
        password={password}
        handlePasswordChange={handlePasswordChange}
        verifyLogin={() => verifyLogin(email, password)}
        handleKakaoLoginClick={handleKakaoLoginClick}
        handleGoogleLoginClick={handleGoogleLoginClick}
        browseAsGeust={browseAsGeust}
      />
      <ResultModalUI
        modalText={resultModalText}
        isModalOpen={isLoginFailed}
        handleConfirmBtn={handleLoginModalChange}
      />
    </>
  );
}
