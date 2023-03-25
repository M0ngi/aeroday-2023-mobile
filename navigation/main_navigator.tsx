import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "../screens/home_screen";

const mainStack = createNativeStackNavigator();

export default function MainNavigator(){
  return (
    <mainStack.Navigator initialRouteName="HomeScreen">
      <mainStack.Screen name="HomeScreen" component={HomeScreen} />
    </mainStack.Navigator>
  )
}