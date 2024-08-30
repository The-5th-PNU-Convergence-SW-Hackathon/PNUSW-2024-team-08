import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { requestLoginToken } from "../../../login/Login.queries";
import { useEffect, useState } from "react";

export const useLoginCheck = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedEmail = sessionStorage.getItem("email");
      const storedPassword = sessionStorage.getItem("password");

      if (storedEmail) setEmail(storedEmail);
      if (storedPassword) setPassword(storedPassword);
    }
  }, []);
  const router = useRouter();

  const verifyLogin = async () => {
    try {
      const data = await requestLoginToken(email, password);
      console.log(data);
      if (data.result.accessToken) {
        // accessToken을 쿠키에 저장
        Cookies.set("accessToken", data.accessToken, {
          expires: 1,
          secure: false,
          sameSite: "Strict",
        });

        sessionStorage.removeItem("email");
        sessionStorage.removeItem("name");
        sessionStorage.removeItem("password");
        sessionStorage.removeItem("passwordConfirm");

        router.push("/home");
      }
    } catch (error) {
      router.push("/login");
      console.error("로그인 안됨:", error);
    }
  };

  return { verifyLogin };
};
