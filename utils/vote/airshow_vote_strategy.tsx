import { useGetAirshowParticipants } from '../../hooks/participants/airshow';
import { ParticipantTeam } from '../../types'
import { VoteStrategy } from './vote_strategy'

export class AirshowVoteStrategy extends VoteStrategy{
    constructor(){
        super();
        this.fetchParticipantsHook = useGetAirshowParticipants
    }
    generateDescription(participant: ParticipantTeam){
        return (
            <></>
        )
    }

    voteForParticipant(id: string): boolean {
        return false;
    }
}