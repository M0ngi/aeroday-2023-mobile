import { AuthActions, IAuthState } from "./types";

export const authReducer = (state: IAuthState, action: AuthActions) : IAuthState => {
    switch(action.type){
        case 'LOGIN':{
            return null;
        }
        case 'LOGOUT': {
            return null;
        }
    }
}