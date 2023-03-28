import axios, { AxiosInstance } from 'axios';
import { useContext, useMemo } from 'react';
import { PUBLIC_API_URL } from '../consts/api';
import { AuthContext } from '../context/auth_context/auth_context';
import { AuthAct } from '../context/auth_context/types';
import getHeaders from '../utils/api_utils';
import { useRefreshToken } from './auth/refresh_token';

const useAxios = () => {
	const refreshToken = useRefreshToken()
	const { auth, dispatchAuth } = useContext(
		AuthContext,
	);

	const axiosInstance = useMemo<AxiosInstance>(() => {
		const instance = axios.create({
			baseURL: PUBLIC_API_URL,
			headers: getHeaders(auth.accessToken),
		});

		instance.interceptors.response.use(null, async (response) => {
			// Unauthorized
			if (response.response.status === 401) refreshToken.mutate()
			return Promise.reject(response);
		});

		return instance;
	}, [auth.accessToken]);

	return { axios: axiosInstance };
};

export default useAxios;