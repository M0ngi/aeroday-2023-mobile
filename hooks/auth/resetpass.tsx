import { useContext } from "react";
import { AuthContext } from "../../context/auth_context/auth_context";
import useAxios from "../axios";
import { useMutation } from '@tanstack/react-query'
import { AxiosError, AxiosResponse } from 'axios';
import { Response } from "../types";
import { IUser } from "../../types";
import getHeaders from "../../utils/api_utils";
import { AuthAct } from "../../context/auth_context/types";
import { secureSave } from "../../utils/secure_storage";
import { useLogout } from "./logout";
import { AppContext } from "../../context/app_context/app_context";
import { AppAct } from "../../context/app_context/types";
import { ResetPassRequestDTO } from "../../DTO/resetpass_dto";

export function useResetPassword() {
	const { axios } = useAxios();
	const { dispatchApp } = useContext(AppContext);

	return useMutation({
		mutationKey: ['user', 'auth', 'reset'],
		mutationFn: async (credentials: ResetPassRequestDTO) => {
			return axios
			.post('/auth/reset', credentials)
			.then(
				(res: AxiosResponse<Response<null>>) => res.data.data,
			);
		},
		onSuccess: async () => {
			dispatchApp({type: AppAct.INFO, payload: {info: "Check your email for the code."}})
		},
		onError: (error) => {
			dispatchApp({
				type: AppAct.ERROR, 
				payload: { 
					error: "Unable to change the password. Try again." 
				}
			})
		},
		cacheTime: 0,
		retry: 2,
	});
}