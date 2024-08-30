import { useRouter } from "next/router";
import { useState } from "react";
import {
  submitAnswerDelete,
  submitQuestionDelete,
} from "../QuestionDetail.queries";

export function useQNADelete() {
  const router = useRouter();
  const [questionDeleteResult, setQuestionDeleteResult] = useState(false);
  const [answerDeleteResult, setAnswerDeleteResult] = useState(false);

  const questionModalText = {
    text: "질문을 삭제하였습니다.",
    subText: "확인을 누르면 궁금해요 페이지로 이동합니다.",
    confirmText: "확인",
  };

  const answerModalText = {
    text: "답변을 삭제하였습니다.",
    subText: "확인을 누르면 질문 상세페이지로 이동합니다.",
    confirmText: "확인",
  };

  const handleQuestionDelete = async (id) => {
    console.log("id: ", id);
    const result = await submitQuestionDelete(id);
    if (result) {
      setQuestionDeleteResult(true);
    }
  };

  const handleAnswerDelete = async (id) => {
    console.log("id: ", id);
    const result = await submitAnswerDelete(id);
    if (result) {
      setAnswerDeleteResult(true);
    }
  };

  const handleQuestionDeleteResult = () => {
    router.push(`/community/question`);
  };

  const handleAnswerDeleteResult = () => {
    router.reload();
  };

  return {
    questionDeleteResult,
    answerDeleteResult,
    handleQuestionDelete,
    handleAnswerDelete,
    handleQuestionDeleteResult,
    handleAnswerDeleteResult,
    questionModalText,
    answerModalText,
  };
}
