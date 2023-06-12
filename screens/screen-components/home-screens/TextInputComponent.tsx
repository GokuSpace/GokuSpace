import React from 'react';
import { Dimensions, TextInput, View } from 'react-native';

const MultilineTextInputExample = () => {
  const [value, onChangeText] = React.useState('');
  const { height } = Dimensions.get('window');

  // If you type something in the text box that is a color, the background will change to that
  // color.
  return (
    <View
      style={{
        backgroundColor: 'white',
        borderBottomColor: '#000000',
        borderBottomWidth: 1,
        justifyContent: 'flex-start'
      }}>
      <TextInput
        editable
        multiline
        numberOfLines={1}
        maxLength={40}
        onChangeText={text => onChangeText(text)}
        value={value}
        placeholder='Enter your post...'
        style={{padding: 10}}
      />
    </View>
  );
};

export default MultilineTextInputExample;