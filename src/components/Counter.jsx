import React, { useEffect, useState } from "react";

const Counter = () => {
  const [checker, setChecker] = useState(5);
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    const handleInterval = setInterval(() => {
      setCounter((previousState) => {
        if (previousState >= checker) {
          if (previousState % 5 === 0) {
            const newData = previousState / 5;
            console.log(previousState, checker, newData);
            setChecker((newData + 1) * 5);
            // return 1;
          }
          return 1;
        }
        return previousState + 1;
      });
    }, 1000);

    return () => clearInterval(handleInterval);
  }, [checker]);

  return (
    <div className="border">
      <button>{counter}</button>
    </div>
  );
};

export default Counter;
