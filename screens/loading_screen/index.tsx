import React from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";

export default function LoadingScreen(){
  return (
    <View style={style.view}>
      <ActivityIndicator size={"large"} />
    </View>
  )
}

const style = StyleSheet.create({
  view: {
    position: "absolute", 
    top: 0, 
    left: 0, 
    width: "100%", 
    height: "100%", 
    backgroundColor: "#000",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
})