import { useEffect, useState } from "react";
import "./gridLight.css";

const LIGHTS_ARRAY = [
  [1, 0, 1],
  [1, 1, 0],
  [0, 1, 1],
];

const getNumberOfWorkingLight = () => {
  return LIGHTS_ARRAY.flat().reduce(
    (acc, nextLight) => (nextLight === 1 ? acc + nextLight : acc),
    0
  );
};

const GridLight = () => {
  const [activeLightStack, setActiveLightStack] = useState(new Map());

  useEffect(() => {
    function reverseLightOff() {
      const intervalId = setInterval(() => {
        setActiveLightStack((prevState) => {
          const updatedStack = structuredClone(prevState);
          const lastLey = Array.from(updatedStack.keys()).pop(); //array.length-1
          updatedStack.delete(lastLey);

          if (updatedStack.size === 0) {
            clearInterval(intervalId);
          }

          return updatedStack;
        });
      }, 1000);
    }

    if (getNumberOfWorkingLight() === activeLightStack.size) {
      reverseLightOff();
    }
  }, [activeLightStack]);

  const handleLight = (rowIndex, colIndex) => {
    const key = `${rowIndex}-${colIndex}`;

    if (activeLightStack.has(key)) return;

    setActiveLightStack((prevState) => {
      const updatedStack = new Map(prevState);
      updatedStack.set(key, true);
      return updatedStack;
    });
  };

  return (
    <div>
      GridLight
      {LIGHTS_ARRAY.map((row, rowIndex) => {
        return (
          <div
            key={rowIndex}
            className="row-container w-100 flex justify-center"
          >
            {row.map((value, colIndex) => {
              let lightClass = "workingLight";
              if (value === 0) {
                lightClass = "notWorkingLight";
              }

              if (activeLightStack.has(`${rowIndex}-${colIndex}`)) {
                lightClass = "activeLight";
              }
              return (
                <button
                  disabled={value === 0}
                  key={colIndex}
                  className={`col-container ${lightClass} `}
                  onClick={() => handleLight(rowIndex, colIndex)}
                >
                  {value}
                </button>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default GridLight;
