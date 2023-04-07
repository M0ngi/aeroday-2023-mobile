import { StyleSheet, Text, View } from 'react-native';
import { useGetAirshowParticipants } from '../../hooks/participants/airshow';
import { ParticipantTeam } from '../../types'
import { VoteStrategy } from './vote_strategy'
import Colors from '../../consts/colors';
import Icon from 'react-native-vector-icons/Entypo';

export class AirshowVoteStrategy extends VoteStrategy{
    constructor(){
        super();
        this.fetchParticipantsHook = useGetAirshowParticipants
    }
    generateDescription(participant: ParticipantTeam){
        return (
            <View style={styles.descContainer}>
                <Text style={styles.descTitle}>Members :</Text>
                <View style={styles.membersContainer}>
                    {
                        participant.members.map((member, idx) => {
                            return (
                                <View style={{display: "flex", flexDirection: "row", alignItems: "center"}} key={idx}>
                                    <Icon size={24} color="#fff" name='dot-single' />
                                    <Text style={styles.memberName}>{member}</Text>
                                </View>
                            );
                        })
                    }
                </View>
            </View>
        )
    }

    voteForParticipant(id: string): boolean {
        return false;
    }
}

const styles = StyleSheet.create({
    membersContainer: {
        marginLeft: 25,
        marginTop: 10,
    },
    memberName: {
        color: Colors.text,
        fontSize: 16,
        fontFamily: "Open Sans",
        marginLeft: 5,
    },
    descContainer: {
        marginTop: 40,
        marginLeft: 40,
    },
    descTitle: {
        color: Colors.text,
        fontFamily: "Open Sans Bold",
        fontSize: 24,
    }
})