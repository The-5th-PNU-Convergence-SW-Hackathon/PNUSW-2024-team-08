import { useEffect, useState } from 'react';

export const Progress = ({ startValue, max, interval }) => {
  const [progress, setProgress] = useState(startValue);

  useEffect(() => {
    const timer = setInterval(() => {
      if (progress < max) {
        setProgress(prevProgress => prevProgress + 1);
      } else {
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [progress, max, interval]);

  return progress;
};

export default Progress;