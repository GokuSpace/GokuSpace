/* eslint-disable react/prop-types */
import { Avatar, ListItem } from "@rneui/themed";
import React, { ScrollView } from "react-native-gesture-handler";


const VotesHistory = ({ user }) => {
  return (
    <ScrollView>
      {
        user.votes.map(vote => {
          return (
            <>
              <ListItem bottomDivider>
                <Avatar rounded
                  source={{
                    uri: vote.url
                  }} />
                  <ListItem.Content >
                    <ListItem.Title>{vote.series}</ListItem.Title>
                    <ListItem.Subtitle>{vote.created_at}</ListItem.Subtitle>
                  </ListItem.Content>
              </ListItem>
            </>
          );
        })
      }
    </ScrollView>
  );
}

export default VotesHistory;