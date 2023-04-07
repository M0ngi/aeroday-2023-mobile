import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AppContext } from "../../context/app_context/app_context";
import { AppAct } from "../../context/app_context/types";
import { useLogout } from "../../hooks/auth/logout";
import GlobalStyles from "../../consts/styles";
import UnderlinedTitle from "../../components/underlined_title";
import { screenHeight } from "../../utils/size_config";
import LeftArrowIcon from "../../components/icons/leftarrow_icon";
import RightArrowIcon from "../../components/icons/rightarrow_icon";
import Colors from "../../consts/colors";
import LeaderboardSection from "../../components/leaderboard_section";
import { ChallengeType } from "../../types";


const SECTIONS: ChallengeType[] = [
  "Airshow",
  "Videographie"
]

export default function ProfileScreen(){
  const [currentSection, setCurrentSection] = useState(0);

  const setAirshow = () => {
    setCurrentSection(0);
  }
  const setVDP = () => {
    setCurrentSection(1);
  }

  return (
    <SafeAreaView style={GlobalStyles.background}>
      <View style={styles.titleContainer}>
        <UnderlinedTitle lineWidth={68} title="Leaderboard" />
      </View>
      <View style={styles.sectionTitleContainer}>
        <LeftArrowIcon onPress={setAirshow} color={currentSection == 0 ? Colors.textGray : null} />
        <Text style={styles.selectedSectionTitle}>
          {SECTIONS[currentSection]}
        </Text>
        <RightArrowIcon onPress={setVDP} color={currentSection == 1 ? Colors.textGray : null} />
      </View>
      <LeaderboardSection challenge={SECTIONS[currentSection]} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  titleContainer: {
    marginTop: 25,
    marginLeft: 25,
  },
  sectionTitleContainer:{
    width: "60%",
    marginTop: screenHeight(.04),
    marginBottom: screenHeight(.04),
    display: "flex",
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "space-between"
  },
  selectedSectionTitle: {
    color: "#fff",
    fontFamily: "Open Sans",
    fontWeight: "bold",
    fontSize: 26,
    textAlign: "center",
    textAlignVertical: "center",
  },
})