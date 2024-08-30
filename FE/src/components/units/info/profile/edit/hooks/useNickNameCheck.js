import { useState } from "react";
import { checkNickNameDuplication } from "../ProfileEdit.queries"; // 가정: checkNickNameAvailability 함수는 이미 queries.js에 정의되어 있음

export const useNickNameCheck = (currentNickName) => {
  const [nickName, setNickName] = useState("");
  const [isPossibleNickName, setIsPossibleNickName] = useState(null);
  const [nickNameMsg, setNickNameMsg] = useState(
    "닉네임은 2자 이상 8자 이하로 설정해주세요."
  );

  const handleNickNameChange = (event) => {
    const inputNickName = event.target.value;
    setNickName(inputNickName);

    if (validateNickName(inputNickName)) {
      setIsPossibleNickName(null);
      setNickNameMsg("버튼을 눌러 중복검사를 해주세요.");
    } else {
      setIsPossibleNickName(null);
      setNickNameMsg("닉네임은 2자 이상 8자 이하로 설정해주세요.");
    }
  };

  const validateNickName = (nickName) => {
    const regex = /^.{2,8}$/;
    return regex.test(nickName);
  };

  const verifyNickName = async (nickName) => {
    if (!validateNickName(nickName)) return;

    if (nickName === currentNickName) {
      setIsPossibleNickName(true);
      setNickNameMsg("현재 사용 중인 닉네임입니다.");
      return;
    }

    try {
      const result = await checkNickNameDuplication(nickName);
      if (!result.isDuplicate) {
        setIsPossibleNickName(true);
        setNickNameMsg("사용할 수 있는 닉네임입니다.");
      } else {
        setIsPossibleNickName(false);
        setNickNameMsg("이미 사용 중인 닉네임입니다.");
      }
    } catch (error) {
      console.error("닉네임 체크 중 오류 발생:", error);
      setIsPossibleNickName(false);
      setNickNameMsg("닉네임 확인 중 오류가 발생했습니다.");
    }
  };

  return {
    nickName,
    isPossibleNickName,
    nickNameMsg,
    handleNickNameChange,
    verifyNickName,
  };
};
