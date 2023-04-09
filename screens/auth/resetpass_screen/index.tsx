import React, { useContext, useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import InputBox from "../../../components/InputBox";
import RoundedButton from "../../../components/RoundedButton";
import UnderlinedTitle from "../../../components/underlined_title";
import Colors from "../../../consts/colors";
import GlobalStyles from "../../../consts/styles";
import { useResetPassword } from "../../../hooks/auth/resetpass";
import { useResetPasswordChange } from "../../../hooks/auth/resetpass_change";
import {  ResetPassScreenProps } from "../../../navigation/types";
import { screenHeight, screenWidth } from "../../../utils/size_config";

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
    <SafeAreaView style={GlobalStyles.background}>
      <View style={styles.titleContainer}>
        <UnderlinedTitle title="Reset Password" lineWidth={screenWidth(.25)} />
      </View>

      <View style={styles.container}>
        <View style={styles.txtEditContainer}>
          <InputBox
            value={email}
            onChange={setEmail}
            placeholder="Email"
          />
          <InputBox
            value={code}
            onChange={setCode}
            editable={passReset.isSuccess}
            placeholder="Code"
            style={passReset.isSuccess ? {} : {borderColor: Colors.lightGray}}
            textColor={passReset.isSuccess ? null : Colors.lightGray}
          />
          <InputBox
            value={newPassword}
            onChange={setNewPass}
            editable={passReset.isSuccess}
            placeholder="New password"
            style={passReset.isSuccess ? {} : {borderColor: Colors.lightGray}}
            textColor={passReset.isSuccess ? null : Colors.lightGray}
          />
        </View>

        <RoundedButton 
          onPress={passReset.isSuccess ? updatePassword : sendCode} 
          style={{width: "60%", fontSize: 18, paddingTop: 10, paddingBottom: 10}} 
          text={passReset.isSuccess ? "Change password" : "Send code"}
        />

        <Text style={styles.backLogin} onPress={() => navigation.navigate("AuthScreen")}>Back to login!</Text>
      </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  titleContainer: {
    marginTop: 25,
    marginLeft: 25,
    marginRight: 25,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  txtEditContainer: {
    width: "80%",
  },
  backLogin:{
    color: Colors.text,
    fontSize: 14,
    height: 20,
    textAlignVertical: "center",
    marginTop: 10
  },
  container: {
    height: screenHeight(.45),
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center"
  },
});