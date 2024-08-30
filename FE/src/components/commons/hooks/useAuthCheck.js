import { useEffect } from "react";
import { useRouter } from "next/router";
import useAuthStore from "../../../store/useAuthStore";
import refreshAccessToken from "../api/refreshAccessToken";

const example = {
  accessToken:
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzc2FyQG5hdGUuY29tIiwicm9sZSI6IlJPTEVfVVNFUiIsImlkIjoyLCJleHAiOjE2ODcwNTIzNTd9.v-0C5EoV-QfGVC3Qdis1HLfKf4ZaYIBacWQ5ttkdtTOj6QqVJ4KoyQdvxBUz3NvjC-W0gs7EDFgwzMaaV1vuGg",
};

const useAuthCheck = () => {
  const router = useRouter();
  const { accessToken, setAccessToken, clearAccessToken } = useAuthStore();

  useEffect(() => {
    const isLoggedIn = sessionStorage.getItem("isLoggedIn") === "true";
    // console.log("useEffect triggered");
    // console.log("isLoggedIn:", isLoggedIn);
    // console.log("accessToken before check:", accessToken);

    if (isLoggedIn && !accessToken) {
      console.log(
        "User is logged in but accessToken is missing. Attempting to refresh accessToken..."
      );
      (async () => {
        try {
          const data = await refreshAccessToken();
          console.log("refreshAccessToken response data:", data);
          if (data) {
            setAccessToken(data.accessToken);
            console.log("New accessToken set:", data.accessToken);
          }
        } catch (error) {
          console.error("Error refreshing accessToken:", error);
          clearAccessToken();
          console.log("Access token cleared due to error.");
          // sessionStorage.setItem("isLoggedIn", false);
          // router.push("/login");
        }
      })();
    }

    console.log("accessToken after check:", accessToken);
  }, [router, accessToken, setAccessToken, clearAccessToken]);
};

export default useAuthCheck;
