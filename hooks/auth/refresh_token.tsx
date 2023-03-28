import { useContext } from "react";
import { AuthContext } from "../../context/auth_context/auth_context";
import useAxios from "../axios";
import { useMutation } from '@tanstack/react-query'
import { AxiosError, AxiosResponse } from 'axios';
import { Response } from "../types";
import { LoginRequestDTO, LoginResponseDTO } from "../../DTO/login_dto";
import { IUser } from "../../types";
import getHeaders from "../../utils/api_utils";
import { AuthAct } from "../../context/auth_context/types";
import { secureSave } from "../../utils/secure_storage";
import { useLogout } from "./logout";
import axios from "axios";

export function useRefreshToken() {
    // const { axios } = useAxios();
    const { dispatchAuth } = useContext(AuthContext);
    const logout = useLogout();

    return useMutation({
        mutationKey: ['user', 'auth', 'refresh_token'],
        mutationFn: async () => {
            const { access_token, refresh_token } = await axios
                .post('/auth/refresh')
                .then(
                    (res: AxiosResponse<Response<LoginResponseDTO>>) => res.data.data,
                );
            return { access_token, refresh_token }
        },
        onSuccess: async ({ refresh_token, access_token }) => {
            // const authState = {
            //     user,
            //     accessToken: access_token,
            //     refreshToken: refresh_token,
            // }
            // await secureSave("authState", authState);
            dispatchAuth({ type: AuthAct.REFRESH, payload: { refreshToken: refresh_token, accessToken: access_token } })
        },
        onError: (error) => {
            logout.mutate();
            // notify({ type: 'error', message: error.response?.data.message });
        },
        cacheTime: 0,
    });
}