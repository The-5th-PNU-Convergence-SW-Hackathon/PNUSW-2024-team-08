import { useState, useCallback } from "react";

export const useCheckBox = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isDebouncing, setIsDebouncing] = useState(false);

  const handleCheckboxChange = useCallback(() => {
    if (isDebouncing) return; // 디바운싱 중이면 클릭을 무시합니다.

    setIsChecked((prev) => !prev); // 상태를 즉시 반전시킵니다.
    setIsDebouncing(true); // 디바운싱을 시작합니다.

    setTimeout(() => {
      setIsDebouncing(false); // 500ms 후에 디바운싱을 해제합니다.
    }, 500);
  }, [isDebouncing]);

  return { isChecked, handleCheckboxChange };
};
