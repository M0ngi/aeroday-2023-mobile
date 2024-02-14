import { useContext } from "react"
import { Alert } from "react-native";
import { AppContext } from "../../context/app_context/app_context"
import { AppAct } from "../../context/app_context/types";

export default function AlertsScreen(){
    const {appState, dispatchApp} = useContext(AppContext);

    if (appState.error) {
        dispatchApp({ type: AppAct.RESET })
        Alert.alert("Error", appState.error, [
            {
                text: "Exit"
            }
        ], {
            onDismiss: () => {
            },
            cancelable: true
        })
    }

    if (appState.info) {
        dispatchApp({ type: AppAct.RESET })
        Alert.alert("Info", appState.info, [
            {
                text: "Ok",
            }
        ], {
            onDismiss: () => {
            },
            cancelable: true
        })
    }
    return (<></>)
}