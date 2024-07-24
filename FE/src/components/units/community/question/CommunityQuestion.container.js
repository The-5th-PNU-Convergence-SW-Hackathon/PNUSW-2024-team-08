import { useNavigate } from "../../../../../src/components/commons/hooks/useNavigate";
import Headers from "../../../commons/headers/Headers.container";
import Navigation from "../../../commons/navigation/Navigation.container";
import CommunityHandler from "../CommunityHandler.container";
import CommunityQuestionUI from "./CommunityQuestion.presenter";
import useFetchQuestionList from "./hooks/useFetchQuestionList";
import { useTruncateString } from "../../../../../src/components/commons/hooks/useTruncateString";
import useRequireLogin from "../../../../../src/components/commons/hooks/useRequireLogin";

export default function CommunityQuestion({ isSSRLoggedIn }) {
  const { questions, handleLoadQuestions } = useFetchQuestionList();
  const { truncateString } = useTruncateString();
  const { navigateTo } = useNavigate();
  const handleRequireModal = useRequireLogin(isSSRLoggedIn);

  return (
    <>
      <Headers isSSRLoggedIn={isSSRLoggedIn} />
      <CommunityHandler />
      <CommunityQuestionUI
        questions={questions}
        handleLoadQuestions={handleLoadQuestions}
        truncateString={truncateString}
        navigateTo={navigateTo}
        handleRequireModal={handleRequireModal}
      />
      <Navigation handleRequireModal={handleRequireModal} />
    </>
  );
}
