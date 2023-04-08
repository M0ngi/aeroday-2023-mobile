import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import GlobalStyles from "../../consts/styles";
import UnderlinedTitle from "../../components/underlined_title";
import { screenHeight } from "../../utils/size_config";
import LeftArrowIcon from "../../components/icons/leftarrow_icon";
import RightArrowIcon from "../../components/icons/rightarrow_icon";
import Colors from "../../consts/colors";
import LeaderboardSection from "../../components/leaderboard_section";
import { ChallengeType } from "../../types";
import TopBar from "../../components/top_bar";


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
      <TopBar lineWidth={68} title="Leaderboard" />
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