import Headers from "../../../commons/headers/Headers.container";
import Navigation from "../../../commons/navigation/Navigation.container";
import VolunteerHandler from "../VolunteerHandler.container";
import VolunteerRecommendUI from "./VolunteerRecommend.presenter";
import useFetchVolunteerRecommend from "./hooks/useFetchVolunteerRecommend";
import { findProvinceKo, findDistrictKo } from "../../../commons/district/districtName";
import { useNavigate } from "../../../commons/hooks/useNavigate";
import useRequireLogin from "../../../../../src/components/commons/hooks/useRequireLogin";
import useModalStore from "../../../../store/useModalStore";

export default function VolunteerRecommend({ isSSRLoggedIn }) {
  console.log("volunteer recommend isSSRLoggedIn: ", isSSRLoggedIn);

  const { openModal } = useModalStore()
  const { navigateTo } = useNavigate();

  const { volunteerRecommendInfos, handleToggleLike } = useFetchVolunteerRecommend();
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
      <Headers isSSRLoggedIn={isSSRLoggedIn}/>
      <VolunteerHandler handleRequireModal={handleRequireModal} />
      <VolunteerRecommendUI
        navigateTo={navigateTo}
        volunteerRecommendInfos={volunteerRecommendInfos}
        findProvinceKo={findProvinceKo}
        findDistrictKo={findDistrictKo}
        handleToggleClick={handleToggleClick}
      />
      <Navigation handleRequireModal={handleRequireModal} />
    </>
  );
}
