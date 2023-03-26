import { AuthAct, AuthActions, IAuthState } from "./types";

export const authReducer = (state: IAuthState, action: AuthActions) : IAuthState => {
    switch(action.type){
        case AuthAct.LOGIN:{
            return action.payload;
        }
        case AuthAct.LOGOUT: {
            return {user: null, accessToken: null, refreshToken: null};
        }
    }
}