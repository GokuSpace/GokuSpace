import { SERVER } from '@env';
import { useNavigation } from '@react-navigation/native';
import { Button, Input } from '@rneui/themed';
import axios from 'axios';
import bcrypt from 'bcryptjs-react';
import * as Crypto from 'expo-crypto';
import React, { useContext, useState } from 'react';
import {
  Modal,
  Text,
  View,
  StyleSheet,
  KeyboardAvoidingView,
} from 'react-native';
import { userContext } from '../../App';
import SignupScreen from './SignupScreen';

export default function LoginScreen({ setLoggedIn }) {
  const navigation = useNavigation();
  const { setCurrentUser } = useContext(userContext);
  const [modalVisible, setModalVisible] = useState(false);
  const [readyPayload, setReadyPayload] = useState({
    email: '',
    password: '',
  });

  const verify = () => {
    bcrypt.setRandomFallback(async (len) => {
      const randomBytes = await Crypto.getRandomBytesAsync(len);
      return randomBytes;
    });

    const info = {
      email: readyPayload.email,
      password: hash(readyPayload.password),
    };
    axios
      .post(`http://${SERVER}/login`, info)
      .then((res) => {
        setCurrentUser(res.data);
        setLoggedIn(true);
      })
      .catch((err) => {
        console.log(err);
        setModalVisible(true);
      });
  };

  const hash = (potatoes) => {
    const salt = bcrypt.genSaltSync(10);
    const browns = bcrypt.hashSync(potatoes, salt);
    return browns;
  };

  const handleChange = (text, field) => {
    setReadyPayload({
      ...readyPayload,
      [field]: text,
    });
  };

  return (
    <>
      {/* <Modal visible={modalVisible} transparent={true} animationType="none">
    <View  className="flex-1 justify-center items-center bg-gray-300/50">
      <View className="p-2 justify-center items-center bg-gray-500 rounded-md">
        <Text>Username or password are incorrect.</Text>
        <Button title="Okay" onPress={() => setModalVisible(false)}></Button>
      </View>
    </View>
    </Modal> */}
      <KeyboardAvoidingView style={styles.outer} behavior="position">
        <View style={styles.container}>
          <Input
            onChangeText={(text) => handleChange(text, 'email')}
            value={readyPayload.email}
            placeholder="Email"
            textAlign="center"
          />
          <Input
            onChangeText={(text) => handleChange(text, 'password')}
            value={readyPayload.password}
            secureTextEntry={true}
            placeholder="Password"
            textAlign="center"
          />
          <Button title="Log In" onPress={() => setLoggedIn(true)} />
          <Button
            title="Create Account"
            onPress={() => navigation.navigate('SignUp')}
          />
        </View>
      </KeyboardAvoidingView>
    </>
  );
}

const styles = StyleSheet.create({
  outer: {
    flex: 1,
    flexGrow: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 100,
  },
  container: {
    flex: 1,
    flexGrow: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 75,
  },
  input: {},
  loginButton: {},
});
