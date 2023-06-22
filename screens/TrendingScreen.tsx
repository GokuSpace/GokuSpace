import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import TrendingView from './screen-components/trending-screen/TrendingView';
import animeSeries from '../animeSeries';
import Picker from './screen-components/trending-screen/Picker';

function TrendingScreen() {
  const [skip, setSkip] = useState(false);

  return (
    <View style={styles.view}>
      {!skip && (
        <Picker
          data={animeSeries}
          opining={'What are you watching?'}
          setNext={setSkip}
        />
      )}
      {skip && <TrendingView />}
    </View>
  );
}

export default TrendingScreen;

const styles = StyleSheet.create({
  view: {
backgroundColor:'white',
flex:1
  },

});