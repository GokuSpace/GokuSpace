import {
  Text,
  View,
  Modal,
  KeyboardAvoidingView,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React, { useContext, useState } from 'react';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import bcrypt from 'bcryptjs-react';
import AnimePicker from './AnimePicker-unused';
import { userContext } from '../../App';
import * as Crypto from 'expo-crypto';
import { SERVER } from '@env';
import zipcodes from 'zipcodes';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

// Set the random fallback using expo-random
export default function SignupScreen({ setLoggedIn }) {
  const navigation = useNavigation();
  const [favoriteAnime, setFavoriteAnime] = useState(null);
  const [favoriteAnimeChar, setFavoriteAnimeChar] = useState(null);
  const { currentUser, setCurrentUser } = useContext(userContext);
  const [confirm, setConfirm] = useState('');
  const [error, setError] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [signupPage, setSignupPage] = useState(true);
  const [form, setForm] = useState({
    firstName: 'Testy',
    lastName: 'McTesterson',
    favoriteAnimeId: '',
    favoriteCharacter: '',
    username: 'dragonballerz1',
    email: 'gokuislife@hotmail.com',
    zipcode: '90210',
    latitude: null,
    longitude: null,
    password: 'password',
  });
  const [image, setImage] = useState<string>('');
  const handleImageSelect = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

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
    <KeyboardAvoidingView style={styles.outer} behavior="height">
      <SafeAreaView style={styles.inner}>
        <View style={styles.photoContainer}>
          {image ? (
            <Image
              source={{ uri: image }}
              style={{ width: 150, height: 150, borderRadius: 100 }}
            />
          ) : (
            <MaterialIcons name="person" size={150} color="black" />
          )}
          <TouchableOpacity
            onPress={handleImageSelect}
            style={styles.addPhotoButton}
          >
            <Text style={styles.addPhotoButtonText}>Add Photo</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.nameContainer}>
          <TextInput
            onChangeText={(text) => changeForm(text, 'firstName')}
            value={form.firstName}
            placeholder="First Name"
            style={styles.nameInput}
          />
          <TextInput
            onChangeText={(text) => changeForm(text, 'lastName')}
            value={form.lastName}
            placeholder="Last Name"
            style={styles.nameInput}
          />
        </View>

        <TextInput
          onChangeText={(text) => changeForm(text, 'username')}
          value={form.username}
          placeholder="Username"
          style={styles.input}
        />
        <TextInput
          onChangeText={(text) => changeForm(text, 'email')}
          value={form.email}
          placeholder="Email"
          style={styles.input}
        />
        <TextInput
          onChangeText={(text) => changeForm(text, 'zipcode')}
          value={form.zipcode}
          placeholder="Zip Code"
          style={styles.input}
        />
        <TextInput
          onChangeText={(text) => changeForm(text, 'password')}
          value={form.password}
          secureTextEntry={true}
          passwordRules={null}
          placeholder="Password"
          style={styles.input}
        />
        <TextInput
          onChangeText={setConfirm}
          value={confirm}
          secureTextEntry={true}
          passwordRules={null}
          placeholder="Confirm Password"
          style={styles.input}
        />

        <TouchableOpacity
          onPress={() => navigation.navigate('seriesPicker')}
          style={styles.signUpButton}
        >
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
          style={styles.backButton}
        >
          <Text style={styles.backButtonText}>Go Back to Login</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

const main = '#EB5E28';

const styles = StyleSheet.create({
  outer: {
    flex: 1,
    padding: 35,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  inner: {
    flex: 1,
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 38,
    marginVertical: 10,
  },
  photoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    // height: '6%',
    // marginVertical: 10,
  },
  nameInput: {
    textAlign: 'center',
    width: '48%',
    height: '100%',
    borderColor: main,
    borderWidth: 3,
    borderRadius: 16,
    fontSize: 22,
  },
  favsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 38,
    marginVertical: 10,
  },
  preFavInput: {
    textAlign: 'center',
    width: '48%',
    height: '100%',
    borderColor: main,
    borderWidth: 3,
    borderRadius: 16,
    color: 'gray',
    fontSize: 16,
  },
  postFavInput: {
    textAlign: 'center',
    width: '48%',
    height: '100%',
    borderColor: main,
    borderWidth: 3,
    borderRadius: 16,
    fontSize: 16,
  },
  input: {
    textAlign: 'center',
    marginVertical: 10,
    height: 38,
    borderColor: main,
    borderWidth: 3,
    borderRadius: 16,
    fontSize: 22,
  },
  signUpButton: {
    borderRadius: 16,
    marginVertical: 10,
    backgroundColor: main,
    height: '6%',
    justifyContent: 'center',
    fontSize: 22,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 22,
  },
  backButton: {
    borderRadius: 16,
    marginVertical: 10,
    backgroundColor: 'black',
    height: '5%',
    width: '80%',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  backButtonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 22,
  },
  addPhotoButton: {
    borderRadius: 16,
    backgroundColor: 'black',
    height: '12%',
    width: '25%',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 10,
  },
  addPhotoButtonText: {
    textAlign: 'center',
    color: 'white',
  },
});
