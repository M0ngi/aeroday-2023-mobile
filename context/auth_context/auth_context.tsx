import React, { createContext, useMemo, useReducer } from "react";
import { authReducer } from "./auth_reducer";
import { IAuthContext, IAuthState } from "./types";

const initState : IAuthState = null;

export const AuthContext = createContext<IAuthContext>({
  user: initState,
  dispatchAuth: () => {}
});

export const AuthConsumer = AuthContext.Consumer;

export const AuthProvider = ({ children }: { children?: React.ReactNode }) => {
  const [user, dispatchAuth] = useReducer(authReducer, initState);
  
  const contextValue = useMemo(() => {
    return { user, dispatchAuth };
  }, [user, dispatchAuth]);

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
}
