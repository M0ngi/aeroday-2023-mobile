import { ScrollView, StyleSheet, Text, View } from "react-native";
import { screenHeight, screenWidth } from "../../utils/size_config";
import { VoteStrategy } from "../../utils/vote/vote_strategy";
import VoteTeamDisplay from "../vote_team_display";

interface IVoteSection{
    strategy: VoteStrategy;
}

export default function VoteSection({ strategy }: IVoteSection){
    const { data } = strategy.fetchParticipantsHook();

    return (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.teamsContainer}>
            {data && data.map((participant, idx) => {
                return (
                    <View style={styles.teamDisplay} key={idx}>
                        <VoteTeamDisplay 
                            onVote={() => {
                                strategy.voteForParticipant(participant._id)
                            }} 
                            team={participant} 
                            index={idx}
                        />
                        {strategy.generateDescription(participant)}
                    </View>
                )
            })}
            {/* Used for left side padding */}
            <View style={{width: screenWidth(.1), height: "50%"}}></View>
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