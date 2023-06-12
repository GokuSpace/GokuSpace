/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useRef, useState } from 'react';
import { View, Button, Dimensions, ViewStyle } from 'react-native';
import SlidingUpPanel from 'rn-sliding-up-panel';
import { Avatar } from '@rneui/themed';
import { TextInput } from 'react-native-gesture-handler';

const styles: { container: ViewStyle } = {
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  }
};

const SlideUp = ({ isPost, isUser, character }) => {
  const _panel = useRef(null);
  const { height } = Dimensions.get('window');
  const [draggableRange, setDraggableRange] = useState({
    top: (0.55 * height),
    bottom: 0
  })


  return (
    <View style={styles.container}>
      <Button title="show panel" onPress={() => _panel.current.show()} />
      <SlidingUpPanel ref={_panel} draggableRange={draggableRange}>
        <View style={styles.container}>
          {isPost &&
          <>
          <TextInput style={{borderColor:'black', borderWidth: 1}} placeholder="Type here..."/>
          <Button title="upload image"/>
          </>
          }
          <Button title="hide panle" onPress={() => _panel.current.hide()} />
          {isUser && (
            <>
            <Avatar rounded
              source={{
                uri: character.image_url,
              }} />
              <Button title='Postes' />
              <Button title='Profile' />
              <Button title='Votes' />

            </>
          )}
        </View>
      </SlidingUpPanel>
    </View>
  );

}

export default SlideUp;