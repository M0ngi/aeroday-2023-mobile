import React, { useContext, useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useResetPassword } from "../../../hooks/auth/resetpass";
import { useResetPasswordChange } from "../../../hooks/auth/resetpass_change";
import {  ResetPassScreenProps } from "../../../navigation/types";

export default function ResetPassScreen({ navigation } : ResetPassScreenProps){
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [newPassword, setNewPass] = useState("");

  const passReset = useResetPassword();
  const passResetChange = useResetPasswordChange()

  const sendCode = () => {
    passReset.mutate({
      email
    })
  }

  const updatePassword = () => {
    passResetChange.mutate({
      email, code, newPassword
    })
  }

  return (
    <SafeAreaView>
      <Text>Reset Pass Screen</Text>
      <TextInput 
        value={email}
        onChangeText={setEmail}
        style={{
          borderWidth: 2, 
          borderColor: "#000"
        }} 
      />
      <TextInput
        editable={passReset.isSuccess}
        value={code}
        onChangeText={setCode}
        style={{
          borderWidth: 2, 
          borderColor: "#000"
        }} 
      />

      <TextInput
        editable={passReset.isSuccess}
        value={newPassword}
        onChangeText={setNewPass}
        style={{
          borderWidth: 2, 
          borderColor: "#000"
        }} 
      />

      <Button 
        title={passReset.isSuccess ? "Change password" : "Send code"}
        onPress={passReset.isSuccess ? updatePassword : sendCode}
      />
      
      <Text onPress={() => navigation.navigate("AuthScreen")}>Back to login!</Text>
    </SafeAreaView>
  )
}