import React from "react";
import { View, Text } from "react-native";
import { useLogout } from "../../hooks/auth/logout";

export default function HomeScreen(){
  const logout = useLogout();

  const logoutUser = () => {
    logout.mutate();
  }
  return (
    <View>
      <Text>Home Screen</Text>
      <Text onPress={logoutUser}>Logout</Text>
    </View>
  )
}