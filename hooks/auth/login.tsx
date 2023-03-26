import { useContext } from "react";
import { AuthContext } from "../../context/auth_context/auth_context";
import useAxios from "../axios";
import { useMutation } from '@tanstack/react-query'
import { AxiosError, AxiosResponse } from 'axios';
import { Response } from "../types";
import { LoginRequestDTO, LoginResponseDTO } from "../../DTO/login_dto";
import { IUser } from "../../types";
import getHeaders from "../../utils/getHeaders";
import { AuthAct } from "../../context/auth_context/types";

export function useLogin() {
	const { axios } = useAxios();
	const { auth, dispatchAuth } = useContext(AuthContext);

	return useMutation({
		mutationKey: ['user', 'auth', 'login'],
		mutationFn: async (credentials: LoginRequestDTO) => {
			const { access_token, refresh_token } = await axios
				.post('/auth/login', credentials)
				.then(
					(res: AxiosResponse<Response<LoginResponseDTO>>) => res.data.data,
				);
			return axios
				.get('/user', { headers: getHeaders(access_token) })
				.then((res: AxiosResponse<Response<IUser>>) => res.data.data)
				.then((user) => ({ refresh_token, access_token, user }));
		},
		onSuccess: ({ refresh_token, access_token, user }) => {
			dispatchAuth({type: AuthAct.LOGIN, payload:{
                user,
                accessToken: access_token,
                refreshToken: refresh_token,
            }})
		},
		// onError: (error) => {
		// 	logout();
		// 	notify({ type: 'error', message: error.response?.data.message });
		// },
		cacheTime: 0,
	});
}