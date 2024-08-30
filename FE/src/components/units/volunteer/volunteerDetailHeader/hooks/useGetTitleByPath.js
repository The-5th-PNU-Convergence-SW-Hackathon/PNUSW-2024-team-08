import { useRouter } from "next/router";
import { useDelete } from "./useDelete";

export const useGetTitleByPath = (volunteerDetailData, meetingData) => {
  const router = useRouter();
  const pathname = router.pathname;

  const {
    handleClickDelete,
    handleWithdraw,
    isConfirmModalOpen,
    setIsConfirmModalOpen,
    isSuccessModalOpen,
    handleConfirmAction,
    handleCloseSuccessModal,
    id,
    noticeID,
    meetingID,
    msg,
    notice,
    successNotice,
    confirmButtonText,
    confirmMsg
  } = useDelete();

  const getTitleByPath = (pathname) => {
    if (pathname === `/volunteer/[id]`) {
      return {
        title: volunteerDetailData.name,
        canModify: true,
        editUrl: `/volunteer/${id}/edit`,
        meetingUrl:`/volunteer/${id}/regular_meetings`,
        memberUrl: `/volunteer/${id}/member`,
        noticeUrl: `/volunteer/${id}/notices`,
        withdrawFunction: () => handleWithdraw(),
        Message: msg,
        ConfirmMessage: confirmMsg
      };
    } else if (pathname === "/volunteer/[id]/edit") {
      return {
        title: "정보 수정",
        canModify: true,
        deleteFunction: () => handleClickDelete(),
        Message: msg,
        ConfirmMessage: confirmMsg
      }
    } else if(pathname === "/volunteer/[id]/member") {
      return{
        title: "회원 관리",
        canModify: false,
      }
    } else if (pathname === "/volunteer/[id]/notices/[noticeID]") {
      return {
        title: "공지사항",
        canModify: true,
        editUrl: `/volunteer/${id}/notices/${noticeID}/editNotice`,
        deleteFunction: () => handleClickDelete(),
        Message: msg,
        ConfirmMessage: confirmMsg
      };
    } else if (pathname === "/volunteer/[id]/notices") {
      return {
        title: "공지사항",
        canModify: false,
        //deleteMessage: "공지사항 목록을 삭제하시겠습니까?"
      };
    } else if (pathname === "/volunteer/[id]/regular_meetings") {
      return {
        title: "정기모임",
        canModify: false,
        //deleteMessage: "정기모임 목록을 삭제하시겠습니까?"
      };
    } else if (pathname === "/volunteer/[id]/regular_meetings/[meetingID]") {
      return {
        title: meetingData.name,
        canModify: true,
        editUrl: `/volunteer/${id}/regular_meetings/${meetingID}/editMeeting`,
        deleteFunction: () => handleClickDelete(),
        Message: msg,
        ConfirmMessage: confirmMsg
      };
    } else {
      return null
    }
  };

  const { title, canModify, editUrl, meetingUrl, noticeUrl, memberUrl, deleteFunction, withdrawFunction, Message, ConfirmMessage } = getTitleByPath(router.pathname);

  return {
    title,
    canModify,
    editUrl,
    meetingUrl,
    memberUrl,
    noticeUrl,
    deleteFunction,
    withdrawFunction,
    Message,
    notice,
    successNotice,
    confirmButtonText,
    ConfirmMessage,
    handleClickDelete,
    isConfirmModalOpen,
    setIsConfirmModalOpen,
    isSuccessModalOpen,
    handleConfirmAction, // 수정된 부분
    handleCloseSuccessModal,
    id,
    pathname
  }
}
