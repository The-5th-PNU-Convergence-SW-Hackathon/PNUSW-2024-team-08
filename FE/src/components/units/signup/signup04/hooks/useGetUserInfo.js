import { useState, useEffect } from "react";

export const useGetUserInfo = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedEmail = sessionStorage.getItem("email");
      const storedName = sessionStorage.getItem("name");
      const storedPassword = sessionStorage.getItem("password");
      const storedPasswordConfirm = sessionStorage.getItem("passwordConfirm");

      if (storedEmail) setEmail(storedEmail);
      if (storedName) setName(storedName);
      if (storedPassword) setPassword(storedPassword);
      if (storedPasswordConfirm) setPasswordConfirm(storedPasswordConfirm);
    }
  }, []);

  return {
    email,
    name,
    password,
    passwordConfirm,
  };
};
