import { Button } from '@rneui/themed';
import React, { useEffect, useState } from 'react';
import { Animated, Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export const SlideUpModal = ({ isVisible, onClose }) => {
  const [slideAnim] = useState(new Animated.Value(Dimensions.get('window').height));

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
        // styles.container,
        // { transform: [{ translateY: slideAnim }] }
      ]}
    >
      <View style={styles.modal}>
        <TextInput
          placeholder="Write your post here..."
          multiline
          style={styles.textInput}
          autoFocus={true}
        />
        <View style={styles.buttonView}>
        <Button
          title="Cancel"
          buttonStyle={{ backgroundColor: 'rgba(214, 61, 57, 1)' }}
          containerStyle={{
            height: 40,
            width: 150,
            marginHorizontal: 10,
            marginVertical: 10,
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
            marginHorizontal: 10,
            marginVertical: 10,
          }}
          onPress={onClose}
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
  buttonView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
});
