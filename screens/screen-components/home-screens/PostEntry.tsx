/* eslint-disable react/prop-types */
import { Avatar, ListItem } from "@rneui/themed";
import React, { useState } from "react";
import { Button, Image, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import tw from 'tailwind-react-native-classnames';

type Post = {
    id: number,
    user_id: number,
    name: string,
    text: string,
    image_url: string,
    is_friend: boolean,
    series: string,
    character: string,
  }

const PostEntry = ({ allPosts, setAllPosts, setFriendsPosts, setForYouPosts, post }) => {

const [isEditing, setIsEditing] = useState(false);
const [editedText, setEditedText] = useState('');

const handleDeletePress = (post: Post) => {
  setAllPosts((currPosts) => currPosts.filter(currPost => currPost.id !== post.id));
  setFriendsPosts((currPosts) => currPosts.filter(currPost => currPost.id !== post.id));
  setForYouPosts((currPosts) => currPosts.filter(currPost => currPost.id !== post.id));
}

const handleSavePress = (text: string, post: Post) => {
  const updatedPosts = allPosts.map((p) => {
    if (p.id === post.id) {
      return { ...p, text: text };
    }
    return p;
  });
  setAllPosts(updatedPosts);
  setFriendsPosts(updatedPosts.filter(post => post.is_friend));
  setForYouPosts(updatedPosts.filter(post => post.series === "Fullmetal Alchemist" || post.name === "dragonballerz1"));
  
}

const handleUpdatePress = () => {
  setIsEditing(true);
}

const handleReset = () => {
  handleSavePress(editedText, post);
  setEditedText('');
  setIsEditing(false);
}

if (isEditing) {
  return (
    <ListItem>
      <TextInput
        style={tw`border px-2 py-2  text-gray-400 rounded-lg w-48`}
        defaultValue={post.text}
        onChangeText={setEditedText}
      />

      <Button title="Save" onPress={handleReset} />
    </ListItem>
  )
}

return (
  <ListItem  bottomDivider>
  <Avatar
    rounded
    source={{
      uri: post.image_url,
    }}
  />
  <ListItem.Content >
    <ListItem.Title >
      {post.name}
    </ListItem.Title>
    <ListItem.Subtitle>
      {post.text}
    </ListItem.Subtitle>
  <View style={tw`flex-row mt-4`}>
    <TouchableOpacity >
      <Image
        style={tw`h-7 w-7 grayscale`}
        source={require("../../../assets/like-fire.png")}
      />
    </TouchableOpacity>
    {post.name === "dragonballerz1" ? (
      <View>
        <TouchableOpacity onPress={() => handleUpdatePress()}>
          <Image
            style={tw`h-6 w-6 ml-3`}
            source={require("../../../assets/edit-post.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleDeletePress(post)}>
          <Image
            style={tw`h-7 w-7 ml-3`}
            source={require("../../../assets/remove-post.png")}
          />
        </TouchableOpacity>
        </View>
    ) : null}
      </View>
  </ListItem.Content>
  </ListItem>
)

};

export default PostEntry;

const styles = StyleSheet.create({
  fire: {
    height: 7,
    width: 7,
    filter: "grayscale",
  }
})