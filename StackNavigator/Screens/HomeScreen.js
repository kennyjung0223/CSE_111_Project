import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";

import Feed from "../Components/Feed.js";
import Recommendations from "../Components/Recommendations.js";
import Profile from "../Components/Profile.js";
import Calendar from "../Components/Calendar.js";
import Connections from "../Components/Connections.js";

const Tab = createBottomTabNavigator();

export default function HomeScreen() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = "md-home";
          } else if (route.name === "Recommendations") {
            iconName = focused ? "ios-list-box" : "ios-list";
          } else if (route.name === "Connections") {
            iconName = "md-person-add";
          } else if (route.name === "Profile") {
            iconName = "md-person";
          } else if (route.name === "Calendar") {
            iconName = "md-airplane";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "#43d0f0",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="Home" component={Feed} />
      <Tab.Screen name="Recommendations" component={Recommendations} />
      <Tab.Screen name="Connections" component={Connections} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Calendar" component={Calendar} />
    </Tab.Navigator>
  );
}
