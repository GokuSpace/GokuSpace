import {
  Text,
  View,
  Modal,
  KeyboardAvoidingView,
  StyleSheet,
  TextInput,
} from 'react-native';
import { Input, Button } from '@rneui/themed';
import React, { useContext, useState } from 'react';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import bcrypt from 'bcryptjs-react';
import AnimePicker from './AnimePicker';
import { userContext } from '../../App';
import * as Crypto from 'expo-crypto';
import { SERVER } from '@env';
import zipcodes from 'zipcodes';

// Set the random fallback using expo-random
export default function SignupScreen({ setLoggedIn }) {
  const navigation = useNavigation();

  const { currentUser, setCurrentUser } = useContext(userContext);
  const [confirm, setConfirm] = useState('');
  const [error, setError] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [signupPage, setSignupPage] = useState(true);
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    favoriteAnimeId: '',
    favoriteCharacter: '',
    username: '',
    email: '',
    zipcode: '',
    latitude: null,
    longitude: null,
    password: '',
  });

  const submitForm = () => {
    bcrypt.setRandomFallback(async (len) => {
      const randomBytes = await Crypto.getRandomBytesAsync(len);
      return randomBytes;
    });
    form.password = hash(form.password);
    axios
      .post(`http://${SERVER}/signup`, form)
      .then((res) => {
        setCurrentUser(res.data);
        setLoggedIn(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const validateEmail = () => {
    const re =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!re.test(form.email)) {
      setError('email');
      setModalVisible(!modalVisible);
    }
  };

  const checkForMatch = () => {
    if (form.password !== confirm) {
      setError('password');
      setModalVisible(!modalVisible);
    }
  };

  const hash = (potatoes) => {
    //const salt = bcrypt.genSaltSync(10);
    const browns = bcrypt.hashSync(potatoes, 10);
    return browns;
  };

  const formValidate1 = () => {
    // form validation if time
    setSignupPage(false);
  };

  const changeForm = (text: string, field: string) => {
    setForm({
      ...form,
      [field]: text,
    });
  };

  return (
    <KeyboardAvoidingView behavior="position" style={styles.outer}>
      {/* <Modal visible={modalVisible} transparent={true} animationType="none">
        <View  className="flex-1 justify-center items-center bg-gray-300/50">
          <View className="p-2 justify-center items-center bg-gray-500 rounded-md">
            <Text>Please complete all fields correctly.</Text>
            {error === 'email'
            ? <Text>Invalid Email</Text>
            : <Text>Passwords do not match</Text>}
            <Button title="Okay" onPress={() => setModalVisible(false)}></Button>
          </View>
        </View>
      </Modal> */}
      <View style={styles.nameContainer}>
        <Input
          onChangeText={(text) => changeForm(text, 'firstName')}
          value={form.firstName}
          placeholder="First Name"
          inputContainerStyle={styles.nameInput}
        />
        <Input
          onChangeText={(text) => changeForm(text, 'lastName')}
          value={form.lastName}
          placeholder="Last Name"
          inputContainerStyle={styles.nameInput}
        />
      </View>

      <Input
        onChangeText={(text) => changeForm(text, 'username')}
        value={form.username}
        placeholder="Username"
        inputContainerStyle={styles.input}
      />
      <Input
        onChangeText={(text) => changeForm(text, 'email')}
        value={form.email}
        placeholder="Email"
        inputContainerStyle={styles.input}
      />
      <Input
        onChangeText={(text) => changeForm(text, 'zipcode')}
        value={form.zipcode}
        placeholder="Zip Code"
        inputContainerStyle={styles.input}
      />
      <Input
        onChangeText={(text) => changeForm(text, 'password')}
        value={form.password}
        secureTextEntry={true}
        passwordRules={null}
        placeholder="Password"
        inputContainerStyle={styles.input}
      />
      <Input
        onChangeText={setConfirm}
        value={confirm}
        secureTextEntry={true}
        passwordRules={null}
        placeholder="Confirm Password"
        inputContainerStyle={styles.input}
      />
      <Button title="Sign Up" onPress={() => setLoggedIn(true)}></Button>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  outer: {
    flex: 1,
    // flexGrow: 1,
    // backgroundColor: 'white',
    // alignItems: 'center',
    // justifyContent: 'space-between',
    paddingTop: 75,
  },
  nameContainer: {
    flexDirection: 'row',
    width: '100%',
    // justifyContent: 'space-between',
    // width: '90%',
  },
  nameInput: {
    width: '50%',
  },
  input: {
    // width: '90%',
    // marginBottom: 10,
  },
  loginButton: {},
});
