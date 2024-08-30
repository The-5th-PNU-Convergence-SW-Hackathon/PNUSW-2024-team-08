import { useState, useEffect } from "react";

export const useGetUserInfo = () => {
  const [code, setCode] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedCode = sessionStorage.getItem("code");

      if (storedCode) setCode(storedCode);
    }
  }, []);

  return {
    code,
  };
};
