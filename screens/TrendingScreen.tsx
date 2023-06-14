import React, { useState } from 'react';
import { Text, View } from "react-native";
import SearchSeries from './screen-components/trending-screen/SearchSeries';
import SeriesList from './screen-components/trending-screen/SeriesList';
import series from '../series';
import { Button } from 'react-native-elements';

function TrendingScreen() {
  const [search, setSearch] = useState('');

  return (
    <View>
      <Text key="TrendingScreen"> What are you watching? </Text>
      <SearchSeries search={search} setSearch={setSearch}/>
      <SeriesList search={search} series={series}/>
      <Button title="skip"/>
    </View>
  );
}

export default TrendingScreen;
