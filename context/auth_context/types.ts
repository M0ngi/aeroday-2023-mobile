import React from "react";
import { IUser } from "../../types";

export interface IAuthState{
  user: IUser,
  loggedin: boolean,
}

export interface IAuthContext{
  auth: IAuthState,
  dispatchAuth: React.Dispatch<any>;
}