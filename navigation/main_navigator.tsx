import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/home_screen";
import LeaderboardScreen from "../screens/leaderboard_screen";
import BottomTabNav from "../components/bottom_tab_nav";
import SettingScreen from "../screens/setting_screen";
import VoteScreen from "../screens/vote_screen";

const mainStack = createBottomTabNavigator();

export default function MainNavigator() {
  return (
    <mainStack.Navigator 
      initialRouteName="Home" 
      tabBar={props => <BottomTabNav {...props} />}
      >
        <mainStack.Screen 
          name="HomeScreen"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <mainStack.Screen 
          name="VoteScreen"
          component={VoteScreen}
          options={{headerShown: false}}
        />
        <mainStack.Screen 
          name="LeaderboardScreen"
          component={LeaderboardScreen}
          options={{headerShown: false}}
        />
        <mainStack.Screen 
          name="SettingScreen"
          component={SettingScreen}
          options={{headerShown: false}}
        />
    </mainStack.Navigator>
  )
}