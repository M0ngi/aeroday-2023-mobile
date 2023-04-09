import { StyleProp, ViewStyle } from "react-native";

export interface IIcon{
    color?: string;
    onPress?: () => void;
    width?: number;
    style?: StyleProp<ViewStyle>;
}