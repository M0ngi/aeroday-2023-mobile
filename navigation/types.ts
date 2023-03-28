import type { NativeStackScreenProps } from '@react-navigation/native-stack';

type AuthStackParamList = {
  LoginScreen: undefined;
  SignupScreen: undefined;
};

type MainStackParamList = {
  HomeScreen: undefined;
  ProfileScreen: undefined;
};

export type LoginScreenProps = NativeStackScreenProps<AuthStackParamList, 'LoginScreen'>;  
export type SignupScreenProps = NativeStackScreenProps<AuthStackParamList, 'SignupScreen'>;

export type HomeScreenProps = NativeStackScreenProps<MainStackParamList, 'HomeScreen'>;  
export type ProfileScreenProps = NativeStackScreenProps<MainStackParamList, 'ProfileScreen'>;  