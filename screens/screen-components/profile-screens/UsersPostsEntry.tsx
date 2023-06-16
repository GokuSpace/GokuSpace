import { Avatar, ListItem, Tab } from "@rneui/themed";
import { useState } from "react";
import React, { Button, Image, Pressable, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import tw from 'tailwind-react-native-classnames';

function UsersPostsEntry({ post, handleDeletePress, handleSavePress, photo }) {

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
    <View style={tw`bg-white`}>
      <ListItem bottomDivider>
        <Avatar style={tw`h-16 w-16 flex justify-start`}
          key={photo[0]}
          key={post.image_url}
          rounded
          source={{
            uri: photo[0],
          }}
        />
        <ListItem.Content style={tw`mt-6 `}>
          {isEditing ? (
            <TextInput
              style={tw`border px-2 py-2  text-gray-400 rounded-lg w-48`}
              defaultValue={post.body}
              onChangeText={setEditedText}
            />
          ) : (
            <>
              <ListItem.Title style={tw`font-bold`}>{post.createdAt}</ListItem.Title>
              <ListItem.Subtitle style={tw`mt-2`}>{post.body}</ListItem.Subtitle>
              <View style={tw`flex-row mt-4`}>
                <TouchableOpacity >
                  <Image
                    style={tw`h-7 w-7`}
                    source={require("../../../assets/like-fire.png")}
                  />
                </TouchableOpacity>
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

                {/* <Button title="Update" onPress={() => handleUpdatePress()}/>
                <Button title="Trash" onPress={() => handleDeletePress(post)} /> */}
              </View>
            </>
          )}

        </ListItem.Content>
        {isEditing && (
          <Button title="Save" onPress={handleReset} />
        )}
      </ListItem>
    </View>
  )

}

export default UsersPostsEntry;