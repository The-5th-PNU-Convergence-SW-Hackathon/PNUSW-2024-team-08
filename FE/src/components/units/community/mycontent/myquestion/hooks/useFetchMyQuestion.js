import { useEffect, useState } from "react";
import { fetchMyQuestion } from "../MyQuestion.queries";

export default function useFetchMyQuestion() {
  const [myQuestion, setMyQuestion] = useState([]);
  const [isLastPage, setIsLastPage] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const loadInitialMyQuestion = async () => {
        const page = getPageNumber();
        setMyQuestion([]);
        for (let i = 0; i <= page; i++) {
          const fetchedMyQuestion = await fetchMyQuestion(i);
          if (fetchedMyQuestion) {
            setMyQuestion((prevMyQuestion) => [
              ...prevMyQuestion,
              ...fetchedMyQuestion.questions,
            ]);
            setIsLastPage(fetchedMyQuestion.isLastPage);
          }
        }
      };

      loadInitialMyQuestion();
    }
  }, []);

  const getPageNumber = () => {
    if (typeof window !== "undefined") {
      const page = parseInt(sessionStorage.getItem(`myQuestionPage`), 10);
      return isNaN(page) ? 0 : page;
    }
    return 0;
  };

  const setPageNumber = (page) => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem(`myQuestionPage`, page.toString());
    }
  };

  const loadMyQuestion = async (page) => {
    const fetchedMyQuestion = await fetchMyQuestion(page);
    if (fetchedMyQuestion) {
      setMyQuestion((prevMyQuestion) => [
        ...prevMyQuestion,
        ...fetchedMyQuestion.questions,
      ]);
      setIsLastPage(fetchedMyQuestion.isLastPage);
      setPageNumber(page);
    }
  };

  const handleLoadMyQuestion = async () => {
    const page = getPageNumber() + 1;
    await loadMyQuestion(page);
  };

  return { myQuestion, isLastPage, handleLoadMyQuestion };
}
