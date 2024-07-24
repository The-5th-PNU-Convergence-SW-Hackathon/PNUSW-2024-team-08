import { useRouter } from "next/router";
import Cookies from "js-cookie";

export default function useLogout() {
  const router = useRouter();

  function logout() {
    sessionStorage.clear();
    Cookies.remove("accessToken", { path: "/" }); // 쿠키 제거
    Cookies.remove("refreshToken", { path: "/" }); // 쿠키 제거
    router.push("/login");
  }

  return { logout };
}
