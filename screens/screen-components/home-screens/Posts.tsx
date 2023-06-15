/* eslint-disable react/prop-types */
import React, { Avatar, ListItem } from "@rneui/themed";
import { ScrollView } from "react-native-gesture-handler";


const Posts = ({ user }) => {
  return (
    <ScrollView>
      {user.posts.map(post => {
        return (
          <>
          <ListItem bottomDivider>
          <Avatar rounded
      source={{
        uri:user.image_url
      }}/>
      <ListItem.Content>
        <ListItem.Title>{user.name}</ListItem.Title>
        <ListItem.Subtitle>{post}</ListItem.Subtitle>
      </ListItem.Content>

          </ListItem>
          </>
        )
      })}
    </ScrollView>
  );
}
export default Posts;

