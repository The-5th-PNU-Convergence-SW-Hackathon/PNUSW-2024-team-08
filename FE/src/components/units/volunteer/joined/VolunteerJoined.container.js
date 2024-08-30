import Headers from "../../../commons/headers/Headers.container";
import Navigation from "../../../commons/navigation/Navigation.container";
import VolunteerHandler from "../VolunteerHandler.container";
import VolunteerJoinedUI from "./VolunteerJoined.presenter";
import useFetchVolunteerJoined from "./hooks/useFetchVolunteerJoined";
import { findProvinceKo, findDistrictKo } from "../../../commons/district/districtName";
import useRequireLogin from "../../../commons/hooks/useRequireLogin";
import { useNavigate } from "../../../commons/hooks/useNavigate";
import AlarmModal from "../../../../../src/components/commons/alarmModal/AlarmModal.presenter";
import usePaginationScroll from "../../../../../src/components/commons/hooks/usePaginationScroll";

export default function VolunteerJoined({ isSSRLoggedIn, profileURL, joinVolunteerData}) {
  const { navigateTo } = useNavigate();
  const handleRequireModal = useRequireLogin(isSSRLoggedIn);

  console.log(joinVolunteerData);

  const {
    hasMore,
    showModal,
    modalMessage,
    page,
    volunteerJoinedInfos,
    loadUpdatedVolunteerJoinedData,
    handleToggleLike,
  } = useFetchVolunteerJoined(joinVolunteerData);

  const { scrollRef, scrollLoading } = usePaginationScroll(loadUpdatedVolunteerJoinedData, !hasMore);

  const handleToggleClick = (volunteerId) => {
    if (!isSSRLoggedIn) {
      openModal();
    } else {
      handleToggleLike(volunteerId);
    }
  }
  

  return (
    <>
      <AlarmModal show={showModal} message={modalMessage} />
      <Headers isSSRLoggedIn={isSSRLoggedIn} profileURL={profileURL} />
      <VolunteerHandler handleRequireModal={handleRequireModal} />
      <VolunteerJoinedUI
        page={page}
        navigateTo={navigateTo}
        volunteerJoinedInfos={volunteerJoinedInfos}
        loadUpdatedVolunteerJoinedData={loadUpdatedVolunteerJoinedData}
        findProvinceKo={findProvinceKo}
        findDistrictKo={findDistrictKo}
        handleToggleClick={handleToggleClick}
        hasMore={hasMore}
        scrollRef={scrollRef}
        scrollLoading={scrollLoading}
        showModal={showModal}
      />
      <Navigation handleRequireModal={handleRequireModal} />
    </>
  );
}
