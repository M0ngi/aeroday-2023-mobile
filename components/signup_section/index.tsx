import React, { useState } from "react";
import { View, Text, TextInput, Button, TouchableOpacity, Image, StyleSheet } from "react-native";
import { useGoogleOAuth } from "../../hooks/auth/google_oauth";
import { useSignUp } from "../../hooks/auth/signup";
import InputBox from "../InputBox";
import RoundedButton from "../RoundedButton";

export default function SignupScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullName] = useState("");
  const signup = useSignUp()
  const googleAuth = useGoogleOAuth();

  const signupHandler = () => {
    signup.mutate({
      fullname,
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
            <InputBox value={fullname} onChange={setFullName} placeholder="Name" />
            <InputBox value={email} onChange={setEmail} placeholder="Email" />
            <InputBox value={password} onChange={setPassword} placeholder="Password" />
        </View>

        <RoundedButton onPress={signupHandler} style={{width: "60%", fontSize: 24}} text="Signup" />
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