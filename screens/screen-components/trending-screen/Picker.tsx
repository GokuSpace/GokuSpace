/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import SearchSeries from './SearchSeries';
import SeriesList from './SeriesList';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

const Picker = ({ data, opining, setNext }) => {
  const [search, setSearch] = useState('');

  return (
    <>
      <View style={styles.outer}>
        <Text key="Picker" style={styles.promptText}>
          {opining}
        </Text>

        <SearchSeries search={search} setSearch={setSearch} />

        <TouchableOpacity
          onPress={() => setNext(true)}
          style={styles.skipButton}
        >
          <Text style={styles.skipButtonText}>Skip</Text>
        </TouchableOpacity>

        <SeriesList search={search} series={data} setNext={setNext} />
      </View>
    </>
  );
};
export default Picker;

const styles = StyleSheet.create({
  outer: {
    flex: 1,
    backgroundColor: 'white',
  },
  skipButton: {
    borderRadius: 16,
    // marginVertical: 10,
    backgroundColor: '#EB5E28',
    height: '4%',
    width: '20%',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  skipButtonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
  },
  promptText: {
    textAlign: 'center',
    fontSize: 22,
    paddingVertical: 5,
  },
});