/* eslint-disable react/prop-types */
import React from "react";
import { Avatar, ListItem } from "react-native-elements";

const DaysOfWeek = ({ dayMostTrending  }) => {

  return (
    <>
      <ListItem bottomDivider>
        <Avatar rounded source={{ uri: dayMostTrending[0].url }} size={200} />
        <ListItem.Content >
          <ListItem.Title >{dayMostTrending[0].title}</ListItem.Title>
          <ListItem.Subtitle>{dayMostTrending[0].total_votes}</ListItem.Subtitle>
          <ListItem.Subtitle>{dayMostTrending[0].body}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>

      <ListItem bottomDivider>
        <Avatar rounded source={{ uri: dayMostTrending[1].url }} size={100} />
        <ListItem.Content >
          <ListItem.Title >{dayMostTrending[1].title}</ListItem.Title>
          <ListItem.Subtitle>{dayMostTrending[1].total_votes}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>


      <ListItem bottomDivider>
        <Avatar rounded source={{ uri: dayMostTrending[2].url }} size={100} />
        <ListItem.Content >
          <ListItem.Title >{dayMostTrending[2].title}</ListItem.Title>
          <ListItem.Subtitle>{dayMostTrending[2].total_votes}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    </>
  );
}

export default DaysOfWeek;
