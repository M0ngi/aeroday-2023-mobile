import React from "react";
import { GAuthToken, IUser } from "../../types";

export type IAuthState = {
  user: IUser | null;
  accessToken: string | null;
  refreshToken: string | null;
};

export interface IAuthContext {
  auth: IAuthState;
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
  RESTORE = "RESTORE",
  REFRESH = "REFRESH",
  UPDATE = "UPDATE",
  VOTE_VDP = "VOTE_VDP",
  VOTE_AIRSHOW = "VOTE_AIRSHOW",
}

export type UserPayload = {
  [AuthAct.LOGIN]: IAuthState;
  [AuthAct.RESTORE]: IAuthState;
  [AuthAct.LOGOUT]: undefined;
  [AuthAct.REFRESH]: {
    accessToken: string,
    refreshToken: string,
  };
  [AuthAct.UPDATE]: IUser;
  [AuthAct.VOTE_AIRSHOW]: string;
  [AuthAct.VOTE_VDP]: string;
};

export const loggedOutState: IAuthState = {
  user: null,
  accessToken: null,
  refreshToken: null,
};