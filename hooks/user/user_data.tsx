import { AxiosError, AxiosResponse } from 'axios';
import { useQuery } from '@tanstack/react-query';
import useAxios from '../axios';
import { IUser } from '../../types';
import { Response } from '../types';
import { AppContext } from '../../context/app_context/app_context';
import { useContext } from 'react';
import { AppAct } from '../../context/app_context/types';
import { AuthContext } from '../../context/auth_context/auth_context';
import { AuthAct } from '../../context/auth_context/types';

export function useGetUserInfo() {
	const { dispatchApp } = useContext(AppContext);
	const { axios } = useAxios();
	const { auth, dispatchAuth } = useContext(AuthContext);

	return useQuery<IUser, AxiosError<Response>, IUser>({
		queryKey: ['user', 'data'],
		queryFn: () =>
			axios
				.get('/user', {headers: {"repeat": true}})
				.then((res: AxiosResponse<Response<IUser>>) => res.data.data),
		onSuccess: (user) => {
			dispatchAuth({type: AuthAct.UPDATE, payload: user})
		},
        onError: (error)=>{
			dispatchApp({
				type: AppAct.ERROR, 
				payload: { 
					error: "Unable to fetch user info." 
				}
			})
		},
		refetchInterval: auth.user.verified ? 0 : 1000*30
	});
}