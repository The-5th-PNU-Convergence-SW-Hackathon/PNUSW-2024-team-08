import NoticesUI from "./Notices.presenter";
import VolunteerDetailHeader from "../volunteerDetailHeader/VolunteerDetailHeader.container";
import Navigation from "../../../commons/navigation/Navigation.container";
import { useSearch } from "../hooks/useSearch";
import useFetchNotices from "./hooks/useFetchNotices";
import { useNavigate } from "../../../../../src/components/commons/hooks/useNavigate";
import { useNoticeClick } from "../[id]/hooks/useNoticeClick";
import { useMemo } from 'react';
import AlarmModal from "../../../../../src/components/commons/alarmModal/AlarmModal.presenter";
import usePaginationScroll from "../../../../../src/components/commons/hooks/usePaginationScroll";

export default function Announcements({ isSSRLoggedIn, userRole }) {

  const { navigateTo } = useNavigate();

  const {
    search,
    handleSearch
  } = useSearch();

  const {
    clickedIndex,
    handleAnnouncementClick
  } = useNoticeClick();

  const {
    noticesInfos,
    loadMoreNotices,
    hasMore,
    id,
    isLoading,
    showModal,
    modalMessage
  } = useFetchNotices();

  const { scrollRef, scrollLoading } = usePaginationScroll(loadMoreNotices, !hasMore);

  const filteredNoticesInfos = useMemo(() => {
    if (!search) return noticesInfos;
    return noticesInfos.filter(notice =>
      notice.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [noticesInfos, search]);

  return (
    <>
      <AlarmModal show={showModal} message={modalMessage} />
      <VolunteerDetailHeader isSSRLoggedIn={isSSRLoggedIn} />
      <NoticesUI
        navigateTo={navigateTo}
        noticesInfos={filteredNoticesInfos}
        hasMore={hasMore}
        loadMoreNotices={loadMoreNotices}
        clickedIndex={clickedIndex}
        handleAnnouncementClick={handleAnnouncementClick}
        id={id}
        userRole={userRole}
        isLoading={isLoading}
        search={search}
        handleSearch={handleSearch}
        scrollRef={scrollRef}
        scrollLoading={scrollLoading}
      />
      <Navigation />
    </>
  );
}
