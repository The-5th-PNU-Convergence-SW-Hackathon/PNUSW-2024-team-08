import Navigation from "../../../../../../src/components/commons/navigation/Navigation.container";
import { useNavigate } from "../../../../../../src/components/commons/hooks/useNavigate";
import MyCommunityHandler from "../MyCommunityHandler.container";
import MyQuestionUI from "./MyQuestion.presenter";
import useRequireLogin from "../../../../../../src/components/commons/hooks/useRequireLogin";
import { useTruncateString } from "../../../../../../src/components/commons/hooks/useTruncateString";
import useFetchMyQuestion from "./hooks/useFetchMyQuestion";
import { useFormatDateTime } from "../../../../units/volunteer/hooks/useFormat";
import usePaginationScroll from "../../../../../../src/components/commons/hooks/usePaginationScroll";

export default function MyQuestion({
  isSSRLoggedIn,
  profileURL,
  myCommunityData,
}) {
  const { myQuestion, isLastPage, handleLoadMyQuestion } = useFetchMyQuestion();
  const { scrollRef, scrollLoading } = usePaginationScroll(
    handleLoadMyQuestion,
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
      <MyQuestionUI
        myQuestion={myQuestion}
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
