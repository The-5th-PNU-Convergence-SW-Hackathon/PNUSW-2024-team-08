import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export const useNoticeClick = (isSSRLoggedIn, userRole) => {
  const router = useRouter();
  const [clickedIndex, setClickedIndex] = useState(-1);
  const [isJoinedClikced, setIsJoinedClicked] = useState(false);
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("");
  
  const { id } = router.query;
  let timeoutId = null;

  const navigateTo = (path) => () => {
    if (userRole === "visitor") {
      setIsJoinedClicked(true);
      setShow(true);
      setTimeout(() => setShow(false), 1400);
      setMessage("가입 멤버만 확인할 수 있습니다.")
    } else {
      router.push(path);
    }
  };

  const handleAnnouncementClick = (index) => {
    if (userRole !== "visitor") {
      setClickedIndex(index === clickedIndex ? -1 : index);

      timeoutId = setTimeout(() => {
        setClickedIndex(-1);
      }, 2000);
    }
  };

  useEffect(() => {
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  return {
    show,
    message,
    navigateTo,
    clickedIndex,
    isJoinedClikced,
    handleAnnouncementClick,
    id,
  };
};
