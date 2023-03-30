import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ScheduleSection from "../../components/schedule_section";
import UnderlinedTitle from "../../components/underlined_title";
import Colors from "../../consts/colors";
import GlobalStyles from "../../consts/styles";
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
    <SafeAreaView style={GlobalStyles.background}>
      <View style={styles.titleContainer}>
        <UnderlinedTitle title="Schedule" />
      </View>
      {/* <Text onPress={openProfile}>Profile</Text>
      <Text onPress={logoutUser}>Logout</Text> */}
      <View style={styles.scheduleContainer}>
        {
          data && data.map((section, idx)=>{
            return (
              <ScheduleSection {...section} key={idx} />
            )
          })
        }
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  titleContainer:{
    marginTop: 25,
    marginLeft: 25,
  },
  scheduleContainer:{
    marginTop: 25,
    width: "80%",
    alignSelf: "center",
    display: "flex",
    flexDirection: "column",
  }
})