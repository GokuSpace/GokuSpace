import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ThemeProvider, createTheme } from '@rneui/themed';
import { StatusBar } from "expo-status-bar";
import { useState, useState } from 'react';
import React, { Text, View } from "react-native";
import { ThemeProvider, createTheme } from '@rneui/themed';
import { useState, createContext } from 'react';
import "react-native-gesture-handler";
import EventsScreen from "./screens/EventsScreen";
import FriendScreen from "./screens/FriendScreen";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import TrendingScreen from "./screens/TrendingScreen";
import LoginScreen from "./screens/auth/LoginScreen";
import SignupScreen from './screens/auth/SignupScreen';
import EditProfilePictureScreen from "./screens/screen-components/profile-screens/EditProfilePictureScreen";
import UpdateProfileScreen from "./screens/screen-components/profile-screens/UpdateProfileScreen";
import ViewUsersPostsScreen from "./screens/screen-components/profile-screens/UsersPosts";
import VoteScreen from "./screens/screen-components/profile-screens/VoteScreen";

// Okay okay

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


const theme = createTheme({
  lightColors: {
    secondary: '#EB5E28',
  },
  mode: 'light',
});

export const userContext = createContext(null);

export default function AppTabs() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  if (loggedIn) {

    return (
      <userContext.Provider value={ { currentUser, setCurrentUser } }>
        <ThemeProvider theme={theme}>
          <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen}/>
            <Tab.Screen name="Friends" component={FriendScreen} />
            <Tab.Screen name="Profile" options={{ headerShown: false }}>
                {() => (
                  <Stack.Navigator>
                    <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
                    <Stack.Screen name="EditProfilePictureScreen" component={EditProfilePictureScreen} />
                    <Stack.Screen name="UpdateProfileScreen" component={UpdateProfileScreen} />
                    <Stack.Screen name="ViewUsersPostsScreen" component={ViewUsersPostsScreen} />
                    <Stack.Screen name="VoteScreen" component={VoteScreen} />
                  </Stack.Navigator>
                )}
            </Tab.Screen>
            <Tab.Screen name="Trending" component={TrendingScreen} />
            <Tab.Screen name="Events" component={EventsScreen} />
          </Tab.Navigator>
          </NavigationContainer>
        </ThemeProvider>
      </userContext.Provider>
      )
    } else {
    return (
      <userContext.Provider value={ { currentUser, setCurrentUser } }>
        <ThemeProvider theme={theme}>
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
        </ThemeProvider>
      </userContext.Provider>
    );

  }
}
