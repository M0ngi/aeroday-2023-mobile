import React from "react";
import { View, Text } from "react-native";
import { useLogout } from "../../hooks/auth/logout";
import { HomeScreenProps } from "../../navigation/types";

export default function HomeScreen({ navigation } : HomeScreenProps){
  const logout = useLogout();

  const logoutUser = () => {
    logout.mutate();
  }

  const openProfile = () => {
    navigation.navigate("ProfileScreen")
  }
  return (
    <View>
      <Text>Home Screen</Text>
      <Text onPress={openProfile}>Profile</Text>
      <Text onPress={logoutUser}>Logout</Text>
    </View>
  )
}