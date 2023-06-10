import React, { Text, View, Button } from "react-native";
import { useNavigation } from '@react-navigation/native';
import SignupScreen from "./SignupScreen";

function LoginScreen({setLoggedIn}) {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Log In Screen</Text>
      <Button title="Log In" onPress={() => setLoggedIn(true)}>Log In</Button>
      <Button title="Sign Up" onPress={() => navigation.navigate('SignUp')}>Sign Up</Button>
    </View>
  );
}

export default LoginScreen;
