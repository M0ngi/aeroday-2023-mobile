import { UseQueryResult } from '@tanstack/react-query'
import { AxiosError } from 'axios';
import { Response } from '../../hooks/types';
import { ParticipantTeam } from '../../types'

export abstract class VoteStrategy{
    public fetchParticipantsHook: () => UseQueryResult<ParticipantTeam[], AxiosError<Response<undefined>, any>>;

    abstract generateDescription(participant: ParticipantTeam): JSX.Element;
    abstract voteForParticipant(id: string): boolean;
}
