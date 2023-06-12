/* eslint-disable react/prop-types */
import { Button } from "@rneui/themed";
import React, { View, Text, Image } from "react-native";

const UserPage= ({ user }) => {

  const addFriend = () => {
    console.log('welcom');
  };
  const Unfriend =() => {
    console.log('bye bye');
  };
  const showUserPosts = () => {
    console.log('all user posts');
  }
  const showUserVotes = () => {
    console.log('all user votes');
  }
  return (
    <View>

      <View>
        <Image source={user.image_url}/>
        <Text>{user.name}</Text>
        <Button title={user.isFreind ? 'Unfriend': 'Add Friend'} onPress={() => {
          user.isFreind ? Unfriend() : addFriend();
        }}/>
      </View>

      <View>
        <Text>Favorite Anime</Text>
        <Text>{user.series}</Text>
        <Text>Favorite Character</Text>
        <Text>{user.character}</Text>
        <Text>Bio</Text>
        <Text>{user.bio}</Text>
      </View>

      <View>
        <Button title='Posts' onPress={() => showUserPosts()}/>
        <Button title='Votes' onPress={() => showUserVotes()}/>
      </View>
    </View>
  );
}