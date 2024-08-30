import { useEffect, useState } from "react";
import { fetchQuestionList } from "../CommunityQuestion.queries";

export default function useFetchQuestionList() {
  const [questions, setQuestions] = useState([]);
  const [isLastPage, setIsLastPage] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const loadInitialQuestions = async () => {
        const page = getPageNumber();
        setQuestions([]);
        for (let i = 0; i <= page; i++) {
          const fetchedQuestions = await fetchQuestionList(i);
          if (fetchedQuestions) {
            setQuestions((prevQuestions) => [
              ...prevQuestions,
              ...fetchedQuestions.questions,
            ]);
            setIsLastPage(fetchedQuestions.isLastPage);
          }
        }
      };

      loadInitialQuestions();
    }
  }, []);

  const getPageNumber = () => {
    if (typeof window !== "undefined") {
      const page = parseInt(sessionStorage.getItem(`QuestionPage`), 10);
      return isNaN(page) ? 0 : page;
    }
    return 0;
  };

  const setPageNumber = (page) => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem(`QuestionPage`, page.toString());
    }
  };

  const loadQuestions = async (page) => {
    const fetchedQuestions = await fetchQuestionList(page);
    if (fetchedQuestions) {
      setQuestions((prevQuestions) => [
        ...prevQuestions,
        ...fetchedQuestions.questions,
      ]);
      setIsLastPage(fetchedQuestions.isLastPage);
      setPageNumber(page);
    }
  };

  const handleLoadQuestions = async () => {
    const page = getPageNumber() + 1;
    await loadQuestions(page);
  };

  return { questions, isLastPage, handleLoadQuestions };
}
