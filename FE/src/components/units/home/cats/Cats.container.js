import Headers from "../../../commons/headers/Headers.container";
import CatsUI from "./Cats.presenter";
import Navigation from "../../../commons/navigation/Navigation.container";
import { useNavigate } from "../../../../../src/components/commons/hooks/useNavigate";
import useRequireLogin from "../../../../../src/components/commons/hooks/useRequireLogin";

export default function Cats({ isSSRLoggedIn, profileURL }) {
  const { navigateBack } = useNavigate();
  const handleRequireModal = useRequireLogin(isSSRLoggedIn);

  return (
    <>
      <Headers isSSRLoggedIn={isSSRLoggedIn} profileURL={profileURL} />
      <CatsUI navigateBack={navigateBack} />
      <Navigation handleRequireModal={handleRequireModal} />
    </>
  );
}
