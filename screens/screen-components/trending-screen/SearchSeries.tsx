/* eslint-disable react/prop-types */
import React from 'react';
import { SearchBar } from 'react-native-elements';
import { StyleSheet } from 'react-native';

const SearchSeries = ({ search, setSearch }) => {
  const updateSearch = (search) => {
    setSearch(search);
  };

  return (
    <SearchBar
      placeholder="Search..."
      onChangeText={(text) => updateSearch(text)}
      value={search}
      lightTheme
      round
      containerStyle={styles.searchContainer}
      inputContainerStyle={styles.searchBar}
    />
  );
};
export default SearchSeries;

const styles = StyleSheet.create({
  searchContainer: {
    backgroundColor: 'transparent',
    borderTopColor: 'transparent',
    borderBottomColor: 'transparent',
    shadowOpacity: 0,
    elevation: 0,
  },
  searchBar: {
    backgroundColor: '#e5e7e7',
    shadowOpacity: 0,
    elevation: 0,
  },
});