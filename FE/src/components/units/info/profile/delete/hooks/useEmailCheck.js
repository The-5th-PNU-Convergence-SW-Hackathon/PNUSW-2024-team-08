import { useState, useEffect } from "react";
import {
  requestMoreCode,
  requestWithdrawCode,
  verifykWithdrawCode,
} from "../AccountDelete.queries";
import { useTimer } from "../../../../../../../src/components/commons/hooks/useTimer";

const calculateRemainingTime = (savedTimestamp, totalDuration = 180) => {
  const timePassed = Math.floor((Date.now() - savedTimestamp) / 1000);
  return totalDuration - timePassed;
};

export const useEmailCheck = (userEmail, isChecked) => {
  const [emailInput, setEmaiInput] = useState("");
  const [codeInput, setCodeInput] = useState("");
  const [isCorrectEmail, setIsCorrectEmail] = useState(null);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [isCorrectCode, setIsCorrectCode] = useState(null);
  const [correctEmailMessage, setCorrectEmailMessage] =
    useState("이메일을 입력해주세요.");
  const [correctCodeMessage, setCorrectCodeMessage] =
    useState("인증번호를 입력해주세요.");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [remainingTime, setRemainingTime] = useState(0);

  const { timer, startTimer, resetTimer, setTimerToZero } = useTimer(180);

  const handleEmailChange = (event) => {
    setEmaiInput(event.target.value);
    if (event.target.value.trim() === "") {
      setIsCorrectEmail(null);
      setCorrectEmailMessage("이메일을 입력해주세요.");
    }
  };

  const handleCodeSend = async () => {
    try {
      const result = await requestWithdrawCode(emailInput);
      if (result) {
        const savedTimestamp = sessionStorage.getItem("requestTimestamp");

        if (savedTimestamp) {
          const remaining = calculateRemainingTime(savedTimestamp);
          if (remaining > 0 && remaining <= 180) {
            console.log("타이머 재설정 시작.");
            resetTimer();
            startTimer(remaining);
            setRemainingTime(remaining);
            setError(true);
            setErrorMessage("인증코드 재요청까지 남은 시간 ");
          } else {
            setIsButtonClicked(true);
            setError(false);
            setErrorMessage("");
            sessionStorage.setItem("requestTimestamp", Date.now());
            resetTimer();
            startTimer(180);
          }
        } else {
          setIsButtonClicked(true);
          setError(false);
          setErrorMessage("");
          sessionStorage.setItem("requestTimestamp", Date.now());
          resetTimer();
          startTimer(180);
        }

        setCodeInput("");
        setIsCorrectCode(null);
        setCorrectCodeMessage("인증번호를 입력해주세요.");
      }
    } catch (error) {
      console.error("인증번호 요청 중 오류 발생:", error);
      setError(true);
      setErrorMessage("인증코드 요청 중 오류가 발생했습니다.");
    }
  };

  const handleCodeResend = async () => {
    if (!isCorrectEmail) return;

    try {
      const result = await requestMoreCode(emailInput);
      if (result) {
        setCodeInput("");
        setIsCorrectCode(null);
        setCorrectCodeMessage("인증번호를 입력해주세요.");
        resetTimer();
        startTimer(180);
      }
    } catch (error) {
      setCodeInput("");
      setIsCorrectCode(false);
      setCorrectCodeMessage("인증번호 요청 중 오류가 발생했습니다.");
      setIsCorrectEmail(false);
      setTimerToZero();
    }
  };

  const handleCodeChange = (e) => {
    setCodeInput(e.target.value);
    if (e.target.value.trim() === "") {
      setIsCorrectCode(null);
      setCorrectCodeMessage("인증번호를 입력해주세요.");
    }
  };

  const verifyCode = async (email, code) => {
    try {
      const isMatching = await verifykWithdrawCode(email, code);
      setIsCorrectCode(isMatching ? true : false);
      setCorrectCodeMessage(
        isMatching ? "인증번호가 일치합니다." : "인증번호가 일치하지 않습니다."
      );
    } catch (error) {
      setIsCorrectCode(false);
      setCorrectCodeMessage("인증번호 확인 중 오류가 발생했습니다.");
      console.error("인증번호 확인 중 오류 발생:", error);
    }
  };

  useEffect(() => {
    const timerId = setTimeout(async () => {
      if (codeInput) {
        await verifyCode(emailInput, codeInput);
      }
    }, 200);

    return () => clearTimeout(timerId);
  }, [codeInput]);

  useEffect(() => {
    if (timer === 0) {
      setIsCorrectCode(false);
      setCodeInput("");
      setCorrectCodeMessage("인증번호 확인 시간이 만료되었습니다.");
      setError(false);
      setErrorMessage("");
    }
  }, [timer]);

  useEffect(() => {
    if (emailInput) {
      if (emailInput === userEmail) {
        setIsCorrectEmail(true);
        setCorrectEmailMessage(
          "이메일이 일치합니다. 버튼을 눌러 코드를 확인하세요."
        );
      } else {
        setIsCorrectEmail(false);
        setCorrectEmailMessage("이메일이 일치하지 않습니다.");
      }
    }
  }, [emailInput, isCorrectEmail]);

  return {
    emailInput,
    codeInput,
    isCorrectEmail,
    isButtonClicked,
    isCorrectCode,
    correctEmailMessage,
    correctCodeMessage,
    handleEmailChange,
    handleCodeSend,
    handleCodeResend,
    handleCodeChange,
    timer,
    remainingTime,
    error,
    errorMessage,
  };
};
