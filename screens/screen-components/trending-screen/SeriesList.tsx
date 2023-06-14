/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React, { ScrollView} from 'react-native';
import SeriesEntry from './SeriesEntry';

const SeriesList = ({series, search }) => {
const notFound = {title: 'NO MACH'};
const filltered = series.filter ((serie) => {
  if (search === '') {
    return serie;
  } else if (serie.title.toLowerCase().includes(search.toLowerCase())) {
    return serie;
  }
});

return (
  <ScrollView >
    { filltered.length ?
    (filltered.map((serie) => <SeriesEntry serie={serie} />))
    : (<SeriesEntry serie={notFound} />)}
  </ScrollView>
);
}

export default SeriesList;