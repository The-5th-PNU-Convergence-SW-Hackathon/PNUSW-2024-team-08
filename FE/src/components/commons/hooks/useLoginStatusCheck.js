import { useEffect, useState } from "react";

export const useLoginStatusCheck = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedInStatus = sessionStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedInStatus);
    console.log("isLoggedIn Status:", loggedInStatus); // 상태 로드 확인
  }, []);

  return { isLoggedIn };
};
