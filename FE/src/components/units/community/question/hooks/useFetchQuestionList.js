import { useEffect, useState } from "react";
import { fetchQuestionList } from "../CommunityQuestion.queries";

const example = {
  success: true,
  code: 200,
  message: "ok",
  result: {
    questions: [
      {
        id: 23,
        name: "이상명",
        title: "입양 절차에 대해 궁금한 게 있습니다!",
        content:
          "질문 내용을 상세하게 적어주세요. 동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리 나라 만세 질문 내용을 상세하게 적어주세요. 동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리 나라 만세",
        date: "2023-03-28T14:30",
        answerNum: 3,
      },
      {
        id: 24,
        name: "이상명",
        title: "입양 절차에 대해 궁금한 게 있습니다!",
        content:
          "질문 내용을 상세하게 적어주세요. 동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리 나라 만세",
        date: "2023-03-28T14:30",
        answerNum: 0,
      },
      {
        id: 25,
        name: "이상명",
        title: "입양 절차에 대해 궁금한 게 있습니다!",
        content:
          "질문 내용을 상세하게 적어주세요. 동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리 나라 만세",
        date: "2023-03-28T14:30",
        answerNum: 1,
      },
      {
        id: 26,
        name: "이상명",
        title: "입양 절차에 대해 궁금한 게 있습니다!",
        content:
          "질문 내용을 상세하게 적어주세요. 동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리 나라 만세",
        date: "2023-03-28T14:30",
        answerNum: 2,
      },
      {
        id: 27,
        name: "이상명",
        title: "입양 절차에 대해 궁금한 게 있습니다!",
        content:
          "질문 내용을 상세하게 적어주세요. 동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리 나라 만세",
        date: "2023-03-28T14:30",
        answerNum: 0,
      },
    ],
  },
};

export default function useFetchQuestionList() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const loadInitialQuestions = async () => {
        const page = getPageNumber();
        let initialQuestions = [];
        for (let i = 0; i <= page; i++) {
          const fetchedQuestions = await fetchQuestionList(i);
          if (fetchedQuestions) {
            initialQuestions = [...initialQuestions, ...fetchedQuestions];
          }
        }

        setQuestions(initialQuestions);
      };
      console.log(
        `QuestionPage = `,
        parseInt(sessionStorage.getItem(`QuestionPage`), 10)
      );

      setQuestions([]);
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
      const updatedQuestions = [...questions, ...fetchedQuestions];

      setQuestions(updatedQuestions);
      setPageNumber(page);
    }
  };

  const handleLoadQuestions = async () => {
    const page = getPageNumber() + 1;
    await loadQuestions(page);
  };

  return { questions, handleLoadQuestions };
}
