import { useState, useEffect } from "react";
import { submitNewPassword } from "../FindAccount02.queries";

const passwordPattern =
  /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@#$%^&+=!~`<>,./?;:'"[\]{}\\()|_-])\S*$/;

export const usePasswordCheck = (code) => {
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(null);
  const [isPasswordMatching, setIsPasswordMatching] = useState(null);
  const [validationMessage, setValidationMessage] =
    useState("비밀번호를 입력해주세요.");
  const [confirmMessage, setConfirmMessage] = useState("");
  const [isPasswordChangeSuccess, setIsPasswordChangeSuccess] = useState(false);

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    if (event.target.value.trim() === "") {
      setIsPasswordValid(null);
      setValidationMessage("비밀번호를 입력해주세요.");
      setPasswordConfirm("");
    }
  };

  const handlePasswordConfirmChange = (event) => {
    setPasswordConfirm(event.target.value);
    if (event.target.value.trim() === "") {
      setIsPasswordMatching(null);
      setConfirmMessage("");
    }
  };

  useEffect(() => {
    if (password) {
      if (
        passwordPattern.test(password) &&
        password.length >= 8 &&
        password.length <= 20
      ) {
        setIsPasswordValid(true);
        setValidationMessage("사용할 수 있는 비밀번호입니다.");
      } else {
        setIsPasswordValid(false);
        setValidationMessage(
          "비밀번호는 8-20자, 문자, 숫자, 특수문자를 포함해야 합니다."
        );
        setPasswordConfirm("");
      }
    }

    if (isPasswordValid && password && passwordConfirm) {
      setIsPasswordMatching(password === passwordConfirm);
      setConfirmMessage(
        password === passwordConfirm
          ? "비밀번호가 일치합니다."
          : "비밀번호가 일치하지 않습니다."
      );
    } else {
      setConfirmMessage("");
    }
  }, [password, passwordConfirm, isPasswordValid]);

  const changePassword = async () => {
    if (!isPasswordValid || !isPasswordMatching) return;

    try {
      const result = await submitNewPassword(code, password);
      if (result) {
        setIsPasswordChangeSuccess(true);
      }
    } catch (error) {
      setIsPasswordChangeSuccess(false);
      console.error("인증번호 요청 중 오류 발생:", error);
    }
  };

  return {
    password,
    passwordConfirm,
    isPasswordValid,
    isPasswordMatching,
    validationMessage,
    confirmMessage,
    handlePasswordChange,
    handlePasswordConfirmChange,
    isPasswordChangeSuccess,
    changePassword,
  };
};
