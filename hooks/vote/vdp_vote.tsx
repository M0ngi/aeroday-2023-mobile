import { useContext } from "react";
import { AuthContext } from "../../context/auth_context/auth_context";
import useAxios from "../axios";
import { useMutation } from '@tanstack/react-query'
import { AxiosError, AxiosResponse } from 'axios';
import { Response } from "../types";
import { AppContext } from "../../context/app_context/app_context";
import { AppAct } from "../../context/app_context/types";
import { AuthAct } from "../../context/auth_context/types";

export function useVDPVote() {
    const { axios } = useAxios();
    const { dispatchApp } = useContext(AppContext);
    const { dispatchAuth } = useContext(AuthContext);

    return useMutation({
        mutationKey: ['user', 'airshow', 'vdp'],
        mutationFn: (teamId: string) => {
            const path = '/vote/videographie/' + teamId
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
            dispatchApp({ type: AppAct.INFO, payload: { info: "Your vote has been submitted." } })
        },
        onError: (error: AxiosError<Response<string>>) => {
            let errorMsg = error.response.data.data;
            if(error.response.status == 403){
                errorMsg = "Please verify your email. An activation email has been sent."
            }
            dispatchApp({
                type: AppAct.ERROR,
                payload: {
                    error: errorMsg
                }
            })
        },
        cacheTime: 0,
        retry: 0,
    });
}