import React, { useContext, useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { AuthContext } from "../../../context/auth_context/auth_context";
import { LoginScreenProps } from "../../../navigation/types";

export default function LoginScreen({ navigation } : LoginScreenProps){
  const {auth, dispatchAuth} = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = () => {
    dispatchAuth({type: "LOGIN"})
  }

  return (
    <View>
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
      
      <Text onPress={() => navigation.navigate("SignupScreen")}>Signup!</Text>
    </View>
  )
}