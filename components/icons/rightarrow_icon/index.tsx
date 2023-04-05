import Svg, { Path } from "react-native-svg";
import Colors from "../../../consts/colors";
import { IIcon } from "../icon";

export default function RightArrowIcon({color, onPress} : IIcon){
    return(
        <Svg onPress={onPress} width="27" height="27" viewBox="0 0 27 27" fill="none">
            <Path d="M24.6328 13.4363C24.6328 7.25245 19.6201 2.23974 13.4362 2.23974C7.25231 2.23974 2.2396 7.25245 2.2396 13.4363C2.2396 19.6202 7.25231 24.6329 13.4362 24.6329C19.6201 24.6329 24.6328 19.6202 24.6328 13.4363Z" stroke={color ?? "white"} stroke-width="1.67949" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <Path d="M12.0255 17.3888L15.9667 13.4364L12.0255 9.48405" stroke={color ?? "white"} stroke-width="1.67949" stroke-linecap="round" stroke-linejoin="round"/>
        </Svg>
    )
}