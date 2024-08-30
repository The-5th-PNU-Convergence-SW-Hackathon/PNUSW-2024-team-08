import Headers from "../../../commons/headers/Headers.container";
import DogsUI from "./Dogs.presenter";
import Navigation from "../../../commons/navigation/Navigation.container";
import { useNavigate } from "../../../../../src/components/commons/hooks/useNavigate";
import useRequireLogin from "../../../../../src/components/commons/hooks/useRequireLogin";

export default function Dogs({ isSSRLoggedIn, profileURL }) {
  const { navigateBack } = useNavigate();
  const handleRequireModal = useRequireLogin(isSSRLoggedIn);

  return (
    <>
      <Headers isSSRLoggedIn={isSSRLoggedIn} profileURL={profileURL} />
      <DogsUI navigateBack={navigateBack} />
      <Navigation handleRequireModal={handleRequireModal} />
    </>
  );
}
