import Svg, { Path } from "react-native-svg";
import Colors from "../../../consts/colors";
import { IIcon } from "../icon";

export default function LeftArrowIcon({color, onPress} : IIcon){
    return(
        <Svg onPress={onPress} width="27" height="28" viewBox="0 0 27 28" fill="none">
            <Path d="M24.7605 14.1396C24.7605 7.9557 19.7478 2.94299 13.564 2.94299C7.38008 2.94299 2.36737 7.9557 2.36737 14.1396C2.36737 20.3235 7.38008 25.3362 13.564 25.3362C19.7478 25.3362 24.7605 20.3235 24.7605 14.1396Z" stroke={color ?? "white"} stroke-width="1.67949" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <Path d="M14.9749 18.0921L11.0337 14.1397L14.9749 10.1873" stroke={color ?? "white"} stroke-width="1.67949" stroke-linecap="round" stroke-linejoin="round"/>
        </Svg>
    )
}