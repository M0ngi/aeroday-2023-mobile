import { StyleProp, StyleSheet, TextInput, TextStyle } from "react-native";
import Colors from "../../consts/colors";

interface IInputBox {
    style?: StyleProp<TextStyle>;
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
}

export default function InputBox({value, style = {}, onChange, placeholder}: IInputBox){
    return (
        <TextInput 
            value={value}
            onChangeText={onChange}
            style={{...styles.textEdit, ...(style as Object)}}
            placeholder={placeholder}
            placeholderTextColor={Colors.textGray}
        />
    )
}

const styles = StyleSheet.create({
    textEdit: {
        borderBottomWidth: 1, 
        borderColor: "#E1E1E1",
        width: "100%",
        marginTop: 10,
        height: 40,
        color: Colors.text,
    },
})