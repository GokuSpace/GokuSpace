import { BottomSheet, Button, ListItem } from '@rneui/themed';
import React, { useState } from 'react';
import { Dimensions, StyleSheet, View, ViewStyle } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import InputComponent from '../InputComponent';
import MultilineTextInputExample from './TextInputComponent';

type BottomSheetComponentProps = {};

const BottomSheetComponent: React.FunctionComponent<BottomSheetComponentProps> = () => {
const [isVisible, setIsVisible] = useState(false);
// const halfScreenHeight = Dimensions.get('window').height / 2;


return (
  <SafeAreaProvider>
    <Button
      title="Open Bottom Sheet"
      onPress={() => setIsVisible(true)}
      buttonStyle={styles.button}
    />
    <BottomSheet modalProps={{}} isVisible={isVisible} >
      <MultilineTextInputExample />
        <ListItem
          key="cancelButton"
          containerStyle={ {backgroundColor: 'red'} }
          onPress={() => setIsVisible(false)}
        >
          <ListItem.Content>
            <ListItem.Title style={ {color: 'white'} }>Cancel</ListItem.Title>
          </ListItem.Content>
        </ListItem>
    </BottomSheet>
  </SafeAreaProvider>
);
};

const styles = StyleSheet.create({
button: {
  margin: 10,
},
});

export default BottomSheetComponent;