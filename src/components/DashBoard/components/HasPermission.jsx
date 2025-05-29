import { useAuth } from "../Auth/AuthProvider";

const HasPermission = ({ permission, children }) => {
  const { permissions } = useAuth();
  return permissions.includes(permission) ? <>{children}</> : null;
};

export default HasPermission;
