import { useState } from "react";

export function useEmailPasswordCheck() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); //비밀번호 입력을 받아오는 변수
  const [isValid, setIsValid] = useState(false);

  const validateEmail = (email) => {
    const regex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
  };

  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
    setIsValid(validateEmail(inputEmail)); // 이메일 유효성 검사 수행 후 isValid 업데이트
    console.log("Email : ", inputEmail);
    console.log("isValid", isValid);
  };

  const handlePasswordChange = (e) => {
    const inputPassword = e.target.value;
    setPassword(inputPassword);
    console.log("Password : ", inputPassword);
  };

  return { email, isValid, password, handleEmailChange, handlePasswordChange };
}
