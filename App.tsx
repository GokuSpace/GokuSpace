import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import React, { Text, View } from "react-native";
import "react-native-gesture-handler";
import EventsScreen from "./screens/EventsScreen";
import FriendScreen from "./screens/FriendScreen";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import TrendingScreen from "./screens/TrendingScreen";

// Okay okay

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen key="Home" name="Home" component={HomeScreen} />
          <Tab.Screen key="Friends" name="Friends" component={FriendScreen} />
          <Tab.Screen key="Profile" name="Profile" component={ProfileScreen} />
          <Tab.Screen
            key="Trending"
            name="Trending"
            component={TrendingScreen}
          />
          <Tab.Screen key="Events" name="Events" component={EventsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}
