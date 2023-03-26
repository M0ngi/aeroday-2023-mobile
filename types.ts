export type AirshowTeam = {
    teamName: String;
}

export type VideographieTeam = {
    teamName: String;
}

export interface IUser{
    _id: string;
    name: String;
    email: String;
}

export type GAuthToken = string | null;