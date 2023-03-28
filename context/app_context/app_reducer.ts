import { AppAct, AppActions, IAppState, defaultState } from "./types";

export const appReducer = (state: IAppState, action: AppActions) : IAppState => {
    switch(action.type){
        case AppAct.ERROR:{
            return {...state, ...action.payload};
        }
        case AppAct.INFO:{
            return {...state, ...action.payload};
        }
        case AppAct.RESET: {
            return defaultState;
        }
    }
}