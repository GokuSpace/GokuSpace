import { Text, View, Modal, KeyboardAvoidingView } from "react-native";
import { Input, Button } from '@rneui/themed';
import React, { useContext, useState } from 'react';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import bcrypt from 'bcryptjs-react';
import AnimePicker from "./AnimePicker";
import { userContext } from '../../App';

export default function SignupScreen({ setLoggedIn }) {
  const navigation = useNavigation();

  const { setCurrentUser } = useContext(userContext);
  const [confirm, setConfirm] = useState('');
  const [error, setError] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [signupPage, setSignupPage] = useState(true);
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    favoriteAnimeId: '',
    favoriteCharacter: '',
    user: '',
    email: '',
    zipcode: '',
    password: '',
  });

  const submitForm = () => {
    form.password = hash(form.password)
    axios.post(`http://${process.env.SERVER}/signup`, form)
      .then(res => {
        setCurrentUser(res.data)
        setLoggedIn(true);
      })
      .catch(err => {
        console.log(err)
      })
  }

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
    //const salt = bcrypt.genSaltSync(10);
    const browns = bcrypt.hashSync(potatoes, 10);
    return browns;
  }



  const formValidate1 = () => {
    // form validation if time
    setSignupPage(false);
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
            <Text>Please complete all fields correctly.</Text>
            {error === 'email'
            ? <Text>Invalid Email</Text>
            : <Text>Passwords do not match</Text>}
            <Button title="Okay" onPress={() => setModalVisible(false)}></Button>
          </View>
        </View>
      </Modal>

      {/* <KeyboardAvoidingView behavior="position" className="flex-1 justify-center"> */}
        {signupPage
        ? <>
        <Text>First Name</Text>
        <Input onChangeText={text => changeForm(text, 'firstName')} value={form.firstName}/>
        <Text>Last Name</Text>
        <Input onChangeText={text => changeForm(text, 'lastName')} value={form.lastName}/>
        <AnimePicker form={form} setForm={setForm} />
      <Button title="Next" onPress={formValidate1}></Button>
    </>
      : <>
      <Text>Username</Text>
      <Input onChangeText={text => changeForm(text, 'user')} value={form.user}/>
      <Text>Email</Text>
      <Input onChangeText={text => changeForm(text, 'email')} value={form.email}/>
      <Text>Zipcode</Text>
      <Input onChangeText={text => changeForm(text, 'zipcode')} value={form.zipcode}/>
      <Text>Password</Text>
      <Input onChangeText={text => changeForm(text, 'password')} value={form.password} secureTextEntry={true} passwordRules={null}/>
      <Text>Confirm Password</Text>
      <Input onChangeText={setConfirm} value={confirm} secureTextEntry={true} passwordRules={null}/>
      <Button title="Sign Up" onPress={() => setLoggedIn(true)}></Button>
    </>}
      {/* </KeyboardAvoidingView> */}
    </>
  );
}
