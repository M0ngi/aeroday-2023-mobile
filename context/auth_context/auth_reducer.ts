import { IAuthState } from "./types";

export const authReducer = (state, action) : IAuthState => {
    switch(action.type){
        case 'LOGIN':{
            return {loggedin: true, user: 1};
        }
        case 'LOGOUT': {
            return {loggedin: false, user: null};
        }
    }
}