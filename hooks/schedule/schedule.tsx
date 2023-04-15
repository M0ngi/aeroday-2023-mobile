import { AxiosError, AxiosResponse } from 'axios';
import { useQuery } from '@tanstack/react-query';
import useAxios from '../axios';
import { Schedule } from '../../types';
import { Response, ResponseError } from '../types';
import { AppContext } from '../../context/app_context/app_context';
import { useContext } from 'react';
import { AppAct } from '../../context/app_context/types';
import { ScheduleResponseDTO } from '../../DTO/schedule_dto';

export function useGetSchedule() {
	const { dispatchApp } = useContext(AppContext);
	const { axios } = useAxios();

	return useQuery<Schedule, AxiosError<Response>, Schedule>({
		queryKey: ['schedule'],
		queryFn: () =>
			axios
				.get('/schedule')
				.then((res: AxiosResponse<Response<ScheduleResponseDTO>>) => {
					return res.data.data.map((element) => {
						return {...element, startTime: new Date(element.startTime), endTime: new Date(element.endTime)}
					})
				}),
		onError: (error: ResponseError<any>)=>{
			if(error.response.data.data){
				dispatchApp({
					type: AppAct.ERROR, 
					payload: { 
						error: "Error occured while fetching schedule."
					}
				})
			}
		},
		cacheTime: 2*60*1000, // 2mn
	});
}