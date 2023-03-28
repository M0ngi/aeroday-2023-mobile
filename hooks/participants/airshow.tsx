import { AxiosError, AxiosResponse } from 'axios';
import { useQuery } from '@tanstack/react-query';
import useAxios from '../axios';
import { AirshowTeam } from '../../types';
import { Response } from '../types';

export function useGetAirshowParticipants() {
	const { axios } = useAxios();

	return useQuery<AirshowTeam[], AxiosError<Response>, AirshowTeam[]>({
		queryKey: ['teams', 'airshow'],
		queryFn: () =>
			axios
				.get('/team/airshow')
				.then((res: AxiosResponse<Response<AirshowTeam[]>>) => res.data.data),
        
	});
}