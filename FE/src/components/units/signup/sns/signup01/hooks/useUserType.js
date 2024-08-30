import { useRouter } from "next/router";
import { useState } from "react";

export function useUserType(name) {
  const router = useRouter();
  const [selectedUserType, setSelectedUserType] = useState("");
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const [isUserFocused, setIsUserFocused] = useState(false);
  const [isAgreed, setIsAgreed] = useState();

  const handleUserTypeChange = (userType) => {
    setSelectedUserType(userType);
    setIsUserDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsUserDropdownOpen((prev) => !prev);
    setIsUserFocused((prev) => !prev);
  };

  const handleAgreedChange = () => {
    setIsAgreed((prev) => !prev);
  };

  const handledNextButton = (path) => {
    if (name === "") return;
    if (
      selectedUserType === "" ||
      (selectedUserType === "shelter" && !isAgreed)
    )
      return;

    sessionStorage.setItem("name", name);
    sessionStorage.setItem("userType", selectedUserType);
    router.push(path);
  };

  return {
    selectedUserType,
    handleUserTypeChange,
    isUserDropdownOpen,
    toggleDropdown,
    isUserFocused,
    isAgreed,
    handleAgreedChange,
    handledNextButton,
  };
}
