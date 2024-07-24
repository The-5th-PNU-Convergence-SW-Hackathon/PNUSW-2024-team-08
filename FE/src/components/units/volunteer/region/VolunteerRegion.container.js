import Headers from "../../../commons/headers/Headers.container";
import Navigation from "../../../commons/navigation/Navigation.container";
import VolunteerHandler from "../VolunteerHandler.container";
import VolunteerRegionUI from "./VolunteerRegion.presenter";
import useFetchVolunteerNewGrouop from "./hooks/useFetchVolunteerNewGroup";
import useFetchVolunteerRegion from "./hooks/useFetchVolunteerRegion";
import { useNavigate } from "../../../commons/hooks/useNavigate";
import { findProvinceKo, findDistrictKo } from "../../../commons/district/districtName";
import useRequireLogin from "../../../../../src/components/commons/hooks/useRequireLogin";
import useModalStore from "../../../../store/useModalStore";

export default function VolunteerRegion({ isSSRLoggedIn }) {
  console.log("volunteer region isSSRLoggedIn : ", isSSRLoggedIn);
  const { openModal } = useModalStore();

  const { navigateTo } = useNavigate();

  const { volunteerNewGroupInfos, loadUpdatedVolunteerNewGroupData } =
    useFetchVolunteerNewGrouop(isSSRLoggedIn);

  const { volunteerRegionInfos, loadUpdatedVolunteerRegionData, handleToggleLike } =
    useFetchVolunteerRegion(isSSRLoggedIn);

  const handleRequireModal = useRequireLogin(isSSRLoggedIn);

  const handleToggleClick = (volunteerId) => {
    if (!isSSRLoggedIn) {
      openModal();
    } else {
      handleToggleLike(volunteerId);
    }
  }

  return (
    <>
      <Headers isSSRLoggedIn={isSSRLoggedIn} />
      <VolunteerHandler handleRequireModal={handleRequireModal} />
      <VolunteerRegionUI
        navigateTo={navigateTo}
        volunteerNewGroupInfos={volunteerNewGroupInfos}
        loadUpdatedVolunteerNewGroupData={loadUpdatedVolunteerNewGroupData}
        volunteerRegionInfos={volunteerRegionInfos}
        loadUpdatedVolunteerRegionData={loadUpdatedVolunteerRegionData}
        findProvinceKo={findProvinceKo}
        findDistrictKo={findDistrictKo}
        handleToggleClick={handleToggleClick}
      />
      <Navigation handleRequireModal={handleRequireModal} />
    </>
  );
}
