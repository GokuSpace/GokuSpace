import { useNavigation, useRoute } from "@react-navigation/native";
import React, { Text, View, Button, ScrollView, Pressable, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import profilePostData from '../../../profilePostData';
import { Avatar, ListItem, Tab } from "@rneui/themed";
import { useEffect, useState } from "react";
import tw from 'tailwind-react-native-classnames';

function ViewUsersPostsScreen() { //userID would be passed in, which gives us access to make axios request for a user's posts

  const [posts, setPosts] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState('');

  useEffect(() => {
    setPosts(profilePostData);
  }, [])

  const handleDeletePress = (userPost: object) => { //would probably pass in the postID, refactor when backend is working
    const filteredPosts = posts.slice();
    const newlyFiltered = filteredPosts.filter((post) => post.timestamp !== userPost.timestamp);
    setPosts(newlyFiltered);
  }

  const handleEditButton = (userPost: object) => {

  }

  return (
    <View style={tw`bg-white`}>
      <View style={tw`flex-row justify-center mt-6 bg-white`}>
        <Text style={tw`text-xl`} >USERNAME HERE</Text>
      </View>
      <ScrollView>
        {posts.map((post, i) => (
          <ListItem bottomDivider key={i}>
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
        ))}
      </ScrollView>
    </View>
  );
}

export default ViewUsersPostsScreen;
