import React, { useContext, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import VoteSection from "../../components/vote/vote_section";
import GlobalStyles from "../../consts/styles";
import { screenHeight, screenWidth } from "../../utils/size_config";
import RightArrowIcon from "../../components/icons/rightarrow_icon";
import LeftArrowIcon from "../../components/icons/leftarrow_icon";
import Colors from "../../consts/colors";
import TopBar from "../../components/top_bar";
import { ChallengeType } from "../../types";

const SECTIONS: ChallengeType[] = [
  "Airshow",
  "Videographie"
]

export default function LeaderboardScreen(){
  const [currentSection, setCurrentSection] = useState(0);

  const setAirshow = () => {
    setCurrentSection(0);
  }
  const setVDP = () => {
    setCurrentSection(1);
  }

  return (
    <SafeAreaView style={GlobalStyles.background}>
      <TopBar lineWidth={25} title="Vote" />
      <View style={styles.sectionTitleContainer}>
        <LeftArrowIcon onPress={setAirshow} color={currentSection == 0 ? Colors.textGray : null} />
        <Text style={styles.selectedSectionTitle}>
          {SECTIONS[currentSection]}
        </Text>
        <RightArrowIcon onPress={setVDP} color={currentSection == 1 ? Colors.textGray : null} />
      </View>
      <VoteSection challenge={SECTIONS[currentSection]} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  selectedSectionTitle: {
    color: "#fff",
    fontFamily: "Open Sans",
    fontWeight: "bold",
    fontSize: 26,
    textAlign: "center",
    textAlignVertical: "center",
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
  scheduleContainer: {
    marginTop: 25,
    width: "80%",
    alignSelf: "center",
    display: "flex",
    flexDirection: "column",
  }
})
