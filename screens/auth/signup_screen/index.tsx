import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSignUp } from "../../../hooks/auth/signup";
import { SignupScreenProps } from "../../../navigation/types";

export default function SignupScreen({ navigation }: SignupScreenProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullName] = useState("");
  const signup = useSignUp()
  const signupHandler = () => {
    signup.mutate({
      fullname,
      email,
      password,
    })
  }

  return (
    <SafeAreaView>
      <Text>Signup Screen</Text>
      <TextInput
        value={fullname}
        onChangeText={setFullName}
        style={{
          padding: 4,
          margin: 4,
          borderWidth: 2,
          borderColor: "#000"
        }}
      />
      <TextInput

        value={email}
        onChangeText={setEmail}
        style={{
          padding: 4,
          margin: 4,
          borderWidth: 2,
          borderColor: "#000"
        }}
      />
      <TextInput
        value={password}
        onChangeText={setPassword}
        style={{

          padding: 4,
          margin: 4,
          borderWidth: 2,
          borderColor: "#000"
        }}
      />
      <Button title="Signup" onPress={signupHandler} />

      <Text onPress={() => navigation.navigate("LoginScreen")}>Login!</Text>
    </SafeAreaView>
  )
}