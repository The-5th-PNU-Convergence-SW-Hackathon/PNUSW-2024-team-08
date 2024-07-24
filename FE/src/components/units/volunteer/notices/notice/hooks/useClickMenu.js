import { useRef, useState, useEffect } from "react";

export const useClickMenu = () => {
  const [isCommentMenuClicked, setIsCommentMenuClicked] = useState(false);
  const [clickedCommentID, setClickedCommentID] = useState(null); // 클릭된 댓글의 ID를 관리합니다.
  const [isReplyMenuClicked, setIsReplyMenuClicked] = useState(false);
  const [clickedReplyID, setClickedReplyID] = useState(null); // 클릭된 답글의 ID를 관리한다.
  const wrapperRef = useRef(null);

  // 코멘트 메뉴 클릭 시 보이게끔 true로 설정
  const handleMenuClick = (commentID, replyID) => {
    if (replyID == null) {
      setIsCommentMenuClicked(true);
      setIsReplyMenuClicked(false);
      setClickedCommentID(commentID); // 클릭된 댓글의 ID를 설정합니다.
    } else {
      setIsCommentMenuClicked(false);
      setIsReplyMenuClicked(true);
      setClickedCommentID(commentID);
      setClickedReplyID(replyID);
    }
  };

  useEffect(() => {
    // 외부 클릭을 감지하는 함수
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        // 메뉴창 닫기
        setIsCommentMenuClicked(false);
        setIsReplyMenuClicked(false);
      }
    }

    // 이벤트 리스너 등록
    document.addEventListener("mousedown", handleClickOutside);

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return {
    isCommentMenuClicked,
    setIsCommentMenuClicked,
    clickedCommentID,
    setClickedCommentID,
    isReplyMenuClicked,
    setIsReplyMenuClicked,
    clickedReplyID,
    wrapperRef,
    handleMenuClick,
  };
};
