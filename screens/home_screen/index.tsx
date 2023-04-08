import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ScheduleSection from "../../components/schedule_section";
import TopBar from "../../components/top_bar";
import UnderlinedTitle from "../../components/underlined_title";
import Colors from "../../consts/colors";
import GlobalStyles from "../../consts/styles";
import { useLogout } from "../../hooks/auth/logout";
import { useGetSchedule } from "../../hooks/schedule/schedule";
import { HomeScreenProps } from "../../navigation/types";

export default function HomeScreen({ navigation } : HomeScreenProps){
  const { data } = useGetSchedule();
  return (
    <SafeAreaView style={GlobalStyles.background}>
      <TopBar title="Schedule" />
      <View style={styles.scheduleContainer}>
        {
          data && data.map((section, idx) => {
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
  scheduleContainer: {
    marginTop: 25,
    width: "80%",
    alignSelf: "center",
    display: "flex",
    flexDirection: "column",
  }
})