import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from "../screens/auth/login_screen";
import SignupScreen from "../screens/auth/signup_screen";

const authStack = createNativeStackNavigator();

export default function AuthNavigator(){
  return (
    <authStack.Navigator initialRouteName="LoginScreen">
      <authStack.Screen name="LoginScreen" component={LoginScreen} />
      <authStack.Screen name="SignupScreen" component={SignupScreen} />
    </authStack.Navigator>
  )
}