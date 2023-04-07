import React, { useContext } from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AppContext } from "../../context/app_context/app_context";
import { AppAct } from "../../context/app_context/types";
import { useLogout } from "../../hooks/auth/logout";

export default function ProfileScreen(){
  const { dispatchApp } = useContext(AppContext);
  const logoutUser = () => {
    dispatchApp({type: AppAct.LOAD_ON})
    setTimeout(()=> dispatchApp({type: AppAct.LOAD_OFF}), 5000)
  }
  return (
    <SafeAreaView>
      <Text>Profile Screen</Text>
      <Text onPress={logoutUser}>Loading</Text>
    </SafeAreaView>
  )
}