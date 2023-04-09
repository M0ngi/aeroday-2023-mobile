import { AxiosError, AxiosResponse } from 'axios';
import { useQuery } from '@tanstack/react-query';
import useAxios from './axios';
import { AirshowTeam, IUser } from '../types';
import { Response } from './types';
import { AppContext } from '../context/app_context/app_context';
import { useContext } from 'react';
import { AppAct } from '../context/app_context/types';

export function useGetUserInfo() {
	const { dispatchApp } = useContext(AppContext);
	const { axios } = useAxios();

	return useQuery<IUser, AxiosError<Response>, IUser>({
		queryKey: ['user', 'data'],
		queryFn: () =>
			axios
				.get('/user', {headers: {"repeat": true}})
				.then((res: AxiosResponse<Response<IUser>>) => res.data.data),
        onError: (error)=>{
			dispatchApp({
				type: AppAct.ERROR, 
				payload: { 
					error: "Unable to fetch user info." 
				}
			})
		},
		refetchInterval: 1000*30
	});
}