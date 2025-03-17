import { useEffect, useRef, useState } from "react";

const useThrottle = (value, delay) => {
  const [throttleValue, setThrottleValue] = useState(value);

  const lastExecuted = useRef(Date.now());
  useEffect(() => {
    const now = Date.now();

    if (now - lastExecuted.current >= delay) {
      setThrottleValue(value);
      lastExecuted.current = now;
    }
  }, [value, delay]);

  return throttleValue;
};

export default useThrottle;
