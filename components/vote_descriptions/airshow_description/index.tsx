import { StyleSheet, Text, View } from "react-native";
import { ParticipantTeam } from "../../../types";
import Icon from 'react-native-vector-icons/Entypo';
import Colors from "../../../consts/colors";
import { screenHeight } from "../../../utils/size_config";

interface IAirshowDescription{
    participant: ParticipantTeam;
}

export default function AirshowDescription({participant}: IAirshowDescription){
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
        alignSelf: "center",
        backgroundColor: Colors.lightGray,
        borderRadius: 25,
        padding: 20,
        width: "90%",
        height: screenHeight(.3)
    },
    descTitle: {
        color: Colors.text,
        fontFamily: "Open Sans Bold",
        fontSize: 24,
    }
})