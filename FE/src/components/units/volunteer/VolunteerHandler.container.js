import VolunteerHandlerUI from "./VolunteerHandler.presenter"
import { useNavigate } from "../../commons/hooks/useNavigate";

export default function VolunteerHandler({ handleRequireModal }) {
  const { navigateTo, isActive } = useNavigate();
  console.log(typeof handleFavClick);

  const paths = {
    recommend: "/volunteer/recommend",
    region: "/volunteer/region",
    joined: "/volunteer/joined",
  };

  return (
    <>
      <VolunteerHandlerUI
        handleRequireModal={handleRequireModal}
        isActive={isActive}
        navigateTo={navigateTo}
        paths={paths}
      />
    </>
  );
}
