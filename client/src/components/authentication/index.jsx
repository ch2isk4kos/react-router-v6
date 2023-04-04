import React, { createContext, useContext, useState } from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";

const AuthContext = createContext(null); // stores user authentication data

export const useAuth = () => useContext(AuthContext);

// Authentication Provider
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

// Door Man: check for ids
export const AuthRequired = () => {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    return (
      <Navigate
        to={{ pathname: "/unauthorized", state: { from: location } }}
        replace
      />
    );
  }
  return <Outlet />;
};
