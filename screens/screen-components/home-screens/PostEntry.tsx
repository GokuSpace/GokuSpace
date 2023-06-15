/* eslint-disable react/prop-types */
import { Avatar, ListItem } from "@rneui/themed";
import React, { useState } from "react";
import { Button, Image, TextInput, TouchableOpacity, View } from 'react-native';
import tw from 'tailwind-react-native-classnames';

const PostEntry = ({ allPosts, setAllPosts, post }) => {

const [isEditing, setIsEditing] = useState(false);
const [editedText, setEditedText] = useState('');

const handleDeletePress = (post: object) => {
  setAllPosts((currPosts) => currPosts.filter(currPost => currPost.id !== post.id));
}

const handleSavePress = (text: string, post: object) => {
  const updatedPosts = allPosts.map((p) => {
    if (p.id === post.id) {
      return { ...p, text: text };
    }
    return p;
  });
  setAllPosts(updatedPosts);

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
    {post.name === "jearbearcutie" ? (
      <View style={tw`flex-row mt-4`}>
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

  </ListItem.Content>
  </ListItem>
)

};

export default PostEntry;
