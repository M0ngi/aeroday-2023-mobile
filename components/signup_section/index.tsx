import React, { useState } from "react";
import { View, Text, TextInput, Button, TouchableOpacity, Image, StyleSheet } from "react-native";
import { useGoogleOAuth } from "../../hooks/auth/google_oauth";
import { useSignUp } from "../../hooks/auth/signup";
import InputBox from "../InputBox";

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

        <View style={{borderRadius: 50, width: "60%", overflow: "hidden"}}>
            <Text style={style.loginBtn} onPress={signupHandler}>Signup</Text>
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
    color: "#fff",
    height: 40,
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