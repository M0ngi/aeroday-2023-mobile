import { useFocusEffect } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useContext, useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { AppContext } from "../../../context/app_context/app_context";
import { AppAct } from "../../../context/app_context/types";
import { AuthContext } from "../../../context/auth_context/auth_context";
import { useGetAirshowParticipants } from "../../../hooks/participants/airshow";
import { useGetVDPParticipants } from "../../../hooks/participants/videographie";
import { useAirshowVote } from "../../../hooks/vote/airshow_vote";
import { useVDPVote } from "../../../hooks/vote/vdp_vote";
import { ChallengeType, ParticipantTeam } from "../../../types";
import { screenHeight, screenWidth } from "../../../utils/size_config";
import AirshowDescription from "../../vote/vote_descriptions/airshow_description";
import VdpDescription from "../../vote/vote_descriptions/vdp_description";
import VoteTeamDisplay from "./../vote_team_display";

import * as Location from 'expo-location';

interface IVoteSection{
    challenge: ChallengeType;
    navigation: NativeStackNavigationProp<any>;
}

export default function VoteSection({ challenge, navigation }: IVoteSection){
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

    useEffect(()=>{
        const unsubListener = navigation.addListener("focus", () => {
            hooks[challenge].participants.refetch();
        })
        return () => { unsubListener() }
    }, [])

    const { dispatchApp } = useContext(AppContext)
    const { auth } = useContext(AuthContext)

    useEffect(() => {
        (async () => {
          let { status } = await Location.requestForegroundPermissionsAsync();
          if (status !== 'granted') {
            dispatchApp({type: AppAct.ERROR, payload: 'Permission to access location was denied.'})
            return;
          }
        })();
    }, []);

    return (
        <ScrollView>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.teamsContainer}>
                {data && data.map((participant, idx) => {
                    return (
                        <View style={styles.teamDisplay} key={idx}>
                            <VoteTeamDisplay 
                                onVote={async () => {
                                    if(auth.user.airshowVote == participant._id){
                                        dispatchApp({type: AppAct.ERROR, payload: "Vote is already submitted."})
                                        return;
                                    }
                                    if(!auth.user.verified){
                                        dispatchApp({type: AppAct.ERROR, payload: "Verify your email in order to vote."})
                                        return;
                                    }

                                    let location = await Location.getCurrentPositionAsync({});

                                    hooks[challenge].vote.mutate({
                                        teamId: participant._id,
                                        location
                                    })
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