import Navigation from "../../../../../../src/components/commons/navigation/Navigation.container";
import { useNavigate } from "../../../../../../src/components/commons/hooks/useNavigate";
import MyCommunityHandler from "../MyCommunityHandler.container";
import MyAnswerUI from "./MyAnswer.presenter";
import { useTruncateString } from "../../../../../../src/components/commons/hooks/useTruncateString";
import useRequireLogin from "../../../../../../src/components/commons/hooks/useRequireLogin";
import useFetchMyAnswer from "./hooks/useFetchMyAnswer";
import { useFormatDateTime } from "../../../../units/volunteer/hooks/useFormat";
import usePaginationScroll from "../../../../../../src/components/commons/hooks/usePaginationScroll";

export default function MyAnswer({
  isSSRLoggedIn,
  profileURL,
  myCommunityData,
}) {
  const { myAnswer, isLastPage, handleLoadMyAnswer } = useFetchMyAnswer();
  const { scrollRef, scrollLoading } = usePaginationScroll(
    handleLoadMyAnswer,
    isLastPage
  );
  const handleRequireModal = useRequireLogin(isSSRLoggedIn);
  const { truncateString } = useTruncateString();
  const { navigateTo } = useNavigate();

  return (
    <>
      <MyCommunityHandler
        profileURL={profileURL}
        myCommunityData={myCommunityData}
      />
      <MyAnswerUI
        myAnswer={myAnswer}
        truncateString={truncateString}
        useFormatDateTime={useFormatDateTime}
        handleRequireModal={handleRequireModal}
        scrollRef={scrollRef}
        scrollLoading={scrollLoading}
      />
      <Navigation handleRequireModal={handleRequireModal} />
    </>
  );
}
