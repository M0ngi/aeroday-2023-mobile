import { useContext } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { AppContext } from "../../context/app_context/app_context";
import { AppAct } from "../../context/app_context/types";
import { AuthContext } from "../../context/auth_context/auth_context";
import { useGetAirshowParticipants } from "../../hooks/participants/airshow";
import { useGetVDPParticipants } from "../../hooks/participants/videographie";
import { useAirshowVote } from "../../hooks/vote/airshow_vote";
import { useVDPVote } from "../../hooks/vote/vdp_vote";
import { ChallengeType, ParticipantTeam } from "../../types";
import { screenHeight, screenWidth } from "../../utils/size_config";
// import { VoteStrategy } from "../../utils/vote/vote_strategy";
import AirshowDescription from "../vote_descriptions/airshow_description";
import VdpDescription from "../vote_descriptions/vdp_description";
import VoteTeamDisplay from "../vote_team_display";

interface IVoteSection{
    challenge: ChallengeType;
}

export default function VoteSection({ challenge }: IVoteSection){
    const hooks = {
        "Airshow": {
            "vote": useAirshowVote(),
            "participants": useGetAirshowParticipants(),
            "description": (participant: ParticipantTeam) => <AirshowDescription participant={participant} />
        },
        "Videographie": {
            "vote": useVDPVote(),
            "participants": useGetVDPParticipants(),
            "description": (participant: ParticipantTeam) => <VdpDescription participant={participant} />
        }
    }
    const { data } = hooks[challenge].participants

    const { dispatchApp } = useContext(AppContext)
    const { auth } = useContext(AuthContext)
    return (
        <ScrollView>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.teamsContainer}>
                {data && data.map((participant, idx) => {
                    return (
                        <View style={styles.teamDisplay} key={idx}>
                            <VoteTeamDisplay 
                                onVote={() => {
                                    if(auth.user.airshowVote == participant._id){
                                        dispatchApp({type: AppAct.ERROR, payload: {error: "Vote is already submitted."}})
                                        return;
                                    }
                                    if(!auth.user.verified){
                                        dispatchApp({type: AppAct.ERROR, payload: {error: "Verify your email in order to vote."}})
                                        return;
                                    }

                                    hooks[challenge].vote.mutate(participant._id)
                                }} 
                                team={participant} 
                                index={idx}
                            />
                            {hooks[challenge].description(participant)}
                        </View>
                    )
                })}
                {/* Used for left side padding */}
                <View style={{width: screenWidth(.1), height: "50%"}}></View>
            </ScrollView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    teamsContainer: {
        width: screenWidth(),
        height: screenHeight(.8),
        flexGrow:0,
        marginTop: 20,
        alignSelf: "center",

        paddingLeft: screenWidth(.05),
    },
    teamDisplay: {
        width: screenWidth(.85), 
        height: "100%",
    },
})