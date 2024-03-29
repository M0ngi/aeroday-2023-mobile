import { useContext } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Colors from "../../../consts/colors";
import { ParticipantTeam } from "../../../types"
import RoundedButton from "../../RoundedButton";
import { LOGO_PLACEHOLDER } from "../../../consts/consts";
import { AuthContext } from "../../../context/auth_context/auth_context";

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
    const { auth } = useContext(AuthContext)
    const btnStyle = {
        width: "30%", 
        fontSize: 18, 
        height: 30,
        paddingTop: 5,
        color: auth.user.airshowVote == team._id ? Colors.green : "#fff",
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
                <RoundedButton onPress={onVote} text={auth.user.airshowVote == team._id ? "Voted" : "Vote"} style={btnStyle} />
            </View>
            <Image style={{width: "60%", height: "80%", marginLeft: "20%"}} source={{uri: team.logo ?? LOGO_PLACEHOLDER}} />
        </View>
    )
}

const styles = StyleSheet.create({
    teamContainer: {
        width: "90%",
        height: "42%",
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