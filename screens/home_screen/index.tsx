import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLogout } from "../../hooks/auth/logout";
import { useGetSchedule } from "../../hooks/schedule/schedule";
import { HomeScreenProps } from "../../navigation/types";

export default function HomeScreen({ navigation } : HomeScreenProps){
  const logout = useLogout();
  const { data } = useGetSchedule();

  const logoutUser = () => {
    logout.mutate();
  }

  const openProfile = () => {
    navigation.navigate("ProfileScreen")
  }
  return (
    <SafeAreaView>
      <Text>Home Screen</Text>
      <Text onPress={openProfile}>Profile</Text>
      <Text onPress={logoutUser}>Logout</Text>
      {
        data && data.map((section)=>{
          return (
            <View>
              <Text>{section.title}</Text>
              <Text>{section.startTime}</Text>
              <Text>{section.endTime}</Text>
            </View>
          )
        })
      }
    </SafeAreaView>
  )
}