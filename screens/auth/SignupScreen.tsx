import { Text, View, Button, TextInput, Modal } from "react-native";
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import bcrypt from 'bcryptjs-react';

export default function SignupScreen({ setLoggedIn }) {
  const navigation = useNavigation();
  const [confirm, setConfirm] = useState('');
  const [error, setError] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [form, setForm] = useState({
    user: '',
    email: '',
    zipcode: '',
    password: ''
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

    modalVisible 
    ?<Modal>
      <View className="flex-1 justify-center items-center">
        {error === 'email' 
        ? <Text>Invalid Email</Text> 
        : <Text>Passwords do not match</Text>}
      </View>
    </Modal>
    :<View>
      <Text>Sign up</Text>
        <Text >UserName</Text>
        <TextInput onChangeText={text => changeForm(text, 'user')} value={form.user}/>
        <Text >Email</Text>
        <TextInput onChangeText={text => changeForm(text, 'email')} value={form.email} onSubmitEditing={validateEmail}/>
        <Text>Zipcode</Text>
        <TextInput onChangeText={text => changeForm(text, 'zipcode')} value={form.zipcode}/>
        <Text>Password</Text>
        <TextInput onChangeText={text => changeForm(text, 'password')} value={form.password} secureTextEntry={true}/>
        {/* <Text>Confirm Password</Text>
        <TextInput onChangeText={setConfirm} value={confirm} onSubmitEditing={checkForMatch}/> */}
      <Button title="Sign Up" onPress={() => setLoggedIn(true)}></Button>
    </View>

  );
}
