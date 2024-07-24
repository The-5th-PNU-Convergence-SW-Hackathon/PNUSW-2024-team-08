import { useEffect, useRef, useState } from "react";

const useScrollToBottom = (dependencies) => {
  const scrollRef = useRef(null);
  const [initialRender, setInitialRender] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setInitialRender(false);
      scrollToBottom();
    }, 0); // 0ms의 지연을 추가합니다.
  }, []);

  useEffect(() => {
    if (!initialRender) {
      scrollToBottom();
    }
  }, [dependencies]);

  const scrollToBottom = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  };

  return { scrollRef, initialRender };
};

export default useScrollToBottom;
