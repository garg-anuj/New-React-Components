import React, { useEffect, useState } from "react";

const INCREASE_STEPS_BY = 5;

const Counter = () => {
  const [checker, setChecker] = useState(5);
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCounter((previous) => {
        if (previous >= checker) {
          setChecker((oldLimit) => oldLimit + INCREASE_STEPS_BY);
          //   setChecker((previous / 5 + 1) * 5);
          return 1;
        }
        return previous + 1;

        // if (previous < checker) return previous + 1;
        // setChecker((oldLimit) => oldLimit + INCREASE_STEPS_BY);
        // //   setChecker((previous / INCREASE_STEPS_BY + 1) * INCREASE_STEPS_BY);
        // return 1;
      });
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [checker]);

  return (
    <div className="border">
      <button>{counter}</button>
    </div>
  );
};

export default Counter;
