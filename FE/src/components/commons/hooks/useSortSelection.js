import { useState } from "react";

export const useSortSelection = (setSort) => {
  // 각 메뉴 클릭 시 실행될 핸들러들
  const handleDateClick = () => setSort("date");
  const handleDogClick = () => setSort("dog");
  const handleCatClick = () => setSort("cat");
  const handleOtherClick = () => setSort("other");

  const handleNewestClick = () => setSort("createdDate");
  const handlePopularityClick = () => setSort("likeNum");

  return {
    handleDateClick,
    handleDogClick,
    handleCatClick,
    handleOtherClick,
    handleNewestClick,
    handlePopularityClick,
  };
};
