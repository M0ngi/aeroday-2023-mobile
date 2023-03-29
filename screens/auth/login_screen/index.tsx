import React, { useContext, useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AuthContext } from "../../../context/auth_context/auth_context";
import { AuthAct } from "../../../context/auth_context/types";
import { useGoogleOAuth } from "../../../hooks/auth/google_oauth";
import { useLogin } from "../../../hooks/auth/login";
import { LoginScreenProps } from "../../../navigation/types";

export default function LoginScreen({ navigation } : LoginScreenProps){
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
    <SafeAreaView>
      <Text>Login Screen</Text>
      <TextInput 
        value={email}
        onChangeText={setEmail}
        style={{
          borderWidth: 2, 
          borderColor: "#000"
        }} 
      />
      <TextInput 
        value={password}
        onChangeText={setPassword}
        style={{
          borderWidth: 2, 
          borderColor: "#000"
        }} 
      />
      <Button title="Login" onPress={loginHandler} />
      <Button title="Google login" onPress={googleLoginHandler} />
      
      <Text onPress={() => navigation.navigate("SignupScreen")}>Signup!</Text>
      <Text onPress={() => navigation.navigate("ResetPassScreen")}>Reset Pass</Text>
    </SafeAreaView>
  )
}