import { useState, useCallback } from "react";
import { useRouter } from "next/router";

const useDragAndClick = (onClick) => {
  const [isDragging, setIsDragging] = useState(false);
  const router = useRouter();

  const handleMouseDown = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleMouseMove = useCallback(() => {
    setIsDragging(true);
  }, []);

  const handleMouseUp = useCallback(
    (path) => {
      return () => {
        if (!isDragging) {
          router.push(path);
        }
      };
    },
    [isDragging, onClick, router]
  );

  return {
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
  };
};

export default useDragAndClick;
