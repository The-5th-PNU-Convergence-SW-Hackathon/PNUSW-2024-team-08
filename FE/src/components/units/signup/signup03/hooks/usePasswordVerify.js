import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export const usePasswordVerify = (
  password,
  passwordConfirm,
  isPasswordValid,
  isPasswordMatching
) => {
  const router = useRouter();
  const [email, setEmail] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // 클라이언트 사이드에서만 실행
      const storedEmail = sessionStorage.getItem("email");
      setEmail(storedEmail);
    }
  }, []);

  const handledNextButton = (path) => {
    if (!isPasswordValid || !isPasswordMatching) return;

    sessionStorage.setItem("password", password);
    sessionStorage.setItem("passwordConfirm", passwordConfirm);
    router.push(path);
  };

  return {
    email,
    handledNextButton,
  };
};
