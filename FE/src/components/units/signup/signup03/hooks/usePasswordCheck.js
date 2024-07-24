import { CheckPasswordDuplication } from "../Signup03.queries";
import { useState } from "react";
import { useRouter } from "next/router";

export const usePasswordCheck = () => {
  const [password, setPassword] = useState(""); // 비밀번호 상태 추가
  const [passwordConfirm, setPasswordConfirm] = useState(""); // 비밀번호 확인 상태 추가
  const [isPasswordMatch, setIsPasswordMatch] = useState(false); // 비밀번호 일치 여부 상태 추가
  const [isVisible, setIsvisible] = useState(false); //비밀번호 input 여부 상태
  const [isPasswordAvailable, setIsPasswordAvailable] = useState(false);
  const router = useRouter();

  const email = router.query.email;
  const name = router.query.name;

  // 비밀번호 입력 시 상태 업데이트
  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    const isValid = /^(?=.*[!@#$%^&*().])(?=.{10,})/.test(newPassword); //비밀번호가 특수문자를 포함하고 10자리 이상인지를 판단
    setPassword(newPassword);
    setIsPasswordMatch(newPassword === passwordConfirm); // 비밀번호와 비밀번호 확인 값 비교하여 일치 여부 업데이트
    setIsPasswordAvailable(isValid);
  };

  const handleConfirmPasswordChange = (e) => {
    const newConfirmPassword = e.target.value;
    setPasswordConfirm(newConfirmPassword);
    setIsvisible(true);
    setIsPasswordMatch(newConfirmPassword === password); // 비밀번호 확인 값과 비밀번호 값 비교하여 일치 여부 업데이트
  };

  const navigateTo = (path) => () => {
    if (isPasswordMatch) {
      router.push(
        {
          pathname: path,
          query: {
            email: email, //이메일 값을 다음 페이지에 넘김
            name: name, //이름값을 넘겨주기 위해서
            password: password,
            passwordConfirm: passwordConfirm,
          },
        },
        `${path}` //url값에 path를 숨기기 위하여 넣는 값
      );
    }
  };

  const verifyPassword = async (path) => {
    try {
      const data = await CheckPasswordDuplication(password, passwordConfirm);
      if (data.success) {
        //성공하였을 때 다음 페이지로 넘어가는 로직 추가
        navigateTo(path);
      }
    } catch (error) {
      console.log("비밀번호 등록 실패");
    }
  };

  return {
    email,
    name,
    password,
    passwordConfirm,
    isPasswordMatch,
    isVisible,
    isPasswordAvailable,
    handlePasswordChange,
    handleConfirmPasswordChange,
    verifyPassword,
    navigateTo,
  };
};
