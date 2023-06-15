/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { Avatar, ListItem } from "react-native-elements";

const Today = ({ animeSeries }) => {
  const [first, setFirst] = useState({
    title: 'Loading...',
    total_votes: 0,
    body: 'Loading...',
    url: 'https://loading.io/asset/668421',
  });
  const [second, setSecond] = useState({
    title: 'Loading...',
    total_votes: 0,
    body: 'Loading...',
    url: 'https://loading.io/asset/668421',
  });
  const [third, setThird] = useState({
    title: 'Loading...',
    total_votes: 0,
    body: 'Loading...',
    url: 'https://loading.io/asset/668421',
  });

  useEffect(() => {
    const sortedSeries = [...animeSeries].sort((a, b) => b.total_votes - a.total_votes);
    setFirst(sortedSeries[0]);
    setSecond(sortedSeries[1]);
    setThird(sortedSeries[2]);
  }, [animeSeries]);

  return (
    <>
      <ListItem bottomDivider>
        <Avatar rounded source={{ uri: first.url }} size={200} />
        <ListItem.Content >
          <ListItem.Title >{first.title}</ListItem.Title>
          <ListItem.Subtitle>{first.total_votes}</ListItem.Subtitle>
          <ListItem.Subtitle>{first.body}</ListItem.Subtitle>
        </ListItem.Content>
        </ListItem>

        <ListItem bottomDivider>
        <Avatar rounded source={{ uri: second.url }} size={100} />
        <ListItem.Content >
          <ListItem.Title >{second.title}</ListItem.Title>
          <ListItem.Subtitle>{second.total_votes}</ListItem.Subtitle>
        </ListItem.Content>
        </ListItem>


        <ListItem bottomDivider>
        <Avatar rounded source={{ uri: third.url }} size={100} />
        <ListItem.Content >
          <ListItem.Title >{third.title}</ListItem.Title>
          <ListItem.Subtitle>{third.total_votes}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    </>

  );
}

export default Today;


