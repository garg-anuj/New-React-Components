function UserManager({ users, roles, onAssignRole }) {
  return (
    <div className="user-manager">
      <h2>User Management</h2>

      <div className="users-grid">
        {users.map((user) => (
          <div key={user.id} className="user-card">
            <h3>{user.name}</h3>
            <div className="current-role">
              Current Role: {user.role ? roles[user.role].name : "None"}
            </div>

            <div className="role-selector">
              <select
                value={user.role}
                onChange={(e) => onAssignRole(user.id, e.target.value)}
                className="select"
              >
                <option value="">Select Role</option>
                {Object.entries(roles).map(([key, role]) => (
                  <option key={key} value={key}>
                    {role.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserManager;
