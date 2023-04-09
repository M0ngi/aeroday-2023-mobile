import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthScreen from "../screens/auth/auth_screen";
import ResetPassScreen from "../screens/auth/resetpass_screen";

const authStack = createNativeStackNavigator();

export default function AuthNavigator(){
  return (
    <authStack.Navigator initialRouteName="AuthScreen">
      <authStack.Screen name="AuthScreen" component={AuthScreen} options={{headerShown: false}} />
      <authStack.Screen name="ResetPassScreen" component={ResetPassScreen} options={{headerShown: false}} />
    </authStack.Navigator>
  )
}