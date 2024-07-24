import { useState, useEffect } from 'react';
import { CheckEmailDuplication, CheckCode } from '../Find_Account.01queries';

export const useEmailAndCodeCheck = () => {
  const [email, setEmail] = useState(""); //이메일 id입력을 받을 값
  const [selectedOption, setSelectedOption] = useState(""); // select의 값을 찾아내는 함수
  const [isEmailAvailable, setIsEmailAvailable] = useState(false);  //이메일 사용가능 여부
  const [isVisible, setIsvisible] = useState(false);
  const [timer, setTimer] = useState(90); // 타이머 초 초기값
  const [timerId, setTimerId] = useState(null); // 타이머 인터벌 ID
  const fullEmail = `${email}@${selectedOption}`;
  const [code, setCode] = useState(""); //랜덤된 인증번호 4자리

  const handleEmailValueChange = (e) => {
    setEmail(e.target.value);
  }

  const handleSelectOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleCode = (e) => {
    setCode(e.target.value);
  }

  const handleCheckEmailAndStartTimer = () => {
    setIsEmailAvailable(true);
    setIsvisible(true);
    setTimer(90);
    clearInterval(timerId);
  };

  useEffect(() => {
    StartTimer();
  }, [isEmailAvailable]);

  const StartTimer = () => {
    if (isEmailAvailable) {
      const id = setInterval(() => {
        setTimer(prevTimer => {
          if (prevTimer === 0) {
            clearInterval(id);
            return 0;
          }
          return prevTimer - 1;
        });
      }, 1000);
      setTimerId(id); // 타이머 인터벌 ID 저장
    }
  }

  const verifyEmail = async () => { //가입된 이메일이 있는지 확인
    try {
      const data = await CheckEmailDuplication(fullEmail);
      if (data.success) {
        setIsEmailAvailable(true);
        setIsvisible(true);
        setTimer(80);
        clearInterval(timerId);
      }
      else {
        setIsEmailAvailable(false);
      }
    } catch (error) {
      setIsEmailAvailable(false);
      console.log("잘못된 이메일입니다.")
    }
  }

  const verifyCode = async (path) => { //코드 일치 확인여부 그리고 다음버튼에 들어가는 값
    try {
      const data = await CheckCode(email, code);
      if (data.success) {
        navigateTo(path)
      }
    } catch (error) {
      console.log("인증번호가 일치하지 않습니다.")
    }
  }

  console.log(email)

  return {
    email,
    selectedOption,
    isEmailAvailable,
    isVisible,
    timer,
    handleEmailValueChange,
    handleSelectOptionChange,
    handleCode,
    handleCheckEmailAndStartTimer,
    StartTimer,
    verifyEmail,
    verifyCode
  }
}