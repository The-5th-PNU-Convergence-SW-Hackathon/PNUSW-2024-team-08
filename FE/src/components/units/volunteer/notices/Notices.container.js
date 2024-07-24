import NoticesUI from "./Notices.presenter";
import VolunteerDetailHeader from "../detail/volunteerDetailHeader/VolunteerDetailHeader.container";
import Navigation from "../../../commons/navigation/Navigation.container";
import { useNoticeClick } from "../detail/hooks/useNoticeClick";
import useFetchNotices from "./hooks/useFetchNotices";

export default function Announcements() {
  //라우팅설정 및 클릭기능
  const { navigateTo, clickedIndex, handleAnnouncementClick, status } =
    useNoticeClick();

  //공지사항, 정규모임, 멤버 등의 정보를 fetch해 오는 기능
  const { noticesInfos } = useFetchNotices();

  return (
    <>
      <VolunteerDetailHeader />
      <NoticesUI
        navigateTo={navigateTo}
        noticesInfos={noticesInfos}
        clickedIndex={clickedIndex}
        handleAnnouncementClick={handleAnnouncementClick}
        status={status}
      />
      <Navigation />
    </>
  );
}
