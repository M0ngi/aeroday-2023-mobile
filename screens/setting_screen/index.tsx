import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import TopBar from "../../components/top_bar";
import GlobalStyles from "../../consts/styles";
import { useLogout } from "../../hooks/auth/logout";

export default function SettingScreen(){
  const logout = useLogout();

  const logoutUser = () => {
    logout.mutate();
  }
  // Logout, change pass, display name, verified status
  return (
    <SafeAreaView style={GlobalStyles.background}>
      <TopBar title="Settings" />
      <Text onPress={logoutUser}>Logout</Text>
    </SafeAreaView>
  )
}