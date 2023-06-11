import React, { useRef }  from 'react';
import {View, Button, Text } from 'react-native';
import SlidingUpPanel from 'rn-sliding-up-panel';
import SLidingUpPanel from 'rn-sliding-up-panel';

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'white',
    aligneIems: 'center',
    justifyContent: 'center'
  }
};

const  SlideUp = () => {
const _panel = useRef(null);
return (
  <View style={styles.container}>
    <Button title="show panel" onPress={() => _panel.current.show()}/>
    <SlidingUpPanel ref={_panel}>
      <View style={styles.container}>
        <Text> it works</Text>
        <Button title="hide panle" onPress={() => _panel.current.hide()}/>
      </View>

    </SlidingUpPanel>
  </View>
);

}

export default SlideUp;