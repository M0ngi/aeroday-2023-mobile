import { AxiosError, AxiosResponse } from 'axios';
import { useQuery } from '@tanstack/react-query';
import useAxios from '../axios';
import { ConfigType } from '../../types';
import { Response } from '../types';
import { AppContext } from '../../context/app_context/app_context';
import { useContext } from 'react';
import { AppAct } from '../../context/app_context/types';

export function useGetAllConfig() {
    const { dispatchApp } = useContext(AppContext);
    const { axios } = useAxios();

    return useQuery<ConfigType[], AxiosError<Response>, ConfigType[]>({
        queryKey: ['api', 'all', 'config'],
        queryFn: () =>
            axios
                .get('config')
                .then((res: AxiosResponse<Response<ConfigType[]>>) => {
                    return res.data.data
                }),
        onError: (error) => {
            dispatchApp({
                type: AppAct.ERROR,
                payload: {
                    error: "Error occured while fetching the config."
                }
            })
        },
        cacheTime: 0, // 0  sec
    });
}