import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoadingScreen from "../screens/loading_screen";

const loadingStack = createNativeStackNavigator();

export default function LoadingNavigator(){
  return (
    <loadingStack.Navigator initialRouteName="LoadingScreen">
      <loadingStack.Screen name="LoadingScreen" component={LoadingScreen} options={{headerShown: false}} />
    </loadingStack.Navigator>
  )
}