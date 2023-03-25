import type { NativeStackScreenProps } from '@react-navigation/native-stack';

type AuthStackParamList = {
  LoginScreen: undefined;
  SignupScreen: undefined;
};

export type LoginScreenProps = NativeStackScreenProps<AuthStackParamList, 'LoginScreen'>;  
export type SignupScreenProps = NativeStackScreenProps<AuthStackParamList, 'SignupScreen'>;  