import { useNavigate } from "../../../../../../src/components/commons/hooks/useNavigate";
import Headers from "../../../../commons/headers/Headers.container";
import Navigation from "../../../../commons/navigation/Navigation.container";
import { useRouter } from "next/router";
import QuestionDetailUI from "./QuestionDetail.presenter";
import useRequireLogin from "../../../../../../src/components/commons/hooks/useRequireLogin";
import { useState } from "react";

export default function QuestionDetail({ isSSRLoggedIn, questionDetailData }) {
  console.log("QuestionDetail isSSRLoggedIn: ", isSSRLoggedIn);

  console.log(questionDetailData);

  const [questionDetail, setQuestionDetail] = useState(questionDetailData);
  const router = useRouter();
  const { id } = router.query;
  console.log(id);
  const { navigateTo, navigateBack } = useNavigate();
  const handleRequireModal = useRequireLogin(isSSRLoggedIn);

  return (
    <>
      <Headers isSSRLoggedIn={isSSRLoggedIn} />
      <QuestionDetailUI
        questionDetail={questionDetail}
        id={id}
        navigateTo={navigateTo}
        navigateBack={navigateBack}
      />
      <Navigation handleRequireModal={handleRequireModal} />
    </>
  );
}
