import { StyleSheet, View } from 'react-native';
import { useGetVDPParticipants } from '../../hooks/participants/videographie';
import { ParticipantTeam } from '../../types'
import { VoteStrategy } from './vote_strategy'
import { Video, ResizeMode } from 'expo-av';
import { screenHeight, screenWidth } from '../size_config';

export class VDPVoteStrategy extends VoteStrategy{
    constructor(){
        super();
        this.fetchParticipantsHook = useGetVDPParticipants
    }
    generateDescription(participant: ParticipantTeam){
        return (
            <View>
                <Video
                    source={{
                        uri: participant.vdpVid ?? "https://www.aeroday.tn/aftermovie.mp4"
                    }}
                    style={styles.videoStyle}
                    useNativeControls
                    resizeMode={ResizeMode.COVER}
                />
            </View>
        )
    }

    voteForParticipant(id: string): boolean {
        return false;
    }
}

const styles = StyleSheet.create({
    videoStyle: {
        width: "90%",
        height: "60%",
        alignSelf: "center",
        marginTop: 25
    }
})