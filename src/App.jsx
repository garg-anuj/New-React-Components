import { useState } from "react";

// import Carousel from "./components/Carousel";
import Pagination from "./components/Pagination";

import "./App.css";

const arr = Array.from({ length: 200 }, (_, idx) => idx + 1);

function App() {
  const [data, setData] = useState(arr);
  // data ,  No of item to show
  // will get current page no / uska data
  return (
    <>
      {/* <Counter /> */}
      {/* <Throttling /> */}
      {/* <CommentList /> */}
      {/* <VirtualizedList list={data} height={400} itemHeight={40} width={500} /> */}
      {/* <Carousel /> */}
      <Pagination
        data={data}
        renderRow={function (rowData) {
          return <div>Hello {rowData}</div>;
        }}
      />
    </>
  );
}

export default App;
