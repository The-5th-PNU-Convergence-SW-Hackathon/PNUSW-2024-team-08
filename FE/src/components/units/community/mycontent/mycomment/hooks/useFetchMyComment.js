import { useEffect, useState } from "react";
import { fetchMyComment } from "../MyComment.queries";

export default function useFetchMyComment() {
  const [myComment, setMyComment] = useState([]);
  const [isLastPage, setIsLastPage] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const loadInitialMyComment = async () => {
        const page = getPageNumber();
        console.log("myCommentPage: ", page);
        setMyComment([]);
        for (let i = 0; i <= page; i++) {
          const fetchedMyComment = await fetchMyComment(i);
          if (fetchedMyComment) {
            setMyComment((prevMyComment) => [
              ...prevMyComment,
              ...fetchedMyComment.comments,
            ]);
            setIsLastPage(fetchedMyComment.isLastPage);
          }
        }
      };

      loadInitialMyComment();
    }
  }, []);

  const getPageNumber = () => {
    if (typeof window !== "undefined") {
      const page = parseInt(sessionStorage.getItem(`myCommentPage`), 10);
      return isNaN(page) ? 0 : page;
    }
    return 0;
  };

  const setPageNumber = (page) => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem(`myCommentPage`, page.toString());
    }
  };

  const loadMyComment = async (page) => {
    const fetchedMyComment = await fetchMyComment(page);
    if (fetchedMyComment) {
      setMyComment((prevMyComment) => [
        ...prevMyComment,
        ...fetchedMyComment.comments,
      ]);
      setIsLastPage(fetchedMyComment.isLastPage);
      setPageNumber(page);
    }
  };

  const handleLoadMyComment = async () => {
    const page = getPageNumber() + 1;
    await loadMyComment(page);
  };

  return { myComment, isLastPage, handleLoadMyComment };
}
