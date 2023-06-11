import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { withExpoSnack, styled } from 'nativewind';
import React, { Text, View } from 'react-native';
import 'react-native-gesture-handler';
import EventsScreen from './screens/EventsScreen';
import FriendScreen from './screens/FriendScreen';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import TrendingScreen from './screens/TrendingScreen';
import { ThemeProvider, createTheme } from '@rneui/themed';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Okay okay

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const theme = createTheme({
  lightColors: {
    secondary: '#EB5E28',
  },
  mode: 'light',
});

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Friends" component={FriendScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
            <Tab.Screen name="Trending" component={TrendingScreen} />
            <Tab.Screen name="Events" component={EventsScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
