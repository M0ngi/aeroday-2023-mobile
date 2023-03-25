import React, { createContext, useMemo, useReducer } from "react";
import { authReducer } from "./auth_reducer";
import { IAuthContext, IAuthState } from "./types";

const initState : IAuthState = {
    user: null,
    loggedin: false,
}

export const AuthContext = createContext<IAuthContext>({
  auth: initState,
  dispatchAuth: () => {}
});

export const AuthConsumer = AuthContext.Consumer;

export const AuthProvider = ({ children }: { children?: React.ReactNode }) => {
  const [auth, dispatchAuth] = useReducer(authReducer, initState);
  
  const contextValue = useMemo(() => {
    return { auth, dispatchAuth };
  }, [auth, dispatchAuth]);

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
}
