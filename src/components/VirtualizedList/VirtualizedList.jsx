import { useState } from "react";

const VirtualizedList = ({ list, height, itemHeight, width }) => {
  const listContainer = {
    height: `${height}px`,
    border: "2px solid green",
    overflow: "auto",
    position: "relative",
  };

  const listStyle = {
    height: itemHeight,
    width: "400px",
    // border: "2px solid red",
    position: "absolute",
  };

  const totalHeight = list.length * itemHeight;
  const numberOfItemToShow = height / itemHeight;
  const listEndPoints = [0, Math.floor(numberOfItemToShow)];
  const [indices, setIndices] = useState(listEndPoints);

  const visibleLists = list.slice(indices[0], indices[1]);

  const handleScroll = (event) => {
    const { scrollTop } = event.target;
    const newStartIndices = Math.floor(scrollTop / itemHeight);
    const newEndIndices = newStartIndices + numberOfItemToShow;

    setIndices([newStartIndices, newEndIndices]);
  };

  return (
    <div style={listContainer} onScroll={handleScroll}>
      <div style={{ height: totalHeight }}>
        {visibleLists?.map((item, idx) => {
          return (
            <div
              key={idx}
              style={{ ...listStyle, top: (indices[0] + idx) * itemHeight }}
            >
              {item} VirtualizedList
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default VirtualizedList;
