import { useContext } from "react";
import useAxios from "../axios";
import { useMutation } from '@tanstack/react-query'
import { AxiosResponse } from 'axios';
import { Response } from "../types";
import { AppContext } from "../../context/app_context/app_context";
import { AppAct } from "../../context/app_context/types";
import { ResetPassChangeRequestDTO } from "../../DTO/resetpass_dto";

export function useResetPasswordChange() {
	const { axios } = useAxios();
	const { dispatchApp } = useContext(AppContext);

	return useMutation({
		mutationKey: ['user', 'auth', 'reset'],
		mutationFn: async (credentials: ResetPassChangeRequestDTO) => {
			return axios
			.post('/auth/change', credentials)
			.then(
				(res: AxiosResponse<Response<null>>) => {
					return res.data.data;
				},
			);
		},
		onSuccess: async () => {
			dispatchApp({type: AppAct.INFO, payload: {info: "Your password changed, login now."}})
		},
		onError: (error) => {
			dispatchApp({
				type: AppAct.ERROR, 
				payload: { 
					error: "Unable to request a password reset. Try again." 
				}
			})
		},
		cacheTime: 0,
		retry: 2,
	});
}