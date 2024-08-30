import VolunteerDetailHeaderUI from "./VolunteerDetailHeader.presenter";
import { useGetTitleByPath } from "./hooks/useGetTitleByPath";
import { useClickOut } from "./hooks/useClickOut";
import useRequireLogin from "../../../commons/hooks/useRequireLogin";
import DeleteModal from "./modal/deleteModal";
import { useRouter } from "next/router";
import { useReport } from "./hooks/useReport";
import ReportModal from "../../../../../src/components/commons/reportModal/ReportModal.container";

export default function VolunteerDetailHeader({
  isSSRLoggedIn,
  volunteerDetailData,
  meetingData,
  userRole,
}) {
  const router = useRouter();

  const {
    title,
    canModify,
    editUrl,
    meetingUrl,
    noticeUrl,
    memberUrl,
    deleteFunction,
    withdrawFunction,
    Message,
    notice,
    successNotice,
    confirmButtonText,
    ConfirmMessage,
    handleClickDeleteOrWithdraw,
    isConfirmModalOpen,
    setIsConfirmModalOpen,
    isSuccessModalOpen,
    handleConfirmAction, // 수정된 부분
    handleCloseSuccessModal,
    id,
    pathname,
  } = useGetTitleByPath(volunteerDetailData, meetingData);

  const { wrapperRef, isMenuClicked, handleMenuClick } = useClickOut();

  const { showModal, handleClickReport, handleCloseModal } = useReport();

  const routerBack = () => {
    if (router.pathname == "/volunteer/[id]") {
      if(userRole == "visitor") {
        router.push("/volunteer/recommend")
      } else {
        router.push("/volunteer/joined");
      }
    } else if (
      router.pathname == "/volunteer/[id]/notices" ||
      router.pathname == "/volunteer/[id]/regular_meetings"
    ) {
      router.push(`/volunteer/${id}`);
    } else if (router.pathname === "/volunteer/[id]/notices/[noticeID]") {
      router.push(`/volunteer/${id}/notices`);
    } else if (
      router.pathname === "/volunteer/[id]/regular_meetings/[meetingID]"
    ) {
      router.push(`/volunteer/${id}/regular_meetings`);
    } else {
      router.back();
    }
  };

  const handleRequireModal = useRequireLogin(isSSRLoggedIn);

  return (
    <>
      <ReportModal isOpen={showModal} onClose={handleCloseModal} />
      <VolunteerDetailHeaderUI
        title={title}
        canModify={canModify}
        editUrl={editUrl}
        meetingUrl={meetingUrl}
        noticeUrl={noticeUrl}
        memberUrl={memberUrl}
        deleteFunction={deleteFunction}
        withdrawFunction={withdrawFunction}
        routerBack={routerBack}
        isMenuClicked={isMenuClicked}
        handleMenuClick={handleMenuClick}
        wrapperRef={wrapperRef}
        handleRequireModal={handleRequireModal}
        handleClickDeleteOrWithdraw={handleClickDeleteOrWithdraw}
        id={id}
        userRole={userRole}
        pathname={pathname}
        handleClickReport={handleClickReport}
      />
      <DeleteModal
        isOpen={isConfirmModalOpen}
        onClose={() => setIsConfirmModalOpen(false)}
        onConfirm={handleConfirmAction} // 단일 액션 함수로 변경
        showCancelButton={true} // 확인 모달에만 취소 버튼을 표시
        notice={notice}
        confirmButtonText={confirmButtonText}
      >
        {Message}
      </DeleteModal>
      <DeleteModal
        isOpen={isSuccessModalOpen}
        onClose={handleCloseSuccessModal}
        onConfirm={handleCloseSuccessModal} // 확인 버튼에 handleCloseSuccessModal 핸들러 연결
        showCancelButton={false} // 삭제 완료 모달에서는 취소 버튼을 제거
        notice={successNotice}
        confirmButtonText="확인"
      >
        {ConfirmMessage}
      </DeleteModal>
    </>
  );
}
