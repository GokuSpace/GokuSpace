import React, { Text, View, Button, ScrollView, Pressable, TextInput } from "react-native";
import { Avatar, ListItem, Tab } from "@rneui/themed";
import { useState } from "react";
import tw from 'tailwind-react-native-classnames';

function UsersPostsEntry({post, handleDeletePress}) {

  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState('');


  return (
    <View>
    <ListItem bottomDivider>
      <Avatar
        key={post.image_url}
        rounded
        source={{
          uri: post.image_url,
        }}/>
      <ListItem.Content>
          <ListItem.Title>{new Date(post.timestamp).toString().slice(0, 16)}</ListItem.Title>
          {!isEditing ? (<ListItem.Subtitle>{post.text}</ListItem.Subtitle>) : (<TextInput style={tw`border rounded-lg px-2 bg-white`}>{post.text}</TextInput>)}

          <View style={tw`flex-row`}>
            <Button title="Update" onPress={() => setIsEditing(true)}/>
            <Button title="Trash" onPress={() => handleDeletePress(post)}/>
          </View>

      </ListItem.Content>
    </ListItem>
  </View>
  )

}

export default UsersPostsEntry