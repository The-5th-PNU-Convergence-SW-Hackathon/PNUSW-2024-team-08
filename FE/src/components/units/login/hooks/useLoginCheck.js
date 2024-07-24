import { requestLoginToken } from "../Login.queries";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import useAuthStore from "../../../../../src/store/useAuthStore";

export const useLoginCheck = (email, password) => {
  const router = useRouter();
  const setAccessToken = useAuthStore((state) => state.setAccessToken);

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

        //   // Zustand 스토어에 accessToken 저장
        //   setAccessToken(data.accessToken);

        //   // 세션 스토리지에 로그인 상태 저장
        //   sessionStorage.setItem("isLoggedIn", "true");

        router.push("/home");
      }
    } catch (error) {
      console.error("로그인 안됨:", error);
    }
  };

  const browseAsGeust = () => {
    sessionStorage.setItem("isLoggedIn", "false");
    router.push("/home");
  };

  return { verifyLogin, browseAsGeust };
};
