import { AxiosError } from "axios";
import * as Location from 'expo-location';

export type Response<T = undefined> = {
	msg: "error" | "success";
	data: T;
};

export type ResponseError<T> = AxiosError<Response<T>>;

export interface IVote{
	teamId: string;
	location: Location.LocationObject;
}