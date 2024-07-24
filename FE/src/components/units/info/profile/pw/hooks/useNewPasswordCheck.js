import { useState, useEffect } from "react";

const passwordPattern =
  /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@#$%^&+=!~`<>,./?;:'"[\]{}\\()|_-])\S*$/;

export const useNewPasswordCheck = (currentPassword) => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(null);
  const [isPasswordMatching, setIsPasswordMatching] = useState(null);
  const [validationMessage, setValidationMessage] =
    useState("새로운 비밀번호를 입력해주세요.");
  const [confirmMessage, setConfirmMessage] = useState("");

  const handleNewPasswordChange = (event) => {
    setNewPassword(event.target.value);
    if (event.target.value.trim() === "") {
      setIsPasswordValid(null);
      setValidationMessage("새로운 비밀번호를 입력해주세요.");
    }
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
    if (event.target.value.trim() === "") {
      setIsPasswordMatching(null);
      setConfirmMessage("");
    }
  };

  useEffect(() => {
    if (newPassword) {
      if (currentPassword === newPassword) {
        setIsPasswordValid(false);
        setValidationMessage("현재 비밀번호와 같습니다. 다시 입력해주세요.");
      } else if (
        passwordPattern.test(newPassword) &&
        newPassword.length >= 8 &&
        newPassword.length <= 20
      ) {
        setIsPasswordValid(true);
        setValidationMessage("비밀번호가 유효합니다.");
      } else {
        setIsPasswordValid(false);
        setValidationMessage(
          "비밀번호는 8-20자, 문자, 숫자, 특수문자를 포함해야 합니다."
        );
      }
    }

    if (newPassword && confirmPassword) {
      setIsPasswordMatching(newPassword === confirmPassword);
      setConfirmMessage(
        newPassword === confirmPassword
          ? "비밀번호가 일치합니다."
          : "비밀번호가 일치하지 않습니다."
      );
    }
  }, [newPassword, confirmPassword]);

  return {
    newPassword,
    confirmPassword,
    isPasswordValid,
    isPasswordMatching,
    validationMessage,
    confirmMessage,
    handleNewPasswordChange,
    handleConfirmPasswordChange,
  };
};
