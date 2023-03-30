import { StyleSheet, Text, View } from "react-native";
import Colors from "../../consts/colors";

interface IUnderlinedTitle{
    title: string;
}

export default function UnderlinedTitle({title}: IUnderlinedTitle){
    return (
        <View style={styles.titleContainer}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.underLine}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        color: Colors.text,
        fontFamily: "Open Sans Bold",
        fontSize: 25
    },
    titleContainer:{
        alignSelf: "flex-start",
    },
    underLine:{
        width: 40,
        height: 4,
        backgroundColor: Colors.green,
        marginTop: 5,
        borderRadius: 20
    },
})