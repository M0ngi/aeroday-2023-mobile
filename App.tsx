import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import * as Network from 'expo-network';
import { useEffect, useState } from 'react';
import { AuthConsumer, AuthProvider } from './context/auth_context/auth_context';
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from './navigation';

// import 'aeroday-2023/config/firebase.ts'

export default function App() {
  const [connected, setConnected] = useState(false);

  useEffect(()=>{
    Network.getNetworkStateAsync()
      .then((state) =>{
        setConnected(state.isConnected && state.isInternetReachable);
      })
  }, [])

  return (
    <AuthProvider>
      <AuthConsumer>
        {(context)=>{
          return (
            <SafeAreaProvider>
              <Navigation />
            </SafeAreaProvider>
          )
        }}
      </AuthConsumer>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
