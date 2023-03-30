import React, { useContext } from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AppContext } from "../../context/app_context/app_context";
import { AppAct } from "../../context/app_context/types";
import { useLogout } from "../../hooks/auth/logout";

export default function SettingScreen(){
  const logout = useLogout();

  const logoutUser = () => {
    logout.mutate();
  }
  return (
    <SafeAreaView>
      <Text>Settings Screen</Text>
      <Text onPress={logoutUser}>Logout</Text>
    </SafeAreaView>
  )
}