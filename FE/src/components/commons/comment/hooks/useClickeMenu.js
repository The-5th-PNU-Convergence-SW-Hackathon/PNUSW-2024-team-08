import { useEffect, useState } from "react";

export const useClickMenu = () => {
  // 현재 열린 메뉴의 ID를 저장 (commentId-replyId 형식)
  const [openMenuId, setOpenMenuId] = useState(null);
  const [isMatch, setIsMatch] = useState(false);

  // 메뉴를 열고 닫는 함수
  const handleMenu = (commentId, commentNickname, profileNickname, replyId = null) => {
    const key = replyId ? `${commentId}-${replyId}` : `${commentId}`;
    // 동일한 키가 클릭되면 메뉴를 닫고, 다른 키가 클릭되면 해당 메뉴 열기
    setOpenMenuId((prevId) => (prevId === key ? null : key));
    setIsMatch(commentNickname === profileNickname); // 닉네임 일치 여부 설정
  };

  // 외부 클릭을 감지하여 메뉴를 닫는 함수
  const handleClickOutside = (event) => {
    if (event.target.closest(".menu-button") === null) {
      setOpenMenuId(null); // 메뉴를 닫음
    }
  };

  useEffect(() => {
    // 전역 클릭 이벤트 리스너 추가
    document.addEventListener("click", handleClickOutside);

    // 컴포넌트 언마운트 시 리스너 제거
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return {
    openMenuId,
    isMatch,
    handleMenu
  }
}