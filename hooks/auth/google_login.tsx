import { useContext } from "react";
import { AuthContext } from "../../context/auth_context/auth_context";
import useAxios from "../axios";
import { useMutation } from '@tanstack/react-query'
import { AxiosError, AxiosResponse } from 'axios';
import { Response } from "../types";
import { GLoginRequestDTO, LoginResponseDTO } from "../../DTO/login_dto";
import { IUser } from "../../types";
import getHeaders from "../../utils/api_utils";
import { AuthAct } from "../../context/auth_context/types";
import { secureSave } from "../../utils/secure_storage";
import { useLogout } from "./logout";

export function useGoogleLogin() {
	const { axios } = useAxios();
	const { dispatchAuth } = useContext(AuthContext);
    const logout = useLogout();

	return useMutation({
		mutationKey: ['user', 'auth', 'login'],
		mutationFn: async (credentials: GLoginRequestDTO) => {
			const { access_token, refresh_token } = await axios
				.post('/auth/google', credentials)
				.then(
					(res: AxiosResponse<Response<LoginResponseDTO>>) => res.data.data,
				);
			return axios
				.get('/user', { headers: getHeaders(access_token) })
				.then((res: AxiosResponse<Response<IUser>>) => res.data.data)
				.then((user) => ({ refresh_token, access_token, user }));
		},
		onSuccess: async ({ refresh_token, access_token, user }) => {
            const authState = {
                user,
                accessToken: access_token,
                refreshToken: refresh_token,
            }
            await secureSave("authState", authState);
			dispatchAuth({type: AuthAct.LOGIN, payload: authState})
		},
		onError: (error) => {
			logout.mutate();
			// notify({ type: 'error', message: error.response?.data.message });
		},
		cacheTime: 0,
	});
}