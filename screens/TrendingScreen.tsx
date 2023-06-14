import React, { useState } from 'react';
import { Text, View } from "react-native";
import SearchSeries from './screen-components/trending-screen/SearchSeries';
import SeriesList from './screen-components/trending-screen/seriesList';
import series from '../series';

function TrendingScreen() {
  const [search, setSearch] = useState('');

  return (
    <View>
      <Text key="TrendingScreen">Trending Screen</Text>
      <SearchSeries search={search} setSearch={setSearch}/>
      <SeriesList search={search} series={series}/>
    </View>
  );
}

export default TrendingScreen;
