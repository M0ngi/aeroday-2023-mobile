import Svg, { ClipPath, Defs, G, Path, Rect } from "react-native-svg";
import Colors from "../../../consts/colors";
import { IIcon } from "../icon";

export default function VoteIcon({color} : IIcon){
    return(
        <Svg width="25" height="22" viewBox="0 0 25 22" fill="none">
            <Rect x="9.20036" y="9.77259" width="1.15057" height="4.10295" transform="rotate(-22.5399 9.20036 9.77259)" fill={color ?? Colors.botNavColors} />
            <Rect x="16.2829" y="10.0372" width="1.14743" height="5.30186" transform="rotate(67.5177 16.2829 10.0372)" fill={color ?? Colors.botNavColors} />
            <Rect x="7.35068" y="0.434179" width="18.0627" height="1.14569" rx="0.572845" transform="rotate(22.4229 7.35068 0.434179)" fill={color ?? Colors.botNavColors} />
            <Rect x="8.41539" y="0.876677" width="18.0149" height="1.15" rx="0.575" transform="rotate(112.553 8.41539 0.876677)" fill={color ?? Colors.botNavColors} />
            <Rect x="22.9838" y="6.88413" width="1.14964" height="12.4625" rx="0.574819" transform="rotate(22.5 22.9838 6.88413)" fill={color ?? Colors.botNavColors} />
            <Rect x="0.447586" y="17.081" width="1.15308" height="12.4446" rx="0.576541" transform="rotate(-67.3441 0.447586 17.081)" fill={color ?? Colors.botNavColors} />
            <Rect x="13.2563" y="16.1706" width="1.15249" height="6.30964" rx="0.576246" transform="rotate(-67.3441 13.2563 16.1706)" fill={color ?? Colors.botNavColors} />
            <Rect x="13.6893" y="15.1071" width="1.14708" height="6.69777" rx="0.573538" transform="rotate(22.6047 13.6893 15.1071)" fill={color ?? Colors.botNavColors} />
            <Rect x="19.2703" y="17.3706" width="1.14547" height="9.00662" rx="0.572735" transform="rotate(67.3102 19.2703 17.3706)" fill={color ?? Colors.botNavColors} />
        </Svg>
    )
}