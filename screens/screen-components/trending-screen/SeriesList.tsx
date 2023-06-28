/* eslint-disable react/prop-types */
import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import SeriesEntry from './SeriesEntry';

const SeriesList = ({ series, search, setNext }) => {
  const notFound = { title: 'NO MATCH' };
  const filtered = series.filter((serie) => {
    if (search === '') {
      return serie;
    } else if (serie.title.toLowerCase().includes(search.toLowerCase())) {
      return serie;
    }
  });

  return (
    <FlatList
      data={filtered.length ? filtered : [notFound]}
      renderItem={({ item }) => <SeriesEntry serie={item} setNext={setNext} />}
      // keyExtractor={(item) => item.id || 'notFound'}
      numColumns={3}
      contentContainerStyle={styles.list}
    />
  );
};
export default SeriesList;

const styles = StyleSheet.create({
  list: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});