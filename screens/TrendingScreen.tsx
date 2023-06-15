import React, { useState } from 'react';
import { Text, View } from "react-native";
import SearchSeries from './screen-components/trending-screen/SearchSeries';
import SeriesList from './screen-components/trending-screen/SeriesList';
import series from '../series';
import { Button } from 'react-native-elements';
import TrendingView from './screen-components/trending-screen/TrendingView';

function TrendingScreen() {
  const [search, setSearch] = useState('');
  const [skip, setSkip] = useState(false);

  return (
    <>
      {!skip &&
        <View>
          <Text key="TrendingScreen"> What are you watching? </Text>
          <SearchSeries search={search} setSearch={setSearch} />
          <SeriesList search={search} series={series} />
          <Button title="skip" onPress={() => setSkip(true)}/>
        </View>
      }
      {skip &&
        <TrendingView />
      }
    </>
  );
}

export default TrendingScreen;
