import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { SignupScreenProps } from "../../../navigation/types";

export default function SignupScreen({navigation}: SignupScreenProps){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  return (
    <View>
      <Text>Signup Screen</Text>
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
      <Button title="Signup" />

      <Text onPress={() => navigation.navigate("LoginScreen")}>Login!</Text>
    </View>
  )
}