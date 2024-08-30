import { useNavigate } from "../../../../../src/components/commons/hooks/useNavigate";
import Headers from "../../../commons/headers/Headers.container";
import Navigation from "../../../commons/navigation/Navigation.container";
import CommunityHandler from "../CommunityHandler.container";
import CommunityQuestionUI from "./CommunityQuestion.presenter";
import useFetchQuestionList from "./hooks/useFetchQuestionList";
import { useTruncateString } from "../../../../../src/components/commons/hooks/useTruncateString";
import useRequireLogin from "../../../../../src/components/commons/hooks/useRequireLogin";
import useSubIcons from "../../../../../src/components/commons/hooks/useSubIcons";
import { useFormatDateTime } from "../../../units/volunteer/hooks/useFormat";
import FloatingIconUI from "../floating_icon/FloatingIcon.presenter";
import usePaginationScroll from "../../../../../src/components/commons/hooks/usePaginationScroll";

export default function CommunityQuestion({ isSSRLoggedIn, profileURL }) {
  console.log("CommunityQuestion isSSRLoggedIn: ", isSSRLoggedIn);

  const { questions, isLastPage, handleLoadQuestions } = useFetchQuestionList();
  const { scrollRef, scrollLoading } = usePaginationScroll(
    handleLoadQuestions,
    isLastPage
  );
  const { isSubIconsVisible, handleMainIconClick } = useSubIcons();
  const { truncateString } = useTruncateString();
  const { navigateTo, navigateBack } = useNavigate();
  const handleRequireModal = useRequireLogin(isSSRLoggedIn);

  return (
    <>
      <Headers isSSRLoggedIn={isSSRLoggedIn} profileURL={profileURL} />
      <CommunityHandler />
      <CommunityQuestionUI
        questions={questions}
        handleLoadQuestions={handleLoadQuestions}
        handleRequireModal={handleRequireModal}
        useFormatDateTime={useFormatDateTime}
        truncateString={truncateString}
        navigateTo={navigateTo}
        navigateBack={navigateBack}
        scrollRef={scrollRef}
        scrollLoading={scrollLoading}
      />
      <Navigation handleRequireModal={handleRequireModal} />
      <FloatingIconUI
        type={"QUESTION"}
        isSubIconsVisible={isSubIconsVisible}
        handleMainIconClick={handleMainIconClick}
        handleRequireModal={handleRequireModal}
      />
    </>
  );
}
