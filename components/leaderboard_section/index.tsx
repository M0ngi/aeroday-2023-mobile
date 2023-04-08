import React, {useEffect, useState} from "react";
import { StyleSheet, Text, View } from "react-native";
import { ChallengeType } from "../../types";
import { useGetLeaderboard } from "../../hooks/leaderboard";
import PercentageCircle from "../percentage_circle";
import Colors from "../../consts/colors";
import { screenHeight, screenWidth } from "../../utils/size_config";
import Icon from 'react-native-vector-icons/Entypo';

interface ILeaderboardSection{
    challenge: ChallengeType
}

const TeamColors = [
    "#cc75b2",
    "#cf9a5b",
    "#2e6db0",
    "#8ab67c",
    "#565a7d",
]

export default function LeaderboardSection({challenge} : ILeaderboardSection){
    const leaderboard = useGetLeaderboard(challenge);
    const [totalVotes, setTotalVotes] = useState(0);

    useEffect(() => {
        leaderboard.refetch()
    }, [challenge])

    useEffect(() => {
        if(leaderboard.data){
            const total = leaderboard.data.reduce((prev, curr) => curr.votes+prev, 0)
            setTotalVotes(total)
        }
    }, leaderboard.data)
    return (
        <View>
            <View style={styles.graphContainer}>
                {
                    leaderboard.data && leaderboard.data.map((participant, idx) => {
                        const prevVotes = leaderboard.data.slice(0, idx).reduce((prev, curr) => curr.votes+prev, 0)
                        // 360deg => 100%
                        // 3.6 => 1%
                        const prevVotesPerc = (prevVotes/totalVotes)*100;
                        const rotationDeg = prevVotesPerc * 3.6 
                        return (
                            <PercentageCircle
                                style={{position: "absolute"}}
                                key={idx} 
                                radius={screenWidth(.2)} 
                                percent={(participant.votes/totalVotes) * 100 - 1} 
                                color={TeamColors[idx]}
                                rotate={rotationDeg}
                                bgcolor={"transparent"}
                                >
                                <></>
                            </PercentageCircle>
                        )
                    })
                }
            </View>
            <View style={styles.teamsContainer}>
                {
                    leaderboard.data && leaderboard.data.map((participant, idx) => {
                        return (
                            <View key={idx} style={styles.teamDisplay}>
                                <Icon size={32} color={TeamColors[idx]} name='dot-single' />
                                <Text style={styles.teamName}>{participant.name}</Text>
                            </View>
                        )
                    })
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    graphContainer: {
        alignItems: "center",
        height: screenWidth(.2)*2 // 2*radius
    },
    teamDisplay: {
        width: screenWidth(.75),
        backgroundColor: Colors.lightGray,
        alignSelf: "center",
        marginTop: 16,
        padding: 8,
        borderRadius: 25,
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },
    teamName:{
        color: Colors.text,
        fontSize: 16,
        fontFamily: "Open Sans"
    },
    teamsContainer:{
        marginTop: screenHeight(.05)
    }
})