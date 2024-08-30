import { useGetUserInfo } from "./hooks/useGetUserInfo";
import useKakaoGoogleLogin from "../../../login/hooks/useKakaoGoogleLogin";
import SnsSignupCompleteUI from "./SnsSignupComplete.presenter";

export default function SnsSignupComplete() {
  const { authProvider } = useGetUserInfo();
  const { handleKakaoLoginClick, handleGoogleLoginClick } =
    useKakaoGoogleLogin();

  return (
    <>
      <SnsSignupCompleteUI
        authProvider={authProvider}
        handleKakaoLoginClick={handleKakaoLoginClick}
        handleGoogleLoginClick={handleGoogleLoginClick}
      />
    </>
  );
}
