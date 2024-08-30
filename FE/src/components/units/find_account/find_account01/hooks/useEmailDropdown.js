import { useState, useRef, useEffect } from "react";

export const useEmailDropdown = (initialDomain = "gmail.com") => {
  const [isEmailDropdownOpen, setIsEmailDropdownOpen] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [selectedEmail, setSelectedEmail] = useState(initialDomain);
  const emailRef = useRef(null);

  const toggleEmailDropdown = () => {
    setIsEmailDropdownOpen(!isEmailDropdownOpen);
    setIsEmailFocused(!isEmailFocused);
  };

  const handleEmailSelect = (e) => {
    const clickedEmail = e.target.innerText;
    setSelectedEmail(clickedEmail);
    setIsEmailDropdownOpen(false);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (emailRef.current && !emailRef.current.contains(event.target)) {
        setIsEmailDropdownOpen(false);
        setIsEmailFocused(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return {
    isEmailDropdownOpen,
    isEmailFocused,
    emailRef,
    selectedEmail,
    toggleEmailDropdown,
    handleEmailSelect,
  };
};
