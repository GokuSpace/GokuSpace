import { Text, View, Button, TextInput, Modal, KeyboardAvoidingView } from "react-native";
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import bcrypt from 'bcryptjs-react';

export default function SignupScreen({ setLoggedIn }) {
  const navigation = useNavigation();
  const [confirm, setConfirm] = useState('');
  const [error, setError] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [signupPage, setSignupPage] = useState(true);
  const [form, setForm] = useState({
    user: '',
    email: '',
    zipcode: '',
    password: '',
    firstName: '',
    lastName: '',
    favoriteAnimeId: '',
    FavoriteCaharacterId: ''
  });

  const validateEmail = () => {
    const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
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
  }

  const hash = (potatoes) => {
    const salt = bcrypt.genSaltSync(10);
    const browns = bcrypt.hashSync(potatoes, salt);
    return browns;
  }


  const changeForm = (text:string, field:string) => {
    setForm({
      ...form,
      [field]: text
    })
  }

  return (
    <>
      <Modal visible={modalVisible} transparent={true} animationType="none">
        <View  className="flex-1 justify-center items-center bg-gray-300/50">
          <View className="p-2 justify-center items-center bg-gray-500 rounded-md">
            {error === 'email'
            ? <Text>Invalid Email</Text>
            : <Text>Passwords do not match</Text>}
            <Button title="Okay" onPress={() => setModalVisible(false)}></Button>
          </View>
        </View>
      </Modal>

      <KeyboardAvoidingView behavior="position" className="flex-1 justify-center items-center">
        {signupPage
        ? <>
          <Text>Sign up</Text>
          <Text >UserName</Text>
          <TextInput onChangeText={text => changeForm(text, 'user')} value={form.user}/>
          <Text >Email</Text>
          <TextInput onChangeText={text => changeForm(text, 'email')} value={form.email}/>
          <Text>Zipcode</Text>
          <TextInput onChangeText={text => changeForm(text, 'zipcode')} value={form.zipcode}/>
          <Text>Password</Text>
          <TextInput onChangeText={text => changeForm(text, 'password')} value={form.password} secureTextEntry={true} passwordRules={null} />
          <Text>Confirm Password</Text>
          <TextInput onChangeText={setConfirm} value={confirm} secureTextEntry={true} passwordRules={null}/>
          <Button title="Next" onPress={() => setSignupPage(false)}></Button>
        </>
      : <>
          <Text >First Name</Text>
          <TextInput onChangeText={text => changeForm(text, 'firstName')} value={form.firstName}/>
          <Text>Last Name</Text>
          <TextInput onChangeText={text => changeForm(text, 'lastName')} value={form.lastName}/>
          <Text>Favorite Anime?</Text>
          <TextInput onChangeText={text => changeForm(text, 'favoriteAnimeId')} value={form.favoriteAnimeId} />
          <Text>Favorite Character?</Text>
          <TextInput onChangeText={text => changeForm(text, 'FavoriteCaharacterId')} value={form.FavoriteCaharacterId} />
          <Button title="Sign Up" onPress={() => setLoggedIn(true)}></Button>
      </>}
      </KeyboardAvoidingView>
    </>
  );
}
