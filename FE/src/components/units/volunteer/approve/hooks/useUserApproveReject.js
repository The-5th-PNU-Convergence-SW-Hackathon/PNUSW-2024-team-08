import { useState } from "react"
import { userJoinApprove, userJoinReject } from "../Approve.queries";

export const useUserApproveReject = () => {
  const [isApproveClick, setIsApproveClick] = useState(false);
  const [isRejectClick, setIsRejectClick] = useState(false);

  const handleClickApprove = async (id, applicantId, updateListCallback) => {
    try {
      console.log(applicantId);
      const data = await userJoinApprove(id, applicantId);
      if (data) {
        setIsApproveClick(true);
        updateListCallback(applicantId);  // 리스트 업데이트
        console.log("승인을 완료했습니다.");
      }
    } catch (error) {
      console.error("승인을 실패했습니다.", error);
    }
  }

  const handleClickReject = async (id, applicantId, updateListCallback) => {
    console.log(id, applicantId);
    try {
      const data = await userJoinReject(id, applicantId);
      if (data) {
        setIsRejectClick(true);
        updateListCallback(applicantId);  // 리스트 업데이트
        console.log("거절을 완료했습니다.");
      }
    } catch (error) {
      console.log("거절을 실패하셨습니다", error);
    }
  }

  return {
    isApproveClick,
    isRejectClick,
    handleClickApprove,
    handleClickReject
  }
}