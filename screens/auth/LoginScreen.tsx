import React, { Text, View, Modal } from "react-native";
import { Input, Button } from '@rneui/themed';
import { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import SignupScreen from "./SignupScreen";
import axios from 'axios';
import {SERVER} from '@env';
import bcrypt from 'bcryptjs-react';
import * as Crypto from 'expo-crypto';
import { userContext } from "../../App";

function LoginScreen({ setLoggedIn }) {
  const navigation = useNavigation();
  const { setCurrentUser } = useContext(userContext)
  const [modalVisible, setModalVisible] = useState(false);
  const [readyPayload, setReadyPayload] = useState({
    email: '',
    password: ''
  });

  const verify = () => {
    bcrypt.setRandomFallback(async (len) => {
      const randomBytes = await Crypto.getRandomBytesAsync(len);
      return randomBytes;
    });

    const info = {
      email: readyPayload.email,
      password: hash(readyPayload.password)
    }
    axios.post(`http://${SERVER}/login`, info)
      .then((res) => {
        setCurrentUser(res.data)
        setLoggedIn(true);
      })
      .catch((err) => {
        console.log(err)
        setModalVisible(true);
      })
  }

  const hash = (potatoes) => {
    const salt = bcrypt.genSaltSync(10);
    const browns = bcrypt.hashSync(potatoes, salt);
    return browns;
  }

  const handleChange = (text, field) => {
    setReadyPayload({
      ...readyPayload,
      [field]: text
    })
  }

  return (
    <View>
      <Text> Email </Text>
      <Input onChangeText={text => handleChange(text, 'email')} value={readyPayload.email} />
      <Text> Password </Text>
      <Input onChangeText={text => handleChange(text, 'password')} value={readyPayload.password} secureTextEntry={true} />
      <Button title="Log In" onPress={() => setLoggedIn(true)} />
      <Button title="Sign Up" onPress={() => navigation.navigate('SignUp')} />
    </View>
  );
}

export default LoginScreen;
