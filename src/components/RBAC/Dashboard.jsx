import { useState } from "react";

const Dashboard = () => {
  const [user, setUser] = useState({
    name: "Atul",
    role: "user",
  });
  return (
    <div>
      <div></div>
      Dashboard
    </div>
  );
};

export default Dashboard;
