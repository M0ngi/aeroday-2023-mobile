import React, { useContext, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthContext } from "../context/auth_context/auth_context";
import MainNavigator from "./main_navigator";
import AuthNavigator from "./auth_navigator";
import { AuthAct } from "../context/auth_context/types";
import loadUser from "../hooks/auth/load_user";
import LoadingNavigator from "./loading_navigator";
import { AppContext } from "../context/app_context/app_context";


export default function Navigation(){
  const { auth } = useContext(AuthContext);
  const { appState } = useContext(AppContext);
  const {isError, isLoading, userData} = loadUser();
  const {dispatchAuth} = useContext(AuthContext);

  useEffect(()=>{
    dispatchAuth({type: AuthAct.RESTORE, payload: userData})
  }, [userData])

  if(isLoading || appState.loading){
    return (
      <NavigationContainer>
        <LoadingNavigator />
      </NavigationContainer>
    )
  }

  return (
    <NavigationContainer>
      {
        auth.user ? <MainNavigator /> : <AuthNavigator />
      }
    </NavigationContainer>
  )
}