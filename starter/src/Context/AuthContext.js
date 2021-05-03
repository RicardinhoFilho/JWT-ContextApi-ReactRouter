import React, { createContext, useState, useEffect } from "react";
import useAuth from "./hooks/userAuth";


const Context = createContext();

function AuthProvider({ children }) {
  
const {authenticated, loading, handleLogin, handleLogout} = useAuth();
 

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <Context.Provider
      value={{ authenticated, handleLogin, handleLogout, loading }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, AuthProvider };
