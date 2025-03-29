import { useState } from "react";

import RoleManager from "./RoleManager";
import UserManager from "./UserManager";

import "./adminBoard.css";

function AdminBoard() {
  const [roles, setRoles] = useState({
    admin: {
      name: "Admin",
      permissions: [
        "create:role",
        "edit:role",
        "delete:role",
        "assign:role",
        "manage:users",
      ],
    },
    generalManager: {
      name: "General Manager",
      permissions: ["manage:team", "approve:tasks", "view:reports"],
    },
  });

  const [users, setUsers] = useState([
    { id: 1, name: "John Admin", role: "admin" },
    { id: 2, name: "Sarah User", role: "" },
  ]);

  const handleCreateRole = (roleName, permissions) => {
    setRoles((prev) => ({
      ...prev,
      [roleName.toLowerCase()]: {
        name: roleName,
        permissions,
      },
    }));
  };

  const handleAssignRole = (userId, role) => {
    setUsers((prev) =>
      prev.map((user) => (user.id === userId ? { ...user, role } : user))
    );
  };

  return (
    <div className="app">
      <header className="header">
        <h1>Role Management System</h1>
      </header>

      <main className="main">
        <div className="container">
          <RoleManager roles={roles} onCreateRole={handleCreateRole} />
          <UserManager
            users={users}
            roles={roles}
            onAssignRole={handleAssignRole}
          />
        </div>
      </main>
    </div>
  );
}

export default AdminBoard;
