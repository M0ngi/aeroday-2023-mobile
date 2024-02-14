import { AxiosError, AxiosResponse } from 'axios';
import { useQuery } from '@tanstack/react-query';
import useAxios from '../axios';
import { AirshowTeam } from '../../types';
import { Response, ResponseError } from '../types';
import { AppContext } from '../../context/app_context/app_context';
import { useContext } from 'react';
import { AppAct } from '../../context/app_context/types';

export function useGetAirshowParticipants() {
	const { dispatchApp } = useContext(AppContext);
	const { axios } = useAxios();

	return useQuery<AirshowTeam[], AxiosError<Response<string>>, AirshowTeam[]>({
		queryKey: ['teams', 'airshow'],
		queryFn: () =>
			axios
				.get('/team/airshow')
				.then((res: AxiosResponse<Response<AirshowTeam[]>>) => res.data.data),
        onError: (error: ResponseError<any>)=>{
			if(error.response.data.data){
				dispatchApp({
					type: AppAct.ERROR, 
					payload: "Error occured while fetching teams (Airshow)." 
				})
			}
		},
		retry: 0,
	});
}