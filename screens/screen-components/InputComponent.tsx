import { Icon, Input } from '@rneui/themed';
import React from 'react';
import { Dimensions, Text, View } from 'react-native';

export default function InputComponent() {
const { height } = Dimensions.get('window');
return (
  <>
    <Input
      placeholder='Write your post...'
      containerStyle={{backgroundColor: 'white'}}
      // inputContainerStyle={{height: 0.40 * height}}
      multiline={true}
    />
  </>
);
}