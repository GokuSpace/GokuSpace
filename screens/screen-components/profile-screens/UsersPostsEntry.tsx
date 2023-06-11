import React, { Text, View, Button, ScrollView, Pressable, TextInput } from "react-native";
import { Avatar, ListItem, Tab } from "@rneui/themed";
import { useState } from "react";
import tw from 'tailwind-react-native-classnames';

function UsersPostsEntry({ post, handleDeletePress, handleSavePress }) {

  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState('');

  const handleUpdatePress = () => {
    setIsEditing(true);
  }

  const handleReset = () => {
    handleSavePress(editedText, post);
    setEditedText('');
    setIsEditing(false);
  }


  return (
    <View>
      <ListItem bottomDivider>
        <Avatar
          key={post.image_url}
          rounded
          source={{
            uri: post.image_url,
          }}
        />
        <ListItem.Content>
          {isEditing ? (
            <TextInput
              style={tw`border`}
              defaultValue={post.text}
              onChangeText={setEditedText}
            />
          ) : (
            <>
              <ListItem.Title>{new Date(post.timestamp).toString().slice(0, 16)}</ListItem.Title>
              <ListItem.Subtitle>{post.text}</ListItem.Subtitle>
              <View style={tw`flex-row`}>
                <Button title="Update" onPress={() => handleUpdatePress()} />
                <Button title="Trash" onPress={() => handleDeletePress(post)} />
              </View>
            </>
          )}
        </ListItem.Content>
        {isEditing && (
          <Button title="Save" onPress={handleReset}/>
        )}
      </ListItem>
    </View>
  )

}

export default UsersPostsEntry