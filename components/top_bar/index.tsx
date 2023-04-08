import { StyleSheet, View } from "react-native";
import UnderlinedTitle from "../underlined_title";

interface ITopBar{
    title: string;
    lineWidth?: number;
}

export default function TopBar({title, lineWidth}: ITopBar){
    return (
        <View style={styles.titleContainer}>
            <UnderlinedTitle title={title} lineWidth={lineWidth} />
        </View>
    )
}

const styles = StyleSheet.create({
    titleContainer: {
      marginTop: 25,
      marginLeft: 25,
    },
});