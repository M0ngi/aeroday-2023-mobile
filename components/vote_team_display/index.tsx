import { StyleSheet, Text, View } from "react-native";
import Colors from "../../consts/colors";
import { ParticipantTeam } from "../../types"
import RoundedButton from "../RoundedButton";

interface IVoteTeamDisplay{
    team: ParticipantTeam;
    onVote: () => void;
    index: number;
}

const BoxColors = [
    "#e6665b",
    "#3696f5",
    "#1cc7b4"
]

export default function VoteTeamDisplay({team, onVote, index}: IVoteTeamDisplay){
    const btnStyle = {
        width: "20%", 
        fontSize: 15, 
        height: 25,
        paddingTop: 5,
        color: "#fff",
        textColor: "#000"
    }
    return (
        <View style={{...styles.teamContainer, backgroundColor: BoxColors[index % BoxColors.length]}}>
            <View style={styles.topRowContainer}>
                <View>
                    <Text style={styles.teamName}>
                        {team.name}
                    </Text>
                    <Text style={styles.teamUni}>
                        {team.university}
                    </Text>
                </View>
                <RoundedButton onPress={() => {}} text="Vote" style={btnStyle} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    teamContainer: {
        width: "90%",
        height: "80%",
        alignSelf: "center",
        borderRadius: 25,
        padding: 20,
    },
    teamName: {
        color: Colors.text,
        fontFamily: "Open Sans Bold",
        fontSize: 25
    },
    teamUni: {
        color: Colors.text,
        opacity: 0.6,
        fontFamily: "Open Sans",
    },
    topRowContainer:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    }
})