import { useState, useEffect } from "react";

export const useGetUserInfo = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [authProvider, setAuthProvider] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedEmail = sessionStorage.getItem("email");
      const storedName = sessionStorage.getItem("name");
      const storedAuthProvider = sessionStorage.getItem("authProvider");

      if (storedEmail) setEmail(storedEmail);
      if (storedName) setName(storedName);
      if (storedAuthProvider) setAuthProvider(storedAuthProvider);
    }
  }, []);

  return {
    email,
    name,
    authProvider,
  };
};
