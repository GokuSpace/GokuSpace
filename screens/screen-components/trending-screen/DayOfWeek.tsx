/* eslint-disable react/prop-types */
import React from "react";
import { StyleSheet } from 'react-native';
import { Avatar, ListItem } from "react-native-elements";

const DaysOfWeek = ({ dayMostTrending }) => {

  return (
    <>
      <ListItem bottomDivider >
        <Avatar rounded source={{ uri: dayMostTrending.first.url}} size={200} />
        <ListItem.Content >
          <ListItem.Title style={styles.title}>{dayMostTrending.first.title}</ListItem.Title>
          <ListItem.Subtitle style={styles.votes}>{dayMostTrending.first.total_votes}</ListItem.Subtitle>
          <ListItem.Subtitle style={styles.body}>{dayMostTrending.first.body}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>

      <ListItem bottomDivider>
        <Avatar rounded source={{ uri: dayMostTrending.second.url}} size={100} />
        <ListItem.Content >
          <ListItem.Title style={styles.secondary_title}>{dayMostTrending.second.title}</ListItem.Title>
          <ListItem.Subtitle style={styles.secondary_votes}>{dayMostTrending.second.total_votes}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>


      <ListItem bottomDivider>
        <Avatar rounded source={{ uri: dayMostTrending.third.url}} size={100} />
        <ListItem.Content >
          <ListItem.Title style={styles.secondary_title}>{dayMostTrending.third.title}</ListItem.Title>
          <ListItem.Subtitle style={styles.secondary_votes}>{dayMostTrending.third.total_votes}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    </>
  );
}

export default DaysOfWeek;
const styles = StyleSheet.create({
  votes: {
    fontSize: 50,
    fontWeight: '500',
    textAlign: 'center',
    color: 'gray'
  },
  title: {
    fontWeight: "700",
    textAlign: 'center'
  },
  body: {
    fontSize: 10,
    fontWeight: '300',
    color: "gray",
    textAlign: 'left'
  },
  secondary_title: {
    fontWeight: '500',
  },
  secondary_votes: {
    fontWeight: '500',
    fontSize: 30,
    color: 'gray'
  }
})