import CommunityHandlerUI from "./CommunityHandler.presenter";
import { useNavigate } from "../../commons/hooks/useNavigate";

export default function CommunityHandler() {
  const { navigateTo, isActive } = useNavigate();

  const paths = {
    adoption: "/community/adoption",
    fostering: "/community/fostering",
    question: "/community/question",
  };

  return (
    <>
      <CommunityHandlerUI
        isActive={isActive}
        navigateTo={navigateTo}
        paths={paths}
      />
    </>
  );
}
