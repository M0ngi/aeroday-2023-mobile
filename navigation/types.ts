import type { NativeStackScreenProps } from '@react-navigation/native-stack';

type AuthStackParamList = {
  AuthScreen: undefined;
  ResetPassScreen: undefined;
};

type MainStackParamList = {
  HomeScreen: undefined;
  ProfileScreen: undefined;
  SettingsScreen: undefined;
  EditPassScreen: undefined;
  EditInfoScreen: undefined;
  LeaderboardScreen: undefined;
};

export type AuthScreenProps = NativeStackScreenProps<AuthStackParamList, 'AuthScreen'>;  
export type ResetPassScreenProps = NativeStackScreenProps<AuthStackParamList, 'ResetPassScreen'>;

export type HomeScreenProps = NativeStackScreenProps<MainStackParamList, 'HomeScreen'>;  
export type ProfileScreenProps = NativeStackScreenProps<MainStackParamList, 'ProfileScreen'>;  
export type SettingsScreenProps = NativeStackScreenProps<MainStackParamList, 'SettingsScreen'>;  
export type EditPassScreenProps = NativeStackScreenProps<MainStackParamList, 'EditPassScreen'>;  
export type EditInfoScreenProps = NativeStackScreenProps<MainStackParamList, 'EditInfoScreen'>;  
export type LeaderboardScreenProps = NativeStackScreenProps<MainStackParamList, 'LeaderboardScreen'>;
