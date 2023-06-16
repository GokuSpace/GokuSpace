import { DEV } from '@env';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Avatar, Icon, ThemeProvider, createTheme } from '@rneui/themed';
import React, { createContext, useState } from 'react';
import 'react-native-gesture-handler';
import EventsScreen from './screens/EventsScreen';
import FriendScreen from './screens/FriendScreen';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import TrendingScreen from './screens/TrendingScreen';
import LoginScreen from './screens/auth/LoginScreen';
import SignupScreen from './screens/auth/SignupScreen';
import EventDetails from './screens/screen-components/events-screens/EventDetails';
import NewEvent from './screens/screen-components/events-screens/NewEvent';
import VotesHistory from './screens/screen-components/home-screens/VotesHistory';
import EditProfilePictureScreen from './screens/screen-components/profile-screens/EditProfilePictureScreen';
import UpdateProfileScreen from './screens/screen-components/profile-screens/UpdateProfileScreen';
import ViewUsersPostsScreen from './screens/screen-components/profile-screens/UsersPosts';
import animeSeries from './animeSeries';
import animeChars from './dbzChars';
import SeriesPicker from './screens/auth/seriesPicker/SeriesPicker';
import CharPicker from './screens/auth/charPicker/CharPicker';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const theme = createTheme({
  lightColors: {
    primary: '#EB5E28',
  },
  mode: 'light',
});

export const userContext = createContext(null);

export default function AppTabs() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  if (loggedIn) {
    return (
      <userContext.Provider value={{ currentUser, setCurrentUser }}>
        <ThemeProvider theme={theme}>
          <NavigationContainer>
            <Tab.Navigator
            screenOptions={{
              headerShown: true,
              tabBarActiveTintColor: '#EB5E28',
              tabBarInactiveTintColor: '#252422',
              tabBarStyle: {
                backgroundColor: 'white',
                paddingBottom: 5,
                borderTopColor: 'transparent',
                shadowOpacity: 0
              }}}
            >
              <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                  tabBarIcon: ({ color, size }) => (
                    <Icon
                      name="home"
                      type="font-awesome-5"
                      color={color}
                      size={size}
                    />
                  ),
                }}
              />
              <Tab.Screen
                name="Friends"
                component={FriendScreen}
                options={{
                  tabBarIcon: ({ color, size }) => (
                    <Icon
                      name="user-friends"
                      type="font-awesome-5"
                      color={color}
                      size={size}
                    />
                  ),
                }}
              />
              <Tab.Screen
                name="Trending"
                component={TrendingScreen}
                options={{
                  tabBarIcon: ({ color, size }) => (
                    <Icon
                      name="star"
                      type="font-awesome-5"
                      color={color}
                      size={size}
                    />
                  ),
                }}
              />

              <Tab.Screen
                name="Events"
                options={{
                  headerShown: false,
                  tabBarIcon: ({ color, size }) => (
                    <Icon
                      name="calendar"
                      type="font-awesome-5"
                      color={color}
                      size={size}
                    />
                  ),
                }}
              >
                {() => (
                  <Stack.Navigator>
                    <Stack.Screen
                      name="Events"
                      component={EventsScreen}
                       // Hide the header for this screen
                    />
                    <Stack.Screen
                      name="Event Details"
                      component={EventDetails}
                       // Hide the header for this screen
                    />
                    <Stack.Screen name="New Event" component={NewEvent} />
                  </Stack.Navigator>
                )}
              </Tab.Screen>

              <Tab.Screen
                name="Profile"
                options={{
                  headerShown: false,
                  tabBarIcon: ({ color, size }) => (
                    <Avatar
                      source={{
                        uri: 'https://avatarfiles.alphacoders.com/347/347546.png',
                      }}
                      size={size}
                      rounded
                    />
                  ),
                }}
              >
                {() => (
                  <Stack.Navigator>
                    <Stack.Screen
                      name="ProfileScreen"
                      component={ProfileScreen}
                    />
                    <Stack.Screen
                      name="EditProfilePictureScreen"
                      component={EditProfilePictureScreen}
                    />
                    <Stack.Screen
                      name="UpdateProfileScreen"
                      component={UpdateProfileScreen}
                    />
                    <Stack.Screen
                      name="ViewUsersPostsScreen"
                      component={ViewUsersPostsScreen}
                    />
                    <Stack.Screen
                      name="VotesHistory"
                      component={VotesHistory}
                    />
                  </Stack.Navigator>
                )}
              </Tab.Screen>
            </Tab.Navigator>
          </NavigationContainer>
        </ThemeProvider>
      </userContext.Provider>
    );
  } else {
    return (
      <userContext.Provider value={{ currentUser, setCurrentUser }}>
        <ThemeProvider theme={theme}>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerShown: false,
              }}
            >
              <Stack.Screen name="Login">
                {(props) => (
                  <LoginScreen {...props} setLoggedIn={setLoggedIn} />
                )}
              </Stack.Screen>
              <Stack.Screen name="SignUp">
                {(props) => (
                  <SignupScreen {...props} setLoggedIn={setLoggedIn} />
                )}
              </Stack.Screen>
              <Stack.Screen name="seriesPicker">
                {(props) => (
                  <SeriesPicker
                    {...props}
                    data={animeSeries}
                    opining={"What's your favorite Series?"}
                  />
                )}
              </Stack.Screen>
              <Stack.Screen name="charPicker">
                {(props) => (
                  <CharPicker
                    {...props}
                    data={animeChars}
                    opining={"Who's your favorite character?"}
                    setLoggedIn={setLoggedIn}
                  />
                )}
              </Stack.Screen>
            </Stack.Navigator>
          </NavigationContainer>
        </ThemeProvider>
      </userContext.Provider>
    );
  }
}
