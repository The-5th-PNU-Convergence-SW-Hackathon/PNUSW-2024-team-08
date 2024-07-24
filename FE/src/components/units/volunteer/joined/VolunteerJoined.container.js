import Headers from "../../../commons/headers/Headers.container";
import Navigation from "../../../commons/navigation/Navigation.container";
import VolunteerHandler from "../VolunteerHandler.container";
import VolunteerJoinedUI from "./VolunteerJoined.presenter";
import useFetchVolunteerJoined from "./hooks/useFetchVolunteerJoined";
import { findProvinceKo, findDistrictKo } from "../../../commons/district/districtName";
import useRequireLogin from "../../../commons/hooks/useRequireLogin";
import { useRouter } from "next/router";
import useModalStore from "../../../../store/useModalStore";

export default function VolunteerJoined({ isSSRLoggedIn }) {
  const router = useRouter();
  console.log("volunteer joined isSSRLoggedIn: ", isSSRLoggedIn);

  const navigateTo = (path) => () => {
    router.push({
      pathname: path,
      query: {
        name: "member",
      },
    });
  };

  const handleToggleClick = (volunteerId) => {
    if (!isSSRLoggedIn) {
      openModal();
    } else {
      handleToggleLike(volunteerId);
    }
  }

  const { volunteerJoinedInfos, loadUpdatedVolunteerJoinedData, handleToggleLike } = useFetchVolunteerJoined(isSSRLoggedIn);
  const handleRequireModal = useRequireLogin(isSSRLoggedIn);

  return (
    <>
      <Headers isSSRLoggedIn={isSSRLoggedIn} />
      <VolunteerHandler handleRequireModal={handleRequireModal} />
      <VolunteerJoinedUI
        navigateTo={navigateTo}
        volunteerJoinedInfos={volunteerJoinedInfos}
        loadUpdatedVolunteerJoinedData={loadUpdatedVolunteerJoinedData}
        findProvinceKo={findProvinceKo}
        findDistrictKo={findDistrictKo}
        handleToggleClick={handleToggleClick}
      />
      <Navigation handleRequireModal={handleRequireModal}/>
    </>
  );
}
