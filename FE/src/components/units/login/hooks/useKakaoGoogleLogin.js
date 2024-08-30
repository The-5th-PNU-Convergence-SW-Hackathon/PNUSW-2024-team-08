import { useCallback } from "react";

const KAKAO_REST_API_KEY = process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY;
const KAKAO_REDIRECT_URI = "https://www.forpaw.site/api/auth/login/kakao";
const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${KAKAO_REST_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URI}`;

const GOOGLE_REST_API_KEY = encodeURIComponent(
  process.env.NEXT_PUBLIC_GOOGLE_REST_API_KEY
);
const GOOGLE_REDIRECT_URI = encodeURIComponent(
  "https://www.forpaw.site/api/auth/login/google"
);
const GOOGLE_SCOPES =
  encodeURIComponent("https://www.googleapis.com/auth/userinfo.profile") +
  "%20" +
  encodeURIComponent("https://www.googleapis.com/auth/userinfo.email");

const GOOGLE_AUTH_URL = `https://accounts.google.com/o/oauth2/auth?response_type=code&client_id=${GOOGLE_REST_API_KEY}&redirect_uri=${GOOGLE_REDIRECT_URI}&scope=${GOOGLE_SCOPES}`;

const useKakaoGoogleLogin = () => {
  const handleKakaoLoginClick = useCallback(() => {
    console.log("Redirecting to Kakao login page");
    window.location.href = KAKAO_AUTH_URL;
  }, []);

  const handleGoogleLoginClick = useCallback(() => {
    console.log("Redirecting to Google login page");
    window.location.href = GOOGLE_AUTH_URL;
  }, []);

  return {
    handleKakaoLoginClick,
    handleGoogleLoginClick,
  };
};

export default useKakaoGoogleLogin;
