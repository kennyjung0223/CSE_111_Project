import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "./Screens/LoginScreen.js";
import RegScreenR from "./Screens/RegScreenR.js";
import RegScreenT from "./Screens/RegScreenT.js";
import HomeScreen from "./Screens/HomeScreen.js";
import AddEventScreen from "./Screens/AddEventScreen.js";
import EditEventScreen from "./Screens/EditEventScreen.js";
import ConnectionsScreen from "./Screens/ConnectionsScreen.js";
import EditInfoScreen from "./Screens/EditInfoScreen.js";
import ViewProfileScreen from "./Screens/ViewProfileScreen";
import AddRecommendationScreen from "./Screens/AddRecommendationScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#36485f",
            borderBottomWidth: 0,
            elevation: 0,
            shadowOpacity: 0,
          },
          headerTitleStyle: {
            opacity: 0,
          },
          headerTintColor: "#fff",
        }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="RegisterR" component={RegScreenR} />
        <Stack.Screen name="RegisterT" component={RegScreenT} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AddEvent" component={AddEventScreen} />
        <Stack.Screen name="EditEvent" component={EditEventScreen} />
        <Stack.Screen name="ConnectionsList" component={ConnectionsScreen} />
        <Stack.Screen name="EditInfo" component={EditInfoScreen} />
        <Stack.Screen name="ViewProfile" component={ViewProfileScreen} />
        <Stack.Screen
          name="AddRecommendation"
          component={AddRecommendationScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
