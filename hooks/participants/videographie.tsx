import { AxiosError, AxiosResponse } from 'axios';
import { useQuery } from '@tanstack/react-query';
import useAxios from '../axios';
import { VideographieTeam } from '../../types';
import { Response, ResponseError } from '../types';
import { useContext } from 'react';
import { AppContext } from '../../context/app_context/app_context';
import { AppAct } from '../../context/app_context/types';

export function useGetVDPParticipants() {
	const { axios } = useAxios();
	const { dispatchApp } = useContext(AppContext);

	return useQuery<VideographieTeam[], AxiosError<Response>, VideographieTeam[]>({
		queryKey: ['teams', 'vdp'],
		queryFn: async () => {
			return axios
				.get('/team/videographie')
				.then((res: AxiosResponse<Response<VideographieTeam[]>>) => res.data.data)
		},
		onError: (error: ResponseError<any>)=>{
			if(error.response.data.data){
				dispatchApp({
					type: AppAct.ERROR, 
					payload: "Error occured while fetching teams (Videographie)." 
				})
			}
		},
		retry: 0,
	});
}