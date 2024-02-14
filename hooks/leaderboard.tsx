import { AxiosError, AxiosResponse } from 'axios';
import { useQuery } from '@tanstack/react-query';
import useAxios from './axios';
import { ChallengeType, ParticipantTeam } from './../types';
import { Response, ResponseError } from './types';
import { AppContext } from './../context/app_context/app_context';
import { useContext } from 'react';
import { AppAct } from './../context/app_context/types';

export function useGetLeaderboard(challenge: ChallengeType) {
	const { dispatchApp } = useContext(AppContext);
	const { axios } = useAxios();

	return useQuery<ParticipantTeam[], ResponseError<any>, ParticipantTeam[]>({
        queryKey: ['leaderboard'],
		enabled: false,
		queryFn: async () =>{
            return axios
            .get(`/vote/leaderboard?challenge=${challenge}`)
            .then((res: AxiosResponse<Response<ParticipantTeam[]>>) => {
                return res.data.data
            })
        },
        onError: (error: ResponseError<any>)=>{
			if(error.response.data.data){
				dispatchApp({
					type: AppAct.ERROR, 
					payload: "Error occured while fetching scoreboard." 
				})
			}
			return 5
		},
		retry: 0,
		cacheTime: 0,
	});
}