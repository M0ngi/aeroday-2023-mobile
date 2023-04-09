export type ChallengeType = 'Airshow' | 'Videographie';

export interface ParticipantTeam {
    _id: string;
    name: string;
    university: string;
    competition: ChallengeType;
    members: string[];
    logo?: string;
    vdpVid?: string;
    votes: number;
}

export interface AirshowTeam extends ParticipantTeam { }

export interface VideographieTeam extends ParticipantTeam { }

export interface IUser {
    _id: string;
    fullname: string;
    email: string;
    airshowVote: string | null;
    vdpVote: string | null;
    verified: boolean;
}

export type GAuthToken = string | null;

export interface IScheduleSection {
    title: string;
    location: string;
    details: string[];
    startTime: Date;
    endTime: Date;
}

export type Schedule = IScheduleSection[];


export interface IConfig {
    key: string,
    value: string,
}
export type ConfigType = IConfig[];
export type KeyType = "voteEnd"