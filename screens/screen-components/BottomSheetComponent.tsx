import { BottomSheet, Button, ListItem } from '@rneui/themed';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import InputComponent from './InputComponent';

type BottomSheetComponentProps = {};

const BottomSheetComponent: React.FunctionComponent<BottomSheetComponentProps> = () => {
const [isVisible, setIsVisible] = useState(false);
// const list = [
//   { title: 'List Item 1' },
//   { title: 'List Item 2' },
//   {
//     title: 'Cancel',
//     containerStyle: { backgroundColor: 'red' },
//     titleStyle: { color: 'white' },
//     onPress: () => setIsVisible(false),
//   },
// ];

return (
  <SafeAreaProvider>
    <Button
      title="Open Bottom Sheet"
      onPress={() => setIsVisible(true)}
    />
    <BottomSheet modalProps={{}} isVisible={isVisible}>
      <InputComponent />
    </BottomSheet>
  </SafeAreaProvider>
);
};

export default BottomSheetComponent;