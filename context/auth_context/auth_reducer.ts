import { AuthReducerAction, IAuthState } from "./types";

export const authReducer = (state: IAuthState, action: AuthReducerAction) : IAuthState => {
    switch(action.type){
        case 'LOGIN':{
            return {loggedin: true, user: 1};
        }
        case 'LOGOUT': {
            return {loggedin: false, user: null};
        }
    }
}