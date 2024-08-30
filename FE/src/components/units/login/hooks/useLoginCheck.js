import { requestLoginToken } from "../Login.queries";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { useState } from "react";

export const useLoginCheck = (email, password) => {
  const router = useRouter();
  const [isLoginFailed, setIsLoginFailed] = useState(false);
  const [resultModalText, setResultModalText] = useState({
    text: "로그인에 실패하였습니다.",
    subText: "이메일 또는 비밀번호를 다시 확인해주세요.",
    confirmText: "확인",
  });

  const verifyLogin = async () => {
    try {
      const data = await requestLoginToken(email, password);
      console.log(data);
      if (data.accessToken) {
        // accessToken을 쿠키에 저장
        Cookies.set("accessToken", data.accessToken, {
          expires: 1,
          secure: false,
          sameSite: "Strict",
        });
        setIsLoginFailed(false);

        router.push("/home");
      }
    } catch (error) {
      // const errorMessage = JSON.parse(error.message).message;
      const errorMessage = JSON.parse(error.message).message;
      console.log("errorMessage: ", errorMessage);
      setResultModalText((prev) => ({
        ...prev,
        subText: errorMessage,
      }));
      setIsLoginFailed(true);
      console.error("로그인 안됨:", error);
    }
  };

  const browseAsGeust = () => {
    sessionStorage.setItem("isLoggedIn", "false");
    router.push("/home");
  };

  const handleLoginModalChange = () => {
    setIsLoginFailed(false);
  };

  return {
    verifyLogin,
    browseAsGeust,
    isLoginFailed,
    resultModalText,
    handleLoginModalChange,
  };
};
