/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React from 'react';
import { ScrollView } from 'react-native';
import SeriesEntry from './SeriesEntry';

const SeriesList = ({series, search, setNext }) => {
  const notFound = {title: 'NO MATCH'};
  const filtered = series.filter((serie) => {
    if (search === '') {
      return serie;
    } else if (serie.title.toLowerCase().includes(search.toLowerCase())) {
      return serie;
    }
  });

  return (
    <ScrollView>
      { filtered.length ?
      (filtered.map((serie) => <SeriesEntry key={serie.id} serie={serie} setNext={setNext}/>))
      : (<SeriesEntry key='notFound' serie={notFound} setNext={setNext}/>)}
    </ScrollView>
  );
}

export default SeriesList;
