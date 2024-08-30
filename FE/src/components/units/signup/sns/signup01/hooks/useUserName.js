import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export const useUserName = () => {
  const router = useRouter();
  const { email, authProvider } = router.query;
  const [name, setName] = useState("");

  const handleNameChange = (e) => {
    const inputName = e.target.value;
    setName(inputName);
  };

  const navigateTo = (path) => () => {
    if (name.length >= 2) {
      sessionStorage.setItem("name", name);
      sessionStorage.setItem("email", email);
      sessionStorage.setItem("authProvider", authProvider);
      router.push(path);
    }
  };

  return {
    name,
    email,
    handleNameChange,
    navigateTo,
  };
};
