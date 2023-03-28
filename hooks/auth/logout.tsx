import { useContext } from "react";
import { AuthContext } from "../../context/auth_context/auth_context";
import useAxios from "../axios";
import { useMutation } from '@tanstack/react-query'
import { AuthAct } from "../../context/auth_context/types";
import { secureDelete } from "../../utils/secure_storage";

export function useLogout() {
	const { axios } = useAxios();
	const { dispatchAuth } = useContext(AuthContext);

	return useMutation({
		mutationKey: ['user', 'auth', 'logout'],
		mutationFn: async () => {
			return axios
				.post('/auth/logout')
				.then(
					(res) => res.data.data,
				);
		},
		onSuccess: async () => {
			dispatchAuth({type: AuthAct.LOGOUT})
		},
		onError: async (error) => {
			// notify({ type: 'error', message: error.response?.data.message });
		},
		onSettled: async (data, error, variables, context) => {
			await secureDelete("authState");
		},
		cacheTime: 0,
	});
}