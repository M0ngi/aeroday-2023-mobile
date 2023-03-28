import React, { useContext } from "react";
import { View, Text } from "react-native";
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
    <View>
      <Text>Profile Screen</Text>
      <Text onPress={logoutUser}>Loading</Text>
    </View>
  )
}