import { useNavigate } from "../../../commons/hooks/useNavigate";
import MyCommunityHandlerUI from "./MyCommunityHandler.presenter";

export default function MyCommunityHandler({ profileURL, myCommunityData }) {
  const paths = {
    mypost: "/community/mypost",
    mycomment: "/community/mycomment",
    myquestion: "/community/myquestion",
    myanswer: "/community/myanswer",
  };

  const { navigateTo, isActive, navigateBack } = useNavigate();

  return (
    <>
      <MyCommunityHandlerUI
        profileURL={profileURL}
        myCommunityData={myCommunityData}
        paths={paths}
        isActive={isActive}
        navigateTo={navigateTo}
        navigateBack={navigateBack}
      />
    </>
  );
}
