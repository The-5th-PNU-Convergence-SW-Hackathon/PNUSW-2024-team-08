import { useState, useEffect } from "react";
import { checkPassword } from "../PasswordEdit.queries"; // 현재 비밀번호 확인 API 함수

export const useCurrentPasswordCheck = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [isCorrectPassword, setIsCorrectPassword] = useState(null);
  const [correctMessage, setCorrectMessage] =
    useState("현재 비밀번호를 입력해주세요.");

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentPassword) {
        console.log(`Current password check`);
        validatePassword(currentPassword);
      }
    }, 200); // 200ms 동안 입력이 멈추면 검증 실행

    return () => clearTimeout(timer); // Clean up 타이머
  }, [currentPassword]);

  const handleCurrentPasswordChange = (event) => {
    setCurrentPassword(event.target.value);
    if (event.target.value.trim() === "") {
      setIsCorrectPassword(null);
      setCorrectMessage("현재 비밀번호를 입력해주세요.");
    }
  };

  const validatePassword = async (password) => {
    try {
      const isMatching = await checkPassword(password);
      setIsCorrectPassword(isMatching ? true : false);
      setCorrectMessage(
        isMatching
          ? "현재 비밀번호와 일치합니다."
          : "현재 비밀번호와 일치하지 않습니다."
      );
    } catch (error) {
      console.error("비밀번호 검증 중 오류 발생:", error);
      setIsCorrectPassword(false);
      setCorrectMessage(
        "비밀번호 확인 중 오류가 발생했습니다. 다시 시도해주세요."
      );
    }
  };

  return {
    currentPassword,
    isCorrectPassword,
    correctMessage,
    handleCurrentPasswordChange,
  };
};
