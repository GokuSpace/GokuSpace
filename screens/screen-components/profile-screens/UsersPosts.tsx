import React, { Text, View, Button, ScrollView, Pressable, TextInput } from "react-native";
import { useEffect, useState } from "react";
import tw from 'tailwind-react-native-classnames';
import UsersPostsEntry from "./UsersPostsEntry";
import { useRoute } from "@react-navigation/native";

function ViewUsersPostsScreen() { //userID would be passed in, which gives us access to make axios request for a user's posts

  const [userPosts, setUserPosts] = useState([]);

  const route = useRoute();
  const { profile } = route.params;

  useEffect(() => {
    setUserPosts(profile.posts)
  }, [])

  const handleDeletePress = (userPost: object) => {
    const filteredPosts = userPosts.slice();
    const newlyFiltered = filteredPosts.filter((post) => post.id !== userPost.id);
    setUserPosts(newlyFiltered);
    /*

    AXIOS PUT REQUEST HERE...

    axios.put(/posts/:postid) /posts/:id

    */
  }

  const handleSavePress = (body: string, post: object) => {
    const updatedPosts = userPosts.map((p) => {
      if (p.id === post.id) {
        return { ...p, body: body };
      }
      return p;
    });
    setUserPosts(updatedPosts);

    //axios.put(`/userPosts/${post.id}`, { body: body })
  }


  return (
    <View style={tw`bg-white`}>
      <View style={tw`flex-row justify-center mt-6 bg-white`}>
        <Text style={tw`text-xl`} >@{profile.username}</Text>
      </View>
      <ScrollView>
        {userPosts.map((post, i) => (
          post.isDeleted === false && (
          <UsersPostsEntry post={post}
          handleDeletePress={handleDeletePress}
          handleSavePress={handleSavePress}
          key={i}
          photo={profile.pictures}
          />)
        ))}
      </ScrollView>
    </View>
  );
}

export default ViewUsersPostsScreen;
