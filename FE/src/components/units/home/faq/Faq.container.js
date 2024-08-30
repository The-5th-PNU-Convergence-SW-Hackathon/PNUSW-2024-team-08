import FaqUI from "./Faq.presenter";
import Headers from "../../../commons/headers/Headers.container";
import { useNavigate } from "../../../../../src/components/commons/hooks/useNavigate";

export default function Faq({ isSSRLoggedIn, profileURL }) {
  const { navigateTo, navigateBack } = useNavigate();

  return (
    <>
      <Headers isSSRLoggedIn={isSSRLoggedIn} profileURL={profileURL} />
      <FaqUI navigateTo={navigateTo} navigateBack={navigateBack} />
    </>
  );
}
