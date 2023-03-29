import { AxiosError, AxiosResponse } from 'axios';
import { useQuery } from '@tanstack/react-query';
import useAxios from '../axios';
import { Schedule } from '../../types';
import { Response } from '../types';
import { AppContext } from '../../context/app_context/app_context';
import { useContext } from 'react';
import { AppAct } from '../../context/app_context/types';

export function useGetSchedule() {
	const { dispatchApp } = useContext(AppContext);
	const { axios } = useAxios();

	return useQuery<Schedule, AxiosError<Response>, Schedule>({
		queryKey: ['schedule'],
		queryFn: () =>
			axios
				.get('/schedule')
				.then((res: AxiosResponse<Response<Schedule>>) => res.data.data),
        onError: (error)=>{
			dispatchApp({
				type: AppAct.ERROR, 
				payload: { 
					error: "Error occured while fetching schedule." 
				}
			})
		}
	});
}