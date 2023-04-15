import { useContext } from "react";
import { AuthContext } from "../../context/auth_context/auth_context";
import useAxios from "../axios";
import { useMutation } from '@tanstack/react-query'
import { AxiosError, AxiosResponse } from 'axios';
import { Response, ResponseError } from "../types";
import { AppContext } from "../../context/app_context/app_context";
import { AppAct } from "../../context/app_context/types";
import { AuthAct } from "../../context/auth_context/types";

export function useAirshowVote() {
    const { axios } = useAxios();
    const { dispatchApp } = useContext(AppContext);
    const { dispatchAuth } = useContext(AuthContext);

    return useMutation({
        mutationKey: ['user', 'airshow', 'vote'],
        mutationFn: (teamId: string) => {
            const path = '/vote/aishow/' + teamId
            const result = axios
                .post(path)
                .then(
                    (res: AxiosResponse<Response<null>>) => {
                        return { teamId }
                    },)
            return result
        },
        onSuccess: ({teamId}) => {
            dispatchAuth({ type: AuthAct.VOTE_AIRSHOW, payload: teamId})
            dispatchApp({ type: AppAct.INFO, payload: "Your vote has been submitted." })
        },
        onError: (error: ResponseError<any>) => {
            if(error.response.data.data){
                dispatchApp({
                    type: AppAct.ERROR,
                    payload: error.response.data.data
                })
            }
        },
        cacheTime: 0,
        retry: 0,
    });
}