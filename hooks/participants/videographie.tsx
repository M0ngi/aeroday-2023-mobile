import { AxiosError, AxiosResponse } from 'axios';
import { useQuery } from '@tanstack/react-query';
import useAxios from '../axios';
import { VideographieTeam } from '../../types';
import { Response } from '../types';

export function useGetVDPParticipants() {
	const { axios } = useAxios();

	return useQuery<VideographieTeam[], AxiosError<Response>, VideographieTeam[]>({
		queryKey: ['teams', 'vdp'],
		queryFn: () =>
			axios
				.get('/team/videographie')
				.then((res: AxiosResponse<Response<VideographieTeam[]>>) => res.data.data),
        
	});
}