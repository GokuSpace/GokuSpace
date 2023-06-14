import { SERVER } from '@env';
import { useNavigation } from '@react-navigation/native';
import { Button, Input } from '@rneui/themed';
import axios from 'axios';
import bcrypt from 'bcryptjs-react';
import * as Crypto from 'expo-crypto';
import { useContext, useState } from 'react';
import React, { Modal, Text, View } from "react-native";
import { userContext } from '../../App';
import SignupScreen from "./SignupScreen";

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
    <>
    <Modal visible={modalVisible} transparent={true} animationType="none">
    <View  className="flex-1 justify-center items-center bg-gray-300/50">
      <View className="p-2 justify-center items-center bg-gray-500 rounded-md">
        <Text>Username or password are incorrect.</Text>
        <Button title="Okay" onPress={() => setModalVisible(false)}></Button>
      </View>
    </View>
    </Modal>
    <View>
      <Text> Email </Text>
      <Input onChangeText={text => handleChange(text, 'email')} value={readyPayload.email} />
      <Text> Password </Text>
      <Input onChangeText={text => handleChange(text, 'password')} value={readyPayload.password} secureTextEntry={true} />
      <Button title="Log In" onPress={verify} />
      <Button title="Sign Up" onPress={() => navigation.navigate('SignUp')} />
    </View>
  </>
  );
}

export default LoginScreen;
