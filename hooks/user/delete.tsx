import { useContext } from "react";
import { AuthContext } from "../../context/auth_context/auth_context";
import useAxios from "../axios";
import { useMutation } from '@tanstack/react-query'
import { AxiosError, AxiosResponse } from 'axios';
import { Response } from "../types";
import { IUser } from "../../types";
import { AppContext } from "../../context/app_context/app_context";
import { AppAct } from "../../context/app_context/types";
import { ChangePassRequestDTO } from "../../DTO/changepass_dto";
import { useLogout } from "../auth/logout";
import { AuthAct } from "../../context/auth_context/types";

export function useDeleteAccount() {
	const { axios } = useAxios();
	const { dispatchApp } = useContext(AppContext);
	const { dispatchAuth } = useContext(AuthContext);
	const logoutHook = useLogout();

	return useMutation({
		mutationFn: async () => {
			return axios
				.delete('/user')
				.then((res: AxiosResponse<Response<IUser>>) => res.data.data)
				.then((user) => ({user}));
		},
		onSuccess: async ({user}) => {
            dispatchApp({ type: AppAct.INFO, payload: { info: "Your account has been deleted." } })
			dispatchAuth({type: AuthAct.LOGOUT})
		},
		onError: (error) => {
			dispatchApp({
				type: AppAct.ERROR, 
				payload: { 
					error: "Unable to delete account. Try again." 
				}
			})
		},
		cacheTime: 0,
		retry: 1,
	});
}