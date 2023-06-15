/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import SearchSeries from './SearchSeries';
import SeriesList from './SeriesList';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';


const Picker = ({ data, opining, setNext }) => {
  const [search, setSearch] = useState('');

  return (
    <>
      <View>
        <Button title="skip" onPress={() => setNext(true)}/>
        <Text key="Picker"> {opining} </Text>
        <SearchSeries search={search} setSearch={setSearch} />
        <SeriesList search={search} series={data} setNext={setNext}/>
      </View>
    </>

  );

}

export default Picker;