import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Colors from "../../consts/colors";
import HomeIcon from "../icons/home_icon";
import ProfileIcon from "../icons/profile_icon";
import SettingIcon from "../icons/setting_icon";
import VoteIcon from "../icons/vote_icon";

export default function BottomTabNav({ state, descriptors, navigation }){
  return (
    <View style={style.tab}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
        options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
        const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
        });

        if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
        }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const RouteNameData = {
          "HomeScreen":{
            icon: <HomeIcon color={isFocused ? Colors.green : Colors.textGray} />,
            title: "Home",
          },
          "VoteScreen": {
            icon: <VoteIcon color={isFocused ? Colors.green : Colors.textGray} />,
            title: "Vote"
          },
          "ProfileScreen":{
            icon: <ProfileIcon color={isFocused ? Colors.green : Colors.textGray} />,
            title: "Profile",
          },
          "SettingScreen":{
            icon: <SettingIcon color={isFocused ? Colors.green : Colors.textGray} />,
            title: "Settings",
          },
        }
        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={style.container}
            key={index}
          >
            {
              RouteNameData[label].icon
            }
            <Text style={{ color: isFocused ? Colors.green : Colors.textGray }}>
            {RouteNameData[label].title}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const style = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 10,
    paddingTop: 10,
  },
  tab:{ 
    flexDirection: 'row',
    backgroundColor: Colors.background,
    borderTopWidth: 1,
    borderTopColor: Colors.lightGray
  }
})