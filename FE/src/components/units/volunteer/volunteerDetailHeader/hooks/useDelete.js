import { useState } from "react";
import { requestDelete, requestPostDelete, requestWithdraw, requestMeetingDelete } from "../VolunteerDetailHeader.queries";
import { useRouter } from "next/router";

export const useDelete = () => {
  const [isClickedDelete, setIsClickedDelete] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [actionType, setActionType] = useState(null); 
  const router = useRouter();
  const { id, noticeID, meetingID} = router.query;
  const [msg, setMsg] = useState("");
  const [notice, setNotice] = useState("");
  const [successNotice, setSuccessNotice] = useState("");
  const [confirmMsg, setConfirmMsg] = useState("");
  const [confirmButtonText ,setConfirmButtonText] = useState("");

  const handleClickDelete = () => {
    if (noticeID) {
      setMsg("공지사항을 삭제하시겠습니까?");
      setNotice("삭제한 글은 복구할 수 없습니다.");
      setSuccessNotice("공지사항이 성공적으로 삭제 되었습니다.");
      setConfirmButtonText("삭제");
    } else if (meetingID) {
      setMsg("정기모임을 삭제하시겠습니까?");
      setNotice("모임은 복구할 수 없으며\n회원들에게 삭제 알림이 전송됩니다.");
      setSuccessNotice("정기모임이 성공적으로 삭제 되었습니다.");
      setConfirmButtonText("삭제");
    } else {
      setMsg("모임을 삭제하시겠습니까?");
      setNotice("모임은 복구할 수 없으며\n회원들에게 해체 알림 전송됩니다.");
      setSuccessNotice("모임이 성공적으로 삭제 되었습니다.");
      setConfirmButtonText("해체");
    }
    
    setConfirmMsg("삭제되었습니다.");
    setActionType("delete");
    setIsConfirmModalOpen(true);
  };

  const handleWithdraw = () => {
    setMsg("모임을 나가시겠습니까?");
    setNotice("이후 관리자의 승인 없이\n모임 정보에 접근할 수 없습니다.");
    setSuccessNotice("탈퇴가 성공적으로 완료 되었습니다.");
    setConfirmButtonText("나가기");
    setConfirmMsg("탈퇴가 완료 되었습니다!");
    setActionType("withdraw"); // 액션 타입 설정
    setIsConfirmModalOpen(true);
  };

  const handleConfirmAction = async () => {
    try {
      if (actionType === "withdraw") {
        await requestWithdraw(id);
      } else if (actionType === "delete") {
        if (noticeID) {
          await requestPostDelete(noticeID);
        } else if (meetingID) {
          await requestMeetingDelete(id, meetingID);
        } else {
          await requestDelete(id);
        }
        setIsClickedDelete(true);
      }
      setIsConfirmModalOpen(false);
      setIsSuccessModalOpen(true);
    } catch (error) {
      console.error(`${actionType} error`, error);
    }
  };

  const handleCloseSuccessModal = () => {
    setIsSuccessModalOpen(false);
    if (router.pathname === `/volunteer/[id]/edit` || router.pathname === "/volunteer/[id]") {
      router.push("/volunteer/joined");
    } else if (router.pathname === "/volunteer/[id]/notices/[noticeID]") {
      router.push(`/volunteer/${id}/notices`);
    } else if(router.pathname === "/volunteer/[id]/regular_meetings/[meetingID]") {
      router.push(`/volunteer/${id}/regular_meetings`)
    }
  };

  return {
    handleClickDelete,
    handleWithdraw,
    isConfirmModalOpen,
    setIsConfirmModalOpen,
    isSuccessModalOpen,
    handleConfirmAction, // 단일 액션 함수로 변경
    handleCloseSuccessModal,
    id,
    noticeID,
    meetingID,
    msg,
    notice,
    successNotice,
    confirmButtonText,
    confirmMsg
  };
};
