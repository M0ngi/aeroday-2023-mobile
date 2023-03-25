import { AuthReducerAction, IAuthState } from "./types";

export const authReducer = (state: IAuthState, action: AuthReducerAction) : IAuthState => {
    switch(action.type){
        case 'LOGIN':{
            return null;
        }
        case 'LOGOUT': {
            return null;
        }
    }
}