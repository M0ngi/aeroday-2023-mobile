import React from "react";
import { IUser } from "../../types";

export interface IAuthState{
  user: IUser,
  loggedin: boolean,
}

export type AuthReducerAction = {
  type: "LOGIN" | "LOGOUT";
};

export interface IAuthContext{
  auth: IAuthState,
  dispatchAuth: React.Dispatch<AuthReducerAction>;
}