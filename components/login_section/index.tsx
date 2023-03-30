import { useState } from "react";
import { Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useGoogleOAuth } from "../../hooks/auth/google_oauth";
import { useLogin } from "../../hooks/auth/login";

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
                <TextInput 
                    value={email}
                    onChangeText={setEmail}
                    style={style.textEdit}
                    placeholder="Email"
                    placeholderTextColor="#A1A1A1"
                />
                <TextInput 
                    value={password}
                    onChangeText={setPassword}
                    style={style.textEdit}
                    placeholder="Password"
                    placeholderTextColor="#A1A1A1"
                />
                <Text style={style.resetpass} onPress={null}>Reset Password</Text>
            </View>

            <View style={{borderRadius: 50, width: "60%", overflow: "hidden"}}>
                <Text style={style.loginBtn} onPress={loginHandler}>Login</Text>
            </View>
            <TouchableOpacity onPress={googleLoginHandler}>
                <Image source={require("./../../assets/Images/Google.png")} />
            </TouchableOpacity>
        
        </View>
    )
}

const style = StyleSheet.create({
    resetpass:{
        color: "#fff",
        fontSize: 14,
        height: 20,
        textAlignVertical: "center",
        marginTop: 10
    },
    loginBtn:{
        color: "#fff",
        backgroundColor: "#01BDAF",
        width: "100%",
        paddingTop: 5,
        paddingBottom: 5,
        textAlign: "center",
        fontFamily: "Open Sans Bold",
        fontSize: 30,
        fontWeight: "bold",
    },
    textEdit: {
        borderBottomWidth: 1, 
        borderColor: "#E1E1E1",
        width: "100%",
        marginTop: 10,
        height: 40,
        color: "#fff",
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