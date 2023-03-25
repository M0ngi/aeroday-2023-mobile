import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthContext } from "../context/auth_context/auth_context";
import MainNavigator from "./main_navigator";
import AuthNavigator from "./auth_navigator";


export default function Navigation(){
  const { auth } = useContext(AuthContext);
  return (
    <NavigationContainer>
      {
        auth ? <MainNavigator /> : <AuthNavigator />
      }
    </NavigationContainer>
  )
}