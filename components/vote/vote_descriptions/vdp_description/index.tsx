import { StyleSheet, View } from "react-native";
import { ParticipantTeam } from "../../../../types";
import { Text } from 'react-native';

interface IVdpDescription{
    participant: ParticipantTeam;
}

export default function VdpDescription({participant}: IVdpDescription){
    return (
        <View>
            <Text>WIP</Text>
            {/* <Video
                source={{
                    uri: participant.vdpVid ?? "https://www.aeroday.tn/aftermovie.mp4"
                }}
                style={styles.videoStyle}
                useNativeControls
                resizeMode={ResizeMode.COVER}
            /> */}
        </View>
    )
}

const styles = StyleSheet.create({
    videoStyle: {
        width: "90%",
        height: "60%",
        alignSelf: "center",
        marginTop: 25
    }
})