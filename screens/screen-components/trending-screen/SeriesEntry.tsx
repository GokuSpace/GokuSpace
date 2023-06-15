/* eslint-disable react/prop-types */
import React from 'react';
import { Avatar, ListItem } from 'react-native-elements';

const SeriesEntry = ({ serie }) => (
  <ListItem>
    <Avatar rounded
    source={{
      uri: serie.image_url,
    }} size="large" />
    <ListItem.Title >
      {serie.title}
    </ListItem.Title>
  </ListItem>
);

export default SeriesEntry;
