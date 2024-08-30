import { useEffect, useState } from "react";
import { fetchMyAnswer } from "../MyAnswer.queries";

export default function useFetchMyAnswer() {
  const [myAnswer, setMyAnswer] = useState([]);
  const [isLastPage, setIsLastPage] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const loadInitialMyAnswer = async () => {
        const page = getPageNumber();
        setMyAnswer([]);
        for (let i = 0; i <= page; i++) {
          const fetchedMyAnswer = await fetchMyAnswer(i);
          if (fetchedMyAnswer) {
            setMyAnswer((prevMyAnswer) => [
              ...prevMyAnswer,
              ...fetchedMyAnswer.questions,
            ]);
            setIsLastPage(fetchedMyAnswer.isLastPage);
          }
        }
      };

      loadInitialMyAnswer();
    }
  }, []);

  const getPageNumber = () => {
    if (typeof window !== "undefined") {
      const page = parseInt(sessionStorage.getItem(`myAnswerPage`), 10);
      return isNaN(page) ? 0 : page;
    }
    return 0;
  };

  const setPageNumber = (page) => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem(`myAnswerPage`, page.toString());
    }
  };

  const loadMyAnswer = async (page) => {
    const fetchedMyAnswer = await fetchMyAnswer(page);
    if (fetchedMyAnswer) {
      setMyAnswer((prevMyAnswer) => [
        ...prevMyAnswer,
        ...fetchedMyAnswer.questions,
      ]);
      setIsLastPage(fetchedMyAnswer.isLastPage);
      setPageNumber(page);
    }
  };

  const handleLoadMyAnswer = async () => {
    const page = getPageNumber() + 1;
    await loadMyAnswer(page);
  };

  return { myAnswer, isLastPage, handleLoadMyAnswer };
}
