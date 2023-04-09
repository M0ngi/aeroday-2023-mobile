import { useContext } from "react";
import { AuthContext } from "../../context/auth_context/auth_context";
import useAxios from "../axios";
import { useMutation } from '@tanstack/react-query'
import { AxiosResponse } from 'axios';
import { Response } from "../types";
import { AppContext } from "../../context/app_context/app_context";
import { AppAct } from "../../context/app_context/types";

export function useVDPVote() {
    const { axios } = useAxios();
    const { dispatchApp } = useContext(AppContext);
    // const logout = useLogout();

    return useMutation({
        mutationKey: ['user', 'airshow', 'vdp'],
        mutationFn: (teamId: string) => {
            const path = '/vote/videographie/' + teamId
            const result = axios
                .post(path)
                .then(
                    (res: AxiosResponse<Response<null>>) => {
                        return res.data.data
                    },)
            return result
        },
        onSuccess: () => {
            dispatchApp({ type: AppAct.INFO, payload: { info: "Your vote has been submitted." } })
        },
        onError: (error) => {
            // @ts-ignore
            let errorMsg = error.response.data.data;
            // @ts-ignore
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
        retry: 1,
    });
}