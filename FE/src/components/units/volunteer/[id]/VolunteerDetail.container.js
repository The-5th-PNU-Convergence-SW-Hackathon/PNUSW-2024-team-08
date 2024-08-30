import VolunteerDetailHeader from "../volunteerDetailHeader/VolunteerDetailHeader.container";
import VolunteerDetailUI from "./VolunteerDetail.presenter";
import Navigation from "../../../commons/navigation/Navigation.container";
import { useState } from "react";
import { useNoticeClick } from "./hooks/useNoticeClick";
import useFetchVolunteerDetail from "./hooks/useFetchVolunteerDetail";
import useModalStore from "../../../../store/useModalStore";
import JoinModal from "./modals/joinModal.presenter";
import { requestVolunteerJoin } from "./VolunteerDetail.quries";
import useRequireLogin from "../../../commons/hooks/useRequireLogin";
import AlarmModal from "../../../../../src/components/commons/alarmModal/AlarmModal.presenter";

export default function VolunteerDetail({
  isSSRLoggedIn,
  volunteerDetailData,
  profileURL,
  userRole
}) {
  console.log(`
      isSSRLogedIn: ${isSSRLoggedIn}
      volunteer Detail Data: ${volunteerDetailData}
      userRole: ${userRole}
    `);

  const handleRequireModal = useRequireLogin(isSSRLoggedIn);
  const { openModal } = useModalStore();
  const [showModal, setShowModal] = useState(false);

  const {
    show,
    message,
    navigateTo,
    clickedIndex,
    isJoinedClikced,
    handleAnnouncementClick,
    id,
  } = useNoticeClick(isSSRLoggedIn, userRole);

  const { volunteerDetailInfos, daysDifferences, latestNotices, latestMeetings } =
    useFetchVolunteerDetail(volunteerDetailData);

  const handleFavClick = () => {
    if (!isSSRLoggedIn) {
      openModal();
    } else if (isSSRLoggedIn) {
      setShowModal(true);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleConfirmModal = async (input) => {
    setShowModal(false);
    try {
      const data = await requestVolunteerJoin(id, input);
      if (data) {
        console.log("가입신청 완료");
      }
    } catch (error) {
      console.error("가입 요청 중 오류 발생:", error.message);

    }
  };

  return (
    <>
      <AlarmModal show={show} message={message} />
      <VolunteerDetailHeader
        isSSRLoggedIn={isSSRLoggedIn}
        volunteerDetailData={volunteerDetailData}
        userRole={userRole}
      />
      <VolunteerDetailUI
        navigateTo={navigateTo}
        volunteerDetailInfos={volunteerDetailInfos}
        latestNotices={latestNotices}
        latestMeetings={latestMeetings}
        daysDifferences={daysDifferences}
        clickedIndex={clickedIndex} //공지사항을 클릭한 인데스 값
        handleAnnouncementClick={handleAnnouncementClick} //공지사항을 클릭하였을 때 색 변환 기능
        isJoinedClikced={isJoinedClikced} //회원인지 멤버인지 클릭한 확인 값
        handleFavClick={handleFavClick}
        id={id}
        userRole={userRole}
      />
      <Navigation handleRequireModal={handleRequireModal} />
      <JoinModal
        showModal={showModal}
        handleClose={handleCloseModal}
        handleConfirm={handleConfirmModal}
        profileURL={profileURL}
      />
    </>
  );
}
