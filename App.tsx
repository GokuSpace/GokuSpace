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
import EditProfilePictureScreen from "./screens/screen-components/profile-screens/EditProfilePictureScreen";
import UpdateProfileScreen from "./screens/screen-components/profile-screens/UpdateProfileScreen";
import ViewUsersPostsScreen from "./screens/screen-components/profile-screens/ViewUsersPostsScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  return (
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
            </Stack.Navigator>
          )}
        </Tab.Screen>
        <Tab.Screen name="Trending" component={TrendingScreen} />
        <Tab.Screen name="Events" component={EventsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
