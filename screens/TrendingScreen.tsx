import React, { useState } from 'react';
import { View, StyleSheet } from "react-native";
import TrendingView from './screen-components/trending-screen/TrendingView';
import animeSeries from '../animeSeries';
import Picker from './screen-components/trending-screen/Picker';


function TrendingScreen() {
  const [skip, setSkip] = useState(false);

  return (
    <>
      {!skip &&

          <Picker data={animeSeries} opining={'What are you watching?'} next={setSkip}/>
      }
      {skip &&
        <TrendingView />
      }
    </>
  );
}

export default TrendingScreen;

