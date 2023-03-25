import React from "react";
import { IUser } from "../../types";

export type  IAuthState = IUser | null;

export interface IAuthContext{
  user: IAuthState,
  dispatchAuth: React.Dispatch<AuthActions>;
}

export type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export type AuthActions = ActionMap<UserPayload>[keyof ActionMap<UserPayload>];

export enum AuthAct {
  LOGIN = "LOGIN",
  LOGOUT = "LOGOUT",
}

export type UserPayload = {
  [AuthAct.LOGIN]: {
    user: IUser;
  };
  [AuthAct.LOGOUT]: {};
};