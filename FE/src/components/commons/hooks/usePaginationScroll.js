import { useEffect, useRef, useState, useCallback } from "react";
import { debounce } from "lodash";

const usePaginationScroll = (fetchData, isLastPage, deps = []) => {
  const scrollRef = useRef(null);
  const [scrollLoading, setScrollLoading] = useState(false);

  const handleScroll = async () => {
    if (scrollRef.current && !scrollLoading && !isLastPage) {
      const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;

      // 바닥까지 남은 거리 계산
      const distanceFromBottom = scrollHeight - (scrollTop + clientHeight);

      // 스크롤이 바닥에 도달했을 때
      if (distanceFromBottom <= 50) {
        const previousScrollTop = scrollTop;

        setScrollLoading(true);

        // 딜레이 추가
        setTimeout(async () => {
          await fetchData();
          setScrollLoading(false);

          // 스크롤 위치 유지
          if (scrollRef.current) {
            const newScrollHeight = scrollRef.current.scrollHeight;

            // 이전 scrollTop을 그대로 유지하여 스크롤 위치를 유지
            scrollRef.current.scrollTop = previousScrollTop + 50;
          }
        }, 800);
      }
    }
  };

  // lodash의 debounce를 사용하여 디바운싱 처리
  const debouncedHandleScroll = useCallback(debounce(handleScroll, 200), [
    ...deps,
    scrollLoading,
    isLastPage,
  ]);

  useEffect(() => {
    const scrollElement = scrollRef.current;

    if (scrollElement) {
      scrollElement.addEventListener("scroll", debouncedHandleScroll);
      console.log("Added scroll event listener");

      return () => {
        scrollElement.removeEventListener("scroll", debouncedHandleScroll);
        console.log("Removed scroll event listener");
      };
    }
  }, [debouncedHandleScroll]);

  return { scrollRef, scrollLoading };
};

export default usePaginationScroll;
