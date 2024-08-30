import { useState, useCallback } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

export default function useLogout() {
  const [isLogoutClicked, setIsLogoutClicked] = useState(false);
  const router = useRouter();

  const logoutModalText = {
    text: "로그아웃하시겠습니까?",
    subText: "얼마든지 다시 로그안하실 수 있습니다.",
    cancelText: "다음에",
    confirmText: "로그아웃",
  };

  // 로그아웃 실행 함수
  const logout = useCallback(() => {
    sessionStorage.clear();
    Cookies.remove("accessToken", { path: "/" });
    Cookies.remove("refreshToken", { path: "/" });
    router.push("/login");
  }, [router]);

  const toggleLogoutState = useCallback(() => {
    setIsLogoutClicked((prev) => !prev);
  }, []);

  const confirmLogout = useCallback(() => {
    if (isLogoutClicked) {
      logout();
    }
  }, [isLogoutClicked, logout]);

  return {
    isLogoutClicked,
    toggleLogoutState,
    confirmLogout,
    logoutModalText,
  };
}
