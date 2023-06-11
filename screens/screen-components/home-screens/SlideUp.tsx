import React, { useRef, useState }  from 'react';
import {View, Button, Text, Dimensions, ViewStyle } from 'react-native';
import { useSafeAreaFrame } from 'react-native-safe-area-context';
import SlidingUpPanel from 'rn-sliding-up-panel';

const styles: {container: ViewStyle} = {
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'flex-end',
    justifyContent: 'center'
  }
};

const  SlideUp = () => {
const _panel = useRef(null);
const { height } = Dimensions.get('window');
const [draggableRange, setDraggableRange] = useState({
  top: (0.55 * height),
  bottom: 0
})


return (
  <View style={styles.container}>
    <Button title="show panel" onPress={() =>_panel.current.show()}/>
    <SlidingUpPanel ref={_panel} draggableRange={draggableRange}>
      <View style={styles.container}>
        <Text> it works</Text>
        <Button title="hide panle" onPress={() =>_panel.current.hide()}/>
      </View>
    </SlidingUpPanel>
  </View>
);

}

export default SlideUp;