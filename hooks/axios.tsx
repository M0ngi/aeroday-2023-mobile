import axios, { AxiosInstance } from 'axios';
import { useContext, useMemo } from 'react';
import { PUBLIC_API_URL } from '../consts/api';
import { AppContext } from '../context/app_context/app_context';
import { AppAct } from '../context/app_context/types';
import { AuthContext } from '../context/auth_context/auth_context';
import { AuthAct } from '../context/auth_context/types';
import getHeaders from '../utils/api_utils';
import { useRefreshToken } from './auth/refresh_token';

const useAxios = () => {
	const refreshToken = useRefreshToken()
	const { dispatchApp } = useContext(AppContext);
	const { auth, dispatchAuth } = useContext(
		AuthContext,
	);

	const axiosInstance = useMemo<AxiosInstance>(() => {
		const instance = axios.create({
			baseURL: PUBLIC_API_URL,
			headers: getHeaders(auth.accessToken),
		});

		instance.interceptors.request.use((request) => {
			if(!request.headers.get("repeat"))
				dispatchApp({type: AppAct.LOAD_ON})

			return request;
		})

		instance.interceptors.response.use((response) => {
			dispatchApp({type: AppAct.LOAD_OFF})
			return response;
		}, async (error) => {
			dispatchApp({type: AppAct.LOAD_OFF})
			// Unauthorized
			if (error.response.status === 401){
				await refreshToken.mutateAsync();
				error.config.__isRetryRequest = true
				return axios(error.config)
			}
			if(error.response.status === 401){
				console.log(error.response)
			}
			return Promise.reject(error);
		});

		return instance;
	}, [auth.accessToken]);

	return { axios: axiosInstance };
};

export default useAxios;