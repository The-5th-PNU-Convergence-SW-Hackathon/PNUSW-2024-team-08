import { useState } from "react";
import { useRouter } from "next/router";

export const useUserName = () => {
  const router = useRouter();
  const [name, setName] = useState("");

  const handleNameChange = (e) => {
    const inputName = e.target.value;
    setName(inputName);
  };

  const navigateTo = (path) => () => {
    if (name.length >= 2) {
      sessionStorage.setItem("name", name);
      router.push(path);
    }
  };

  return {
    name,
    handleNameChange,
    navigateTo,
  };
};
