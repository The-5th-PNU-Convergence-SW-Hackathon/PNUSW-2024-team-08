import { useEffect, useState, useRef } from "react";

export const useClickOut = () => {
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const wrapperRef = useRef(null);

  //매뉴를 눌렀을 때 메뉴창이 나오도록 하는 기능 (헤더 컴포넌트에 넘겨줄값이다.)
  const handleMenuClick = () => {
    setIsMenuClicked(!isMenuClicked);
  };

  useEffect(() => {
    // 외부 클릭을 감지하는 함수
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        // 메뉴창 닫기
        setIsMenuClicked(false);
      }
    }

    // 이벤트 리스너 등록
    document.addEventListener("mousedown", handleClickOutside);

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []); // 빈 배열을 넘겨 컴포넌트 마운트 시에만 실행되도록 함
  return {
    wrapperRef,
    isMenuClicked,
    handleMenuClick
  }
}