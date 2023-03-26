import React, { useContext, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthContext } from "../context/auth_context/auth_context";
import MainNavigator from "./main_navigator";
import AuthNavigator from "./auth_navigator";
import { AuthAct } from "../context/auth_context/types";
import loadUser from "../hooks/auth/load_user";


export default function Navigation(){
  const { auth } = useContext(AuthContext);
  const {isError, isLoading, userData} = loadUser();
  const {dispatchAuth} = useContext(AuthContext);

  useEffect(()=>{
    dispatchAuth({type: AuthAct.RESTORE, payload: userData})
  }, [userData])

  return (
    <NavigationContainer>
      {
        auth.user ? <MainNavigator /> : <AuthNavigator />
      }
    </NavigationContainer>
  )
}