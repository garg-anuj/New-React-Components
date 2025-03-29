import { useState } from "react";

const AVAILABLE_PERMISSIONS = [
  "create:role",
  "edit:role",
  "delete:role",
  "assign:role",
  "manage:users",
  "manage:team",
  "approve:tasks",
  "view:reports",
  "edit:content",
  "delete:content",
];

function RoleManager({ roles, onCreateRole }) {
  const [newRoleName, setNewRoleName] = useState("");
  const [selectedPermissions, setSelectedPermissions] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newRoleName.trim()) {
      onCreateRole(newRoleName, selectedPermissions);
      setNewRoleName("");
      setSelectedPermissions([]);
    }
  };

  const handlePermissionToggle = (permission) => {
    setSelectedPermissions((prev) =>
      prev.includes(permission)
        ? prev.filter((p) => p !== permission)
        : [...prev, permission]
    );
  };

  return (
    <div className="role-manager">
      <h2>Role Management</h2>

      <div className="existing-roles">
        <h3>Existing Roles</h3>
        <div className="roles-grid">
          {Object.entries(roles).map(([key, role]) => (
            <div key={key} className="role-card">
              <h4>{role.name}</h4>
              <div className="permissions-list">
                {role.permissions.map((permission) => (
                  <span key={permission} className="permission-tag">
                    {permission}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="create-role">
        <h3>Create New Role</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              value={newRoleName}
              onChange={(e) => setNewRoleName(e.target.value)}
              placeholder="Enter role name"
              className="input"
            />
          </div>

          <div className="permissions-selection">
            <h4>Select Permissions</h4>
            <div className="permissions-grid">
              {AVAILABLE_PERMISSIONS.map((permission) => (
                <label key={permission} className="permission-checkbox">
                  <input
                    type="checkbox"
                    checked={selectedPermissions.includes(permission)}
                    onChange={() => handlePermissionToggle(permission)}
                  />
                  {permission}
                </label>
              ))}
            </div>
          </div>

          <button type="submit" className="button">
            Create Role
          </button>
        </form>
      </div>
    </div>
  );
}

export default RoleManager;
