import React, { Text, View, Button, ScrollView, Pressable, TextInput } from "react-native";
import profilePostData from '../../../profilePostData';
import { useEffect, useState } from "react";
import tw from 'tailwind-react-native-classnames';
import UsersPostsEntry from "./UsersPostsEntry";

function ViewUsersPostsScreen() { //userID would be passed in, which gives us access to make axios request for a user's posts

  const [posts, setPosts] = useState([]);

    const handleDeletePress = (userPost: object) => { //would probably pass in the postID, refactor when backend is working
    const filteredPosts = posts.slice();
    const newlyFiltered = filteredPosts.filter((post) => post.timestamp !== userPost.timestamp);
    setPosts(newlyFiltered);
  }


  useEffect(() => {
    setPosts(profilePostData);
  }, [])

  return (
    <View style={tw`bg-white`}>
      <View style={tw`flex-row justify-center mt-6 bg-white`}>
        <Text style={tw`text-xl`} >USERNAME HERE</Text>
      </View>
      <ScrollView>
        {posts.map((post, i) => (
          <UsersPostsEntry post={post} handleDeletePress={handleDeletePress}/>
        ))}
      </ScrollView>
    </View>
  );
}

export default ViewUsersPostsScreen;
