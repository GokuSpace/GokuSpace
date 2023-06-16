/* eslint-disable react/prop-types */
import React from "react";
import { StyleSheet } from "react-native";
import { Avatar, ListItem } from "react-native-elements";
import most_3_trending_by_date from "./most_3_trending_by_date";

const Today = ({ animeSeries }) => {
  const { first, second, third } = most_3_trending_by_date(animeSeries, 0);

  return (
    <>
      <ListItem bottomDivider>
        <Avatar rounded source={{ uri: first.url }} size={200} />
        <ListItem.Content >
          <ListItem.Title style={styles.title}>{first.title}</ListItem.Title>
          <ListItem.Subtitle style={styles.votes}>{first.total_votes}</ListItem.Subtitle>
          <ListItem.Subtitle style={styles.body}>{first.body}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>

      <ListItem bottomDivider>
        <Avatar rounded source={{ uri: second.url }} size={100} />
        <ListItem.Content >
          <ListItem.Title style={styles.secondary_title}>{second.title}</ListItem.Title>
          <ListItem.Subtitle style={styles.secondary_votes}>{second.total_votes}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>


      <ListItem bottomDivider>
        <Avatar rounded source={{ uri: third.url }} size={100} />
        <ListItem.Content >
          <ListItem.Title style={styles.secondary_title} >{third.title}</ListItem.Title>
          <ListItem.Subtitle style={styles.secondary_votes} >{third.total_votes}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    </>
  );
}

export default Today;
const styles = StyleSheet.create({
  votes: {
    fontSize:50,
    fontWeight:'500',
    textAlign:'center',
    color:'gray'
  },
  title: {
    fontWeight:"700",
    textAlign:'center'
  },
  body: {
    fontSize:10,
    fontWeight:'300',
    color:"gray",
    textAlign:'left'
  },
  secondary_title: {
    fontWeight:'500',
  },
  secondary_votes: {
    fontWeight:'500',
    fontSize: 30,
    color:'gray'
  }
})