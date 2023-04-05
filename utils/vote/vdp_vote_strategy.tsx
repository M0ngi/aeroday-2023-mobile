import { useGetVDPParticipants } from '../../hooks/participants/videographie';
import { ParticipantTeam } from '../../types'
import { VoteStrategy } from './vote_strategy'

export class VDPVoteStrategy extends VoteStrategy{
    constructor(){
        super();
        this.fetchParticipantsHook = useGetVDPParticipants
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