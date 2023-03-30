import { StyleSheet, Text, View } from "react-native";
import Colors from "../../consts/colors";

interface IRoundedButton{
    width?: string;
    color?: string;
    borderRadius?: number;
    text: string;
    onPress: () => void
}

export default function RoundedButton({text, width, color, onPress, borderRadius} : IRoundedButton){
    const textStyle = color ? {...style.loginBtn, backgroundColor: color} : {...style.loginBtn};
    return (
        <View style={{borderRadius: borderRadius ?? 50, width: width ?? "100%", overflow: "hidden"}}>
            <Text style={textStyle} onPress={onPress}>{text}</Text>
        </View>
    )
}

const style = StyleSheet.create({
    loginBtn:{
        color: "#fff",
        backgroundColor: Colors.green,
        width: "100%",
        paddingTop: 5,
        paddingBottom: 5,
        textAlign: "center",
        fontFamily: "Open Sans Bold",
        fontSize: 30,
        fontWeight: "bold",
    },
})