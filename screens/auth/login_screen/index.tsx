import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { LoginScreenProps } from "../../../navigation/types";

export default function LoginScreen({ navigation } : LoginScreenProps){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
      <Button title="Login" />
      
      <Text onPress={() => navigation.navigate("SignupScreen")}>Signup!</Text>
    </View>
  )
}