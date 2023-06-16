import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import SeriesEntry from './CharEntry';

const CharList = ({ series, search, setLoggedIn }) => {
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
      renderItem={({ item }) => (
        <SeriesEntry serie={item} setLoggedIn={setLoggedIn} />
      )}
      // keyExtractor={(item) => item.id || 'notFound'}
      numColumns={3}
      contentContainerStyle={styles.list}
    />
  );
};
export default CharList;

const styles = StyleSheet.create({
  list: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
