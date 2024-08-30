import { useEffect, useState } from "react";

const useScrollToTop = (scrollRef, threshold) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollTop } = scrollRef.current;
      setShowScrollTop(scrollTop > threshold);
    }
  };

  const scrollToTop = () => {
    if (scrollRef.current) {
      setTimeout(() => {
        scrollRef.current.scrollTo({ top: 0, behavior: "smooth" });
      }, 500); // 약간의 지연을 주어 콘텐츠 로드가 끝난 후 상단으로 이동
    }
  };

  useEffect(() => {
    const scrollElement = scrollRef.current;

    if (scrollElement) {
      scrollElement.addEventListener("scroll", handleScroll);

      return () => {
        scrollElement.removeEventListener("scroll", handleScroll);
      };
    }
  }, [scrollRef]);

  return { showScrollTop, scrollToTop };
};

export default useScrollToTop;
