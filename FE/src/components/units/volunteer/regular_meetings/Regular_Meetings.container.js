import RegularMeetingsUI from "./Regular_Meetings.presenter";
import VolunteerDetailHeader from "../volunteerDetailHeader/VolunteerDetailHeader.container";
import Navigation from "../../../commons/navigation/Navigation.container";
import useFetchRegularMeetings from "./hooks/useFetchRegularMeetings";
import { useNavigate } from "../../../../../src/components/commons/hooks/useNavigate";
import { useSearch } from "../hooks/useSearch";
import { useMemo } from 'react';
import AlarmModal from "../../../../../src/components/commons/alarmModal/AlarmModal.presenter";
import usePaginationScroll from "../../../../../src/components/commons/hooks/usePaginationScroll";

export default function RegularMeetings({
  isSSRLoggedIn,
  volunteerDetailData,
  userRole
}) {

  const {
    search,
    handleSearch
  } = useSearch();

  const { navigateTo } = useNavigate()

  const {
    regularMeetingsInfos,
    loadMoreMeetings,
    daysDifferences,
    hasMore,
    id,
    isLoading,
    showModal,
    modalMessage
  } = useFetchRegularMeetings();

  const { scrollRef, scrollLoading } = usePaginationScroll(loadMoreMeetings, !hasMore);

  //검색어에 따른 정규모임들 표시
  const filteredRegularMeetings = useMemo(() => {
    if (!search) return regularMeetingsInfos;
    return regularMeetingsInfos.filter(meeting =>
      meeting.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [regularMeetingsInfos, search]);

  const filteredDaysDifferences = useMemo(() => {
    if (!search) return daysDifferences;
    return daysDifferences.filter((_, index) =>
      regularMeetingsInfos[index].name.toLowerCase().includes(search.toLowerCase())
    );
  }, [daysDifferences, regularMeetingsInfos, search]);

  return (
    <>
      <AlarmModal show={showModal} message={modalMessage} />
      <VolunteerDetailHeader isSSRLoggedIn={isSSRLoggedIn} volunteerDetailData={volunteerDetailData} userRole={userRole} />
      <RegularMeetingsUI
        navigateTo={navigateTo}
        search={search}
        handleSearch={handleSearch}
        regularMeetingsInfos={filteredRegularMeetings}
        daysDifferences={filteredDaysDifferences}
        hasMore={hasMore}
        id={id}
        userRole={userRole}
        isLoading={isLoading}
        scrollRef={scrollRef}
        scrollLoading={scrollLoading}
      />
      <Navigation />
    </>
  );
}
