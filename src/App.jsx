import { useState } from "react";
import VirtualizedList from "./components/VirtualizedList/";
import CommentList from "./components/RBAC/CommentList";
import "./App.css";

const arr = Array.from({ length: 100 }, (_, idx) => idx + 1);
function App() {
  const [data, setData] = useState(arr);
  return (
    <>
      <CommentList />
      {/* <VirtualizedList list={data} height={400} itemHeight={40} width={500} /> */}
    </>
  );
}

export default App;
