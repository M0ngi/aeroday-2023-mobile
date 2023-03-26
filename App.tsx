import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import * as Network from 'expo-network';
import { useEffect, useState } from 'react';
import { AuthConsumer, AuthProvider } from './context/auth_context/auth_context';
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from './navigation';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

export default function App() {
  const [connected, setConnected] = useState(false);

  useEffect(()=>{
    Network.getNetworkStateAsync()
      .then((state) =>{
        setConnected(state.isConnected && state.isInternetReachable);
      })
  }, [])
  
  if(!connected){
    return (
      <View>
        <Text>
          You are offline
        </Text>
      </View>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
}
