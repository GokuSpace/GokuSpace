import { Button } from '@rneui/themed';
import * as ImagePicker from 'expo-image-picker';
import React, { useEffect, useState, useContext } from 'react';
import { Animated, Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import axios from 'axios';
import { userContext } from '../../../App';
import {SERVER} from '@env';

export const SlideUpModal = ({ isVisible, onClose }) => {
  const [slideAnim] = useState(new Animated.Value(Dimensions.get('window').height));
  const {currentUser} = useContext(userContext)
  const [postBody, setPostBody] = useState('');

  const submitPost = () => {
    axios.post(`http://${SERVER}/posts`, {
      authorId: currentUser.id,
      title: currentUser.username,
      body: postBody
    })
    .then(res => {
      onClose()
    })
    .catch(err => {
      console.log(err)
    })
  }

  const pickImageAsync = async () => {
  const result = await ImagePicker.launchImageLibraryAsync({
    allowsEditing: true,
    quality: 1,
  });

  if (!result.canceled) {
    console.log(result);
  } else {
    alert('You did not select any image.');
  }
}

  useEffect(() => {
    Animated.timing(
      slideAnim,
      {
        toValue: isVisible ? 0 : Dimensions.get('window').height,
        duration: 300,
        useNativeDriver: false,
      }
    ).start();
  }, [isVisible]);

  return (
    <Animated.View
      style={[
        styles.container,
        { transform: [{ translateY: slideAnim }] }
      ]}
    >
      <View style={styles.modal}>
        <TextInput
          placeholder="Write your post here..."
          multiline
          style={styles.textInput}
          value={postBody}
          onChange={(e) => setPostBody(e.target.value)}
          autoFocus={true}
        />
        <View style={styles.addImage}>
        <Button
          title="Add Image"
          icon={{
            name: 'upload',
            type: 'font-awesome',
            size: 15,
            color: 'white',
          }}
          iconContainerStyle={{ marginRight: 10 }}
          titleStyle={{ fontWeight: '700' }}
          buttonStyle={{
            backgroundColor: 'rgba(90, 154, 230, 1)',
            borderColor: 'transparent',
            borderWidth: 0,
            borderRadius: 30,
          }}
          containerStyle={{
            width: 150,
            marginHorizontal: 1,
            marginVertical: 5,
            bottom: 10
          }}
          onPress={pickImageAsync}
        />
        </View>
        <View style={styles.buttonView}>
        <Button
          title="Cancel"
          buttonStyle={{ backgroundColor: 'rgba(214, 61, 57, 1)' }}
          containerStyle={{
            height: 40,
            width: 150,
            marginHorizontal: 10,
            marginVertical: 5,
          }}
          titleStyle={{ color: 'white', marginHorizontal: 20 }}
          onPress={onClose}
        />
        <Button
          title="Post"
          buttonStyle={{
            backgroundColor: 'rgba(78, 116, 289, 1)',
            borderRadius: 3,
          }}
          containerStyle={{
            width: 150,
            marginHorizontal: 1,
            marginVertical: 5,
          }}
          onPress={submitPost}
        />
        </View>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modal: {
    marginTop: 'auto',
    backgroundColor: 'white',
    height: '50%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  textInput: {
    height: 100,
    margin: 20,
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
  },
  addImage: {
    display: 'flex',
    flexDirection: 'row-reverse',
  },
  buttonView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: "space-between"
  }
});
