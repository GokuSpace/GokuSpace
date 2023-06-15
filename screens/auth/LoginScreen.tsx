import { SERVER } from '@env';
import { useNavigation } from '@react-navigation/native';
import { Button, Input } from '@rneui/themed';
import axios from 'axios';
import bcrypt from 'bcryptjs-react';
import * as Crypto from 'expo-crypto';
import React, { useContext, useState } from 'react';
import {
  TextInput,
  Text,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Image,
  Pressable,
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
      <View style={styles.outer}>
        <Text style={styles.title}>GokuSpace</Text>
        <Image
          source={require('../../assets/gokuHair.png')}
          style={{ width: 200, height: 200, alignSelf: 'center' }}
          resizeMode="contain"
        />

        <TextInput
          onChangeText={(text) => handleChange(text, 'email')}
          value={readyPayload.email}
          placeholder="Email"
          textAlign="center"
          style={styles.input}
        />
        <TextInput
          onChangeText={(text) => handleChange(text, 'password')}
          value={readyPayload.password}
          secureTextEntry={true}
          placeholder="Password"
          textAlign="center"
          style={styles.input}
        />

        <Pressable onPress={() => setLoggedIn(true)} style={styles.logInButton}>
          <Text style={styles.buttonText}>Log In</Text>
        </Pressable>

        <Pressable
          onPress={() => navigation.navigate('SignUp')}
          style={styles.signUpButton}
        >
          <Text style={styles.signUpButtonText}>Create Account</Text>
        </Pressable>
      </View>
    </>
  );
}

const main = '#EB5E28';

const styles = StyleSheet.create({
  outer: {
    flex: 1,
    margin: 35,
    justifyContent: 'center',
  },
  title: {
    fontSize: 42,
    fontWeight: '600',
    alignSelf: 'center',
  },
  logInButton: {
    borderRadius: 16,
    marginVertical: 10,
    backgroundColor: main,
    height: '6%',
    justifyContent: 'center',
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 22,
  },
  signUpButton: {
    borderRadius: 16,
    marginVertical: 10,
    backgroundColor: 'black',
    height: '5%',
    width: '80%',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  signUpButtonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 22,
  },
  input: {
    textAlign: 'center',
    marginVertical: 10,
    height: '6%',
    borderColor: main,
    borderWidth: 3,
    borderRadius: 16,
    fontSize: 22,
  },
  loginButton: {},
});
