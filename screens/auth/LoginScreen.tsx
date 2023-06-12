import React, { Text, View, Button, TextInput } from "react-native";
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import SignupScreen from "./SignupScreen";
import bcrypt from 'bcryptjs-react';

function LoginScreen({ setLoggedIn }) {
  const navigation = useNavigation();
  const [readyPayload, setReadyPayload] = useState({
    email: '',
    password: ''
  });

  const handleChange = (text, field) => {
    setReadyPayload({
      ...readyPayload,
      [field]: text
    })
  }

  return (
    <View>
      <Text> Email </Text>
      <TextInput onChangeText={text => handleChange(text, 'email')} value={readyPayload.email} />
      <Text> Password </Text>
      <TextInput onChangeText={text => handleChange(text, 'password')} value={readyPayload.password} secureTextEntry={true} />
      <Button title="Log In" onPress={() => setLoggedIn(true)} />
      <Button title="Sign Up" onPress={() => navigation.navigate('SignUp')} />
    </View>
  );
}

export default LoginScreen;
