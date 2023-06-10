import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import React, { Text, View } from "react-native";
import { useState } from 'react';
import "react-native-gesture-handler";
import EventsScreen from "./screens/EventsScreen";
import FriendScreen from "./screens/FriendScreen";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import TrendingScreen from "./screens/TrendingScreen";
import LoginScreen from "./screens/auth/LoginScreen";
import SignupScreen from './screens/auth/SignupScreen';

// Okay okay

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


export default function AppTabs() {
  const [loggedIn, setLoggedIn] = useState(false);
  if (loggedIn) {
    
    return (
      <NavigationContainer>
      <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Friends" component={FriendScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Trending" component={TrendingScreen} />
      <Tab.Screen name="Events" component={EventsScreen} />
      </Tab.Navigator>
      </NavigationContainer>
      )
    } else {
    return (
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login">
        {(props) => <LoginScreen {...props} setLoggedIn={setLoggedIn} />}
        </Stack.Screen>
        <Stack.Screen name="SignUp">
          {(props) => <SignupScreen {...props} setLoggedIn={setLoggedIn} />}
        </Stack.Screen>
      </Stack.Navigator>
      </NavigationContainer>

    );
    
  }
}