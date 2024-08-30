import { useCallback } from "react";

// 훅 정의
export default function useItemGrouping() {
  // 그룹화 함수
  const groupItemsByDate = useCallback((items) => {
    return items.reduce((acc, item) => {
      const date = item.date.split("T")[0]; // 'T'를 기준으로 날짜 부분만 추출
      if (!acc[date]) {
        acc[date] = [];
      }
      acc[date].push(item);
      return acc;
    }, {});
  }, []);

  // 병합 함수
  const mergeItems = useCallback(
    (prevItems, newItems) => {
      const allItems = [...prevItems, ...newItems];
      return groupItemsByDate(allItems);
    },
    [groupItemsByDate]
  );

  return {
    groupItemsByDate,
    mergeItems,
  };
}
