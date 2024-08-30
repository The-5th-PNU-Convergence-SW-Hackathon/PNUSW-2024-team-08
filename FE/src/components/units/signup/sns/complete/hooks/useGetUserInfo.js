import { useState, useEffect } from "react";

export const useGetUserInfo = () => {
  const [authProvider, setAuthProvider] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedAuthProvider = sessionStorage.getItem("authProvider");

      if (storedAuthProvider) setAuthProvider(storedAuthProvider);
    }
  }, []);

  return {
    authProvider,
  };
};
