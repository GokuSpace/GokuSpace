/* eslint-disable react/prop-types */
import React from "react";
import { Avatar, ListItem } from "react-native-elements";
import most_3_trending_by_date from "./most_3_trending_by_date";

const Today = ({ animeSeries }) => {
  const { first, second, third } = most_3_trending_by_date(animeSeries, 0);

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
