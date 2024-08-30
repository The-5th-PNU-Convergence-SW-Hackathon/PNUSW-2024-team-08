import { useEffect, useState } from "react";
import { fetchMyPost } from "../MyPost.queries";

export default function useFetchMyPost() {
  const [myPost, setMyPost] = useState([]);
  const [isLastPage, setIsLastPage] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const loadInitialMyPost = async () => {
        const page = getPageNumber();
        setMyPost([]);
        for (let i = 0; i <= page; i++) {
          const fetchedMyPost = await fetchMyPost(i);
          if (fetchedMyPost) {
            setMyPost((prevMyPost) => [...prevMyPost, ...fetchedMyPost.posts]);
            setIsLastPage(fetchedMyPost.isLastPage);
          }
        }
      };

      loadInitialMyPost();
    }
  }, []);

  const getPageNumber = () => {
    if (typeof window !== "undefined") {
      const page = parseInt(sessionStorage.getItem(`myPostPage`), 10);
      return isNaN(page) ? 0 : page;
    }
    return 0;
  };

  const setPageNumber = (page) => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem(`myPostPage`, page.toString());
    }
  };

  const loadMyPost = async (page) => {
    const fetchedMyPost = await fetchMyPost(page);
    if (fetchedMyPost) {
      setMyPost((prevMyPost) => [...prevMyPost, ...fetchedMyPost.posts]);
      setIsLastPage(fetchedMyPost.isLastPage);
      setPageNumber(page);
    }
  };

  const handleLoadMyPost = async () => {
    const page = getPageNumber() + 1;
    await loadMyPost(page);
  };

  return { myPost, isLastPage, handleLoadMyPost };
}
