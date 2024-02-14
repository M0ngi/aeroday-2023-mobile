import { StyleSheet, Text, View } from "react-native";
import Colors from "../../consts/colors";
import { IScheduleSection } from "../../types";
import DateDisplay from "../../utils/date_display";

export default function ScheduleSection(section: IScheduleSection){
    return (
        <View style={styles.programSection}>
            <Text style={styles.title}>{section.title}</Text>
            <Text style={styles.date}>
                {`${DateDisplay(section.startTime)} - ${DateDisplay(section.endTime)}`}
            </Text>
            <Text style={styles.date}>
                {section.location}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    programSection: {
        width: "100%",
        borderLeftWidth: 2,
        borderLeftColor: "#cc75b2",
        marginBottom: 7.5,
        marginTop: 7.5,
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 15,
        paddingBottom: 15,
        backgroundColor: Colors.lightGray,
        borderRadius: 8
    },
    title:{
        color: Colors.text,
        fontSize: 15,
        fontFamily: "Open Sans",
        marginBottom: 5,
    },
    date:{
        color: Colors.textGray,
        marginLeft: 10,
        fontSize: 12,
        fontFamily: "Open Sans"
    }
});