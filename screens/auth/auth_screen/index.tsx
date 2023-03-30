import React, { useState } from "react";
import { View, StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AuthNavButtons from "../../../components/auth_nav_buttons";
import LoginSection from "../../../components/login_section";
import SignupSection from "../../../components/signup_section";
import { AuthScreenProps } from "../../../navigation/types";

export default function AuthScreen({ navigation } : AuthScreenProps){
  const [selectedIdx, setSelectedIdx] = useState(0);

  const showLoginSection = () => {
    setSelectedIdx(0);
  }
  const showRegisterSection = () => {
    setSelectedIdx(1);
  }

  return (
    <SafeAreaView style={style.bg}>
      <View style={style.logoContainer}>
        <Image style={style.logo} source={require("./../../../assets/Images/logo.png")} />
      </View>
      <View style={style.container}>
        <View style={{height: "15%"}}>
          <AuthNavButtons onSelectLogin={showLoginSection} onSelectRegister={showRegisterSection} />
        </View>
        <View style={{height: "85%"}}>
          {selectedIdx == 0 ? <LoginSection /> : <SignupSection />}
        </View>
      </View>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  logo:{
    width: "80%",
    resizeMode: "contain"
  },
  bg: {
    backgroundColor: "#151E27",
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end"
  },
  container: {
    width: "100%",
    height: "70%",
    backgroundColor: "#222A35",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  logoContainer:{
    width: "100%",
    height: "30%",
    backgroundColor: "transparent",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }
})