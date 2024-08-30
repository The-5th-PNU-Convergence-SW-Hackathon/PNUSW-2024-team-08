import { useState, useEffect } from "react";

export const useTimer = (initialTime = 180) => {
  const [timer, setTimer] = useState(initialTime);
  const [timerId, setTimerId] = useState(null);

  const startTimer = (startTime = initialTime) => {
    setTimer(startTime);
    const id = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer === 0) {
          clearInterval(id);
          return 0;
        }
        return prevTimer - 1;
      });
    }, 1000);
    setTimerId(id);
  };

  const resetTimer = () => {
    if (timerId) {
      clearInterval(timerId);
    }
    setTimer(initialTime);
  };

  const setTimerToZero = () => {
    if (timerId) {
      clearInterval(timerId);
    }
    setTimer(0);
  };

  useEffect(() => {
    return () => {
      if (timerId) {
        clearInterval(timerId);
      }
    };
  }, [timerId]);

  return { timer, startTimer, resetTimer, setTimerToZero };
};
