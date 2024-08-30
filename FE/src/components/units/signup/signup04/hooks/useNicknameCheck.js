import { checkNickNameDuplication } from "../../../../../../src/components/units/info/profile/edit/ProfileEdit.queries";
import { useState } from "react";

export const useNickNameCheck = () => {
  const [nickName, setNickName] = useState("");
  const [isPossibleNickName, setIsPossibleNickName] = useState(null);
  const [nickNameMsg, setNickNameMsg] = useState(
    "닉네임은 2자 이상 8자 이하로 설정해주세요."
  );

  const handleNickNameChange = (event) => {
    const inputNickName = event.target.value;
    setNickName(inputNickName);

    // 입력값이 유효성 검사를 통과할 때 메시지 업데이트
    if (validateNickName(inputNickName)) {
      setNickNameMsg("버튼을 눌러 중복검사를 해주세요.");
      setIsPossibleNickName(null); // 중복검사 전 상태로 리셋
    } else {
      // 유효성 검사를 통과하지 못하면 즉시 메시지 업데이트
      setNickNameMsg("닉네임은 2자 이상 8자 이하로 설정해주세요.");
      setIsPossibleNickName(null);
    }
  };

  const validateNickName = (nickName) => {
    // 정규 표현식을 사용하여 2자 이상, 8자 이하인지 확인
    const regex = /^.{2,8}$/;
    return regex.test(nickName);
  };

  const verifyNickName = async (nickName) => {
    if (!validateNickName(nickName)) return;

    try {
      const result = await checkNickNameDuplication(nickName);
      console.log("result: ", result);
      if (!result.isDuplicate) {
        setIsPossibleNickName(true);
        setNickNameMsg("사용 가능한 닉네임입니다.");
      } else {
        setIsPossibleNickName(false);
        setNickNameMsg("이미 사용 중인 닉네임입니다.");
      }
    } catch (error) {
      console.error("닉네임 체크 중 오류 발생:", error);
      // 여기에 에러 처리 로직 추가
      setIsPossibleNickName(false);
      // 에러 상황에 대한 적절한 메시지 설정
      setNickNameMsg("닉네임 검사 중 오류가 발생했습니다.");
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
