import { useState, useCallback } from "react";

const useDetailToggle = () => {
  const [isDetail, setIsDetail] = useState({});

  const toggleDetail = useCallback((messageId) => {
    setIsDetail((prev) => ({
      ...prev,
      [messageId]: !prev[messageId],
    }));
  }, []);

  return { isDetail, toggleDetail };
};

export default useDetailToggle;
