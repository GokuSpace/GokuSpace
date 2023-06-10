import React, { Text, View, Button, TextInput } from "react-native";
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

export default function SignupScreen({ setLoggedIn }) {
  const navigation = useNavigation();
  
  const [confirm, setConfirm] = useState('');
  const [form, setForm] = useState({
    user: '',
    email: '',
    zipcode: '',
    password: ''
  });

  const changeForm = (text:string, field:string) => {
    setForm({
      ...form,
      [field]: text
    })
  }

  return (
    <View>
      <Text>Sign up</Text>
        <Text >UserName</Text>
        <TextInput onChangeText={text => changeForm(text, 'user')} value={form.user}/>
        <Text >Email </Text>
        <TextInput onChangeText={text => changeForm(text, 'email')} value={form.email}/>
        <Text>Zipcode </Text>
        <TextInput onChangeText={text => changeForm(text, 'zipcode')} value={form.zipcode}/>
        <Text>Password </Text>
        <TextInput onChangeText={text => changeForm(text, 'password')} value={form.password}/>
        <Text>Confirm Password </Text>
        <TextInput onChangeText={setConfirm} value={confirm}/>
      <Button onPress={() => setLoggedIn(true)} title="Sign Up">Sign Up</Button>
    </View>
  );
}
