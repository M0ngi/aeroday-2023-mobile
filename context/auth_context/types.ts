import React from "react";
import { IUser } from "../../types";

export type  IAuthState = IUser | null;

export type AuthReducerAction = {
  type: "LOGIN" | "LOGOUT";
};

export interface IAuthContext{
  user: IAuthState,
  dispatchAuth: React.Dispatch<AuthReducerAction>;
}