import { useState } from "react";
import { Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Colors from "../../consts/colors";
import { useGoogleOAuth } from "../../hooks/auth/google_oauth";
import { useLogin } from "../../hooks/auth/login";
import InputBox from "../InputBox";
import RoundedButton from "../RoundedButton";

export default function LoginSection(){
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
                <InputBox value={password} onChange={setPassword} placeholder="Password" />

                <Text style={style.resetpass} onPress={null}>Reset Password</Text>
            </View>

            <RoundedButton onPress={loginHandler} width="60%" text="Login" />

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
        marginTop: 10
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