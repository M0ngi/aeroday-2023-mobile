import type { NativeStackScreenProps } from '@react-navigation/native-stack';

type AuthStackParamList = {
  AuthScreen: undefined;
  ResetPassScreen: undefined;
};

type MainStackParamList = {
  HomeScreen: undefined;
  ProfileScreen: undefined;
};

export type AuthScreenProps = NativeStackScreenProps<AuthStackParamList, 'AuthScreen'>;  
export type ResetPassScreenProps = NativeStackScreenProps<AuthStackParamList, 'ResetPassScreen'>;

export type HomeScreenProps = NativeStackScreenProps<MainStackParamList, 'HomeScreen'>;  
export type ProfileScreenProps = NativeStackScreenProps<MainStackParamList, 'ProfileScreen'>;  