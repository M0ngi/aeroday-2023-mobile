import { AuthAct, AuthActions, IAuthState, loggedOutState } from "./types";

export const authReducer = (state: IAuthState, action: AuthActions) : IAuthState => {
    switch(action.type){
        case AuthAct.LOGIN:{
            return action.payload;
        }
        case AuthAct.RESTORE:{
            return action.payload;
        }
        case AuthAct.LOGOUT: {
            return loggedOutState;
        }
    }
}