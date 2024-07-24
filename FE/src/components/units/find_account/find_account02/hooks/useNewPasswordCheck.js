import { useState, useEffect } from 'react';
import { setNewPassword } from '../FindAccount02.queries';
import { useRouter } from 'next/router';

export const useNewPasswordCheck = () => {
  const [password, setPassword] = useState(""); // 비밀번호 상태 추가
  const [confirmPassword, setConfirmPassword] = useState(""); // 비밀번호 확인 상태 추가
  const [isPasswordAvailable, setIsPasswordAvailable] = useState(false);
  const [isPasswordMatch, setIsPasswordMatch] = useState(false); // 비밀번호 일치 여부 상태 추가
  const [isVisible, setIsvisible] = useState(false); //비밀번호 input 여부 상태
  const router = useRouter();

  // 비밀번호 입력 시 상태 업데이트
  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    const isVaild = /^(?=.*[!@#$%^&*().])(?=.{10,})/.test(password);
    setIsPasswordAvailable(isVaild);
    setPassword(newPassword);
    setIsPasswordMatch(newPassword === confirmPassword); // 비밀번호와 비밀번호 확인 값 비교하여 일치 여부 업데이트
  };

  const handleConfirmPasswordChange = (e) => {
    const newConfirmPassword = e.target.value;
    setConfirmPassword(newConfirmPassword);
    setIsvisible(true);
    setIsPasswordMatch(newConfirmPassword === password); // 비밀번호 확인 값과 비밀번호 값 비교하여 일치 여부 업데이트
  };

  const navigateTo = (path) => () => router.push(path);

  const verifyPassword = async(path) => {
    try{
      const data = await setNewPassword(password);
      if (data.success) {
        setIsPasswordAvailable(true);
        navigateTo(path);
      }
      else {
        setIsPasswordAvailable(false);
      }
    }catch(error){
      setIsPasswordAvailable(false);
      console.log("사용불가능한 비밀번호입니다.");
    }
  }

  return {
    password,
    isPasswordAvailable,
    confirmPassword,
    isPasswordMatch,
    isVisible,
    handlePasswordChange,
    handleConfirmPasswordChange
  }
}