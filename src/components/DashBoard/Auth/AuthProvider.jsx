import React, { createContext, useContext } from "react";

import { ROLE_TO_PERMISSIONS } from "../constant";

const AuthContext = createContext();

export const AuthProvider = ({ role, children }) => {
  const permissions = ROLE_TO_PERMISSIONS[role] || [];
  return (
    <AuthContext.Provider value={{ role, permissions }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
// export default AuthProvider;
