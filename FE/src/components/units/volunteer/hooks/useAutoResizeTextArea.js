import { useRef, useEffect } from 'react';

export const useAutoResizeTextArea = (value) => {
  const textAreaRef = useRef();

  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = "0px";
      
      const scrollHeight = textAreaRef.current.scrollHeight;

      textAreaRef.current.style.height = scrollHeight + "px";
    }
  }, [value]);

  return textAreaRef;
};