import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import RoundedButton from "../../components/RoundedButton";
import TopBar from "../../components/top_bar";
import UserDisplay from "../../components/user_display";
import Colors from "../../consts/colors";
import GlobalStyles from "../../consts/styles";
import { AuthContext } from "../../context/auth_context/auth_context";
import { useLogout } from "../../hooks/auth/logout";
import { SettingsScreenProps } from "../../navigation/types";
import { screenHeight, screenWidth } from "../../utils/size_config";

export default function SettingScreen({navigation}: SettingsScreenProps){
  const logout = useLogout();
  const { auth } = useContext(AuthContext)

  const logoutUser = () => {
    logout.mutate();
  }
  const btnStyle = {
    width: screenWidth(.8), 
    // height: 40, 
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 10,
  }

  // Logout, change pass, display name, verified status
  return (
    <SafeAreaView style={GlobalStyles.background}>
      <TopBar title="Settings" />
      <View style={styles.topUserDisplay}>
        <UserDisplay width={screenWidth(.8)} height={screenHeight(.2)} />
      </View>
      <View style={styles.buttonContainer}>
        {
          !auth.user.verified && (
            <View style={styles.btnContainer}>
              <RoundedButton 
                text="Verify email" 
                onPress={logoutUser} 
                style={btnStyle}
              />
            </View>
          )
        }
        <View style={styles.btnContainer}>
          <RoundedButton 
            text="Edit profile" 
            onPress={logoutUser} 
            style={btnStyle}
          />
        </View>
        <View style={styles.btnContainer}>
          <RoundedButton 
            text="Edit password" 
            onPress={() => navigation.navigate("EditPassScreen")} 
            style={btnStyle}
          />
        </View>
        <View style={styles.btnContainer}>
          <RoundedButton 
            text="Logout" 
            onPress={logoutUser} 
            style={btnStyle}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  topUserDisplay: {
    marginTop: screenHeight(.05),
    alignSelf: "center"
  },
  btnContainer: {
    marginTop: 16
  },
  buttonContainer: {
    marginTop: screenHeight(.05)-16,
    alignSelf: "center",
  }
})