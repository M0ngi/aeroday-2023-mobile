import { useState } from "react";
import { Button, Image, Linking, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Colors from "../../consts/colors";
import { PRIVACY_POLICY } from "../../consts/consts";
import { useGoogleOAuth } from "../../hooks/auth/google_oauth";
import { useLogin } from "../../hooks/auth/login";
import InputBox from "../InputBox";
import RoundedButton from "../RoundedButton";

export default function LoginSection({navigation}: any){
    const login = useLogin();
    const googleAuth = useGoogleOAuth();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const loginHandler = () => {
        login.mutate({
            email,
            password,
        })
    }

    const googleLoginHandler = () => {
        googleAuth.login()
    }
    return (
        <View style={style.container}>
            <View style={style.txtEditContainer}>
                <InputBox value={email} onChange={setEmail} placeholder="Email" />
                <InputBox secureTextEntry={true} value={password} onChange={setPassword} placeholder="Password" />

                <Text style={style.resetpass} onPress={() => navigation.navigate("ResetPassScreen")}>Reset Password</Text>
            </View>

            <RoundedButton onPress={loginHandler} style={{width: "60%", fontSize: 24}} text="Login" />

            <Text style={style.privPolicy} onPress={() => Linking.openURL(PRIVACY_POLICY)}>View our Privacy Policy</Text>

            <TouchableOpacity onPress={googleLoginHandler}>
                <Image source={require("./../../assets/Images/Google.png")} />
            </TouchableOpacity>
        
        </View>
    )
}

const style = StyleSheet.create({
    resetpass:{
        color: Colors.text,
        fontSize: 14,
        height: 20,
        textAlignVertical: "center",
        marginTop: 10,
        fontFamily: "Open Sans"
    },
    privPolicy:{
        color: Colors.textGray,
        fontSize: 14,
        height: 20,
        textAlignVertical: "center",
    },
    txtEditContainer: {
        width: "80%",
    },
    container: {
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center"
    }
})