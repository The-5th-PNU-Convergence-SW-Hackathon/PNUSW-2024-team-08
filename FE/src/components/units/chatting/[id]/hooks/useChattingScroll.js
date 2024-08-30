import { useEffect, useRef, useState, useCallback } from "react";

const useChattingScroll = (
  chatMsgList,
  chatRoomId,
  prevPage,
  loadPreviousMessages
) => {
  const scrollRef = useRef(null);
  const [initialRender, setInitialRender] = useState(true);
  const [loading, setLoading] = useState(false);

  const debounce = (func, delay) => {
    let timer;
    return (...args) => {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  const scrollToBottom = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
      console.log("Scroll to bottom executed");
    } else {
      console.log("scrollRef.current is null in scrollToBottom");
    }
  };

  const handleScroll = async () => {
    if (scrollRef.current && !loading) {
      const scrollPosition = scrollRef.current.scrollTop;
      const scrollHeight = scrollRef.current.scrollHeight;
      const clientHeight = scrollRef.current.clientHeight;
      const scrollPercentage =
        (scrollPosition / (scrollHeight - clientHeight)) * 100;

      if (scrollPercentage < 30) {
        // 변경된 임계값
        console.log("Fetching previous messages...");
        setLoading(true);
        const prevScrollHeight = scrollRef.current.scrollHeight;
        const prevScrollTop = scrollRef.current.scrollTop;

        await loadPreviousMessages(chatRoomId, prevPage);

        const newScrollHeight = scrollRef.current.scrollHeight;
        const heightDifference = newScrollHeight - prevScrollHeight;

        // 유지하고자 하는 위치를 조정
        scrollRef.current.scrollTop = prevScrollTop + heightDifference;

        setLoading(false);
      }
    } else {
      console.log("scrollRef.current is null in handleScroll or loading");
    }
  };

  const debouncedHandleScroll = useCallback(debounce(handleScroll, 200), [
    chatRoomId,
    prevPage,
    loading, // 추가된 의존성
  ]);

  useEffect(() => {
    console.log("Initial render, setting scroll to bottom...");
    setTimeout(() => {
      setInitialRender(false);
      scrollToBottom();
    }, 100);
  }, []);

  useEffect(() => {
    if (!initialRender && !loading) {
      console.log("Chat message list updated, setting scroll to bottom...");
      scrollToBottom();
    }
  }, [chatMsgList, initialRender]);

  useEffect(() => {
    if (!initialRender && scrollRef.current) {
      const scrollElement = scrollRef.current;
      scrollElement.addEventListener("scroll", debouncedHandleScroll);
      console.log("Added scroll event listener");

      return () => {
        if (scrollElement) {
          scrollElement.removeEventListener("scroll", debouncedHandleScroll);
          console.log("Removed scroll event listener");
        }
      };
    } else {
      console.log("scrollRef.current is null in useEffect");
    }
  }, [
    prevPage,
    loadPreviousMessages,
    chatRoomId,
    initialRender,
    debouncedHandleScroll,
  ]);

  return { scrollRef, initialRender };
};

export default useChattingScroll;
