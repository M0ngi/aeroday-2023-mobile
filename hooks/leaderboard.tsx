import { AxiosError, AxiosResponse } from 'axios';
import { useQuery } from '@tanstack/react-query';
import useAxios from './axios';
import { ChallengeType, ParticipantTeam } from './../types';
import { Response } from './types';
import { AppContext } from './../context/app_context/app_context';
import { useContext } from 'react';
import { AppAct } from './../context/app_context/types';

export function useGetLeaderboard(challenge: ChallengeType) {
	const { dispatchApp } = useContext(AppContext);
	const { axios } = useAxios();

	return useQuery<ParticipantTeam[], AxiosError<Response>, ParticipantTeam[]>({
        queryKey: ['leaderboard'],
		queryFn: async () =>{
            return axios
            .get(`/vote/leaderboard?challenge=${challenge}`)
            .then((res: AxiosResponse<Response<ParticipantTeam[]>>) => {
                return res.data.data
            })
        },
        onError: (error: AxiosError<Response<string>>)=>{
            console.log(error.response.data)
			dispatchApp({
				type: AppAct.ERROR, 
				payload: { 
					error: "Error occured while fetching scoreboard." 
				}
			})
		},
	});
}