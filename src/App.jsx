import { useState } from "react";

// import Carousel from "./components/Carousel";
import Pagination from "./components/Pagination";

import "./App.css";
import SignUpForm from "./components/SignUpForm";
import DashBoard from "./components/DashBoard/DashBoard";

const arr = Array.from({ length: 200 }, (_, idx) => idx + 1);

function App() {
  const [data, setData] = useState(arr);
  // data ,  No of item to show
  // will get current page no / uska data
  return (
    <>
      <DashBoard />
      {/* <Counter /> */}
      {/* <Throttling /> */}
      {/* <CommentList /> */}
      {/* <VirtualizedList list={data} height={400} itemHeight={40} width={500} /> */}
      {/* <Carousel /> */}
      <SignUpForm />
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

// const AdminRoute = ({ children }) => {
//   const isAdmin = true;
//   return isAdmin ? children : <Navigate to="/home" />;
// };

// <BrowserRouter>
//   <Link to="/home">Hello</Link>
//   <Link to="/home">Hello</Link>
//   <Routes>
//     <Route path="/home" element={<CardsList />} />
//     <Route
//       path="/privacy"
//       element={
//         <AdminRoute>
//           <Privacy />
//         </AdminRoute>
//       }
//     />
//   </Routes>
// </BrowserRouter>
