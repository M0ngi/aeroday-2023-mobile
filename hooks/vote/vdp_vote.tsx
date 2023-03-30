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
                        console.log(res.data.data);

                        return res.data.data
                    },)
            // console.log(result);


            return result
        },
        onSuccess: () => {
            dispatchApp({ type: AppAct.INFO, payload: { info: "Your vote has been submitted." } })
            console.log('success');

        },
        onError: (error) => {

            console.log(error.response);
            dispatchApp({
                type: AppAct.ERROR,
                payload: {
                    error: "Unable to vote. Try again."
                }
            }

            )
            // logout.mutate();
            // notify({ type: 'error', message: error.response?.data.message });
        },
        cacheTime: 0,
        retry: 2,
    });
}