/* eslint-disable react/prop-types */
import React from 'react';
import { SearchBar } from 'react-native-elements';

const SearchSeries = ({search, setSearch}) => {
  const updateSearch = (search) => {
    setSearch(search);
  };

  return (
    <SearchBar
      placeholder="Type Here..."
      onChangeText={(text) => updateSearch(text)}
      value={search}
    />
  );
}

export default SearchSeries;
