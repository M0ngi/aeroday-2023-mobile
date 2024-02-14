import Svg, { Path } from "react-native-svg";
import Colors from "../../../consts/colors";
import { IIcon } from "../icon";

export default function LeaderboardIcon({color} : IIcon){
    return(
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <Path d="M9 11H4C3.44772 11 3 11.4477 3 12V20H9V11Z" stroke={color ?? Colors.botNavColors} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <Path d="M20 8H15V20H21V9C21 8.44772 20.5523 8 20 8Z" stroke={color ?? Colors.botNavColors} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <Path d="M14 4H10C9.44772 4 9 4.44772 9 5V20H15V5C15 4.44772 14.5523 4 14 4Z" stroke={color ?? Colors.botNavColors} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </Svg>
    )
}