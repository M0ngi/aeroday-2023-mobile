export interface ParticipantTeam{
    _id: String;
    name: String;
    university: String;
    competition: 'airshow' | 'videographie';
    members: String[];
}

export interface AirshowTeam extends ParticipantTeam {}

export interface VideographieTeam extends ParticipantTeam {}

export interface IUser{
    _id: string;
    name: String;
    email: String;
}

export type GAuthToken = string | null;