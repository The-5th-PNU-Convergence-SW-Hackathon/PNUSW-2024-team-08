import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { useTimer } from "../../../../../../src/components/commons/hooks/useTimer";
import { CheckCode, CheckEmail, ResendCode } from "../FindAccount01.queries";

const getSessionStorageKey = (email) => `findAccountTimestamp_${email}`;

const calculateRemainingTime = (savedTimestamp, totalDuration = 180) => {
  const timePassed = Math.floor((Date.now() - savedTimestamp) / 1000);
  return totalDuration - timePassed;
};

export const useEmailCheck = (selectedEmail) => {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [isEmailAvailable, setIsEmailAvailable] = useState(null);
  const [isCodeAvailable, setIsCodeAvailable] = useState(null);
  const [emailMsg, setEmailMsg] = useState("이메일을 입력해주세요.");
  const [codeMsg, setCodeMsg] = useState("인증번호를 입력해주세요.");
  const router = useRouter();

  const { timer, startTimer, resetTimer, setTimerToZero } = useTimer(180);

  const validateLocalPart = (localPart) => {
    const regex = /^[a-zA-Z0-9._%+-]+$/;
    return regex.test(localPart);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (isEmailAvailable) {
      setCode("");
      setIsCodeAvailable(null);
      setCodeMsg("인증번호를 입력해주세요.");
      resetTimer();
    }

    if (e.target.value.trim() === "") {
      setIsEmailAvailable(null);
      setEmailMsg("이메일을 입력해주세요.");
    } else if (validateLocalPart(e.target.value.trim())) {
      setIsEmailAvailable(null);
      setEmailMsg("버튼을 눌러 중복확인해주세요.");
    } else {
      setIsEmailAvailable(false);
      setEmailMsg("영문, 숫자, 특수문자(._%+-)를 입력해주세요.");
    }
  };

  const handleCodeChange = (e) => {
    setCode(e.target.value);
    if (event.target.value.trim() === "") {
      setIsCodeAvailable(null);
      setCodeMsg("인증번호를 입력해주세요.");
    }
  };

  const verifyEmail = async () => {
    try {
      const fullEmail = `${email}@${selectedEmail}`;
      const result = await CheckEmail(fullEmail);

      const sessionStorageKey = getSessionStorageKey(fullEmail);
      const savedTimestamp = sessionStorage.getItem(sessionStorageKey);

      if (result.isValid && result.isLocal) {
        if (savedTimestamp) {
          const remaining = calculateRemainingTime(savedTimestamp);
          if (remaining > 0 && remaining <= 180) {
            console.log("타이머 재설정 시작.");
            setEmailMsg("인증번호를 이미 발송하였습니다.");
            resetTimer();
            startTimer(remaining);
          } else {
            sessionStorage.setItem(sessionStorageKey, Date.now());
            setEmailMsg("인증번호가 발송되었습니다.");
            resetTimer();
            startTimer(180);
          }
        } else {
          sessionStorage.setItem(sessionStorageKey, Date.now());
          setEmailMsg("인증번호가 발송되었습니다.");
          resetTimer();
          startTimer(180);
        }
        setIsEmailAvailable(true);
        setCode("");
        setIsCodeAvailable(null);
        setCodeMsg("인증번호를 입력해주세요.");
      } else if (result.isValid && !result.isLocal) {
        setIsEmailAvailable(false);
        setEmailMsg("가입된 계정은 소셜회원입니다.");
      } else {
        setIsEmailAvailable(false);
        setEmailMsg("가입되지 않은 계정입니다.");
      }
    } catch (error) {
      console.error("이메일 중복 확인 중 오류 발생:", error);
      setIsEmailAvailable(false);
      setEmailMsg("이메일 중복 확인 중 오류가 발생했습니다.");
    }
  };

  const verifyCode = async () => {
    try {
      const fullEmail = `${email}@${selectedEmail}`;
      const isMatching = await CheckCode(fullEmail, code);
      setIsCodeAvailable(isMatching ? true : false);
      setCodeMsg(
        isMatching ? "인증번호가 일치합니다." : "인증번호가 일치하지 않습니다."
      );
    } catch (error) {
      setIsCodeAvailable(false);
      setCodeMsg("인증번호 확인 중 오류가 발생했습니다.");
      console.error("인증번호 확인 중 오류 발생:", error);
    }
  };

  useEffect(() => {
    const timer = setTimeout(async () => {
      if (code) {
        await verifyCode();
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [code]);

  useEffect(() => {
    if (timer === 0) {
      setIsCodeAvailable(false);
      setCode("");
      setCodeMsg("인증번호 확인 시간이 만료되었습니다.");
    }
  }, [timer]);

  const resendCode = async () => {
    try {
      const fullEmail = `${email}@${selectedEmail}`;
      const result = await ResendCode(fullEmail);
      if (result) {
        setCode("");
        setIsCodeAvailable(null);
        setCodeMsg("인증번호를 입력해주세요.");
        resetTimer();
        startTimer(180);
      }
    } catch (error) {
      setCode("");
      setIsCodeAvailable(false);
      setCodeMsg("인증번호 요청 중 오류가 발생했습니다.");
      console.error("인증번호 요청 중 오류 발생:", error);
    }
  };

  const navigateTo = (path) => () => {
    if (isEmailAvailable && isCodeAvailable) {
      sessionStorage.setItem("code", code);
      router.push(path);
    }
  };

  return {
    email,
    code,
    isEmailAvailable,
    isCodeAvailable,
    emailMsg,
    codeMsg,
    timer,
    handleEmailChange,
    handleCodeChange,
    verifyEmail,
    verifyCode,
    resendCode,
    navigateTo,
  };
};
