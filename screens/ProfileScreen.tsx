import React, { Text, View, Image, Button } from "react-native";
import tw from 'tailwind-react-native-classnames';
import { useNavigation, useRoute } from "@react-navigation/native";
import { useState, useEffect } from "react";
import axios from 'axios';
import userData from '../jerryMockDataFolder/getUserById.json';


function ProfileScreen() { //take in a userId and then make axios call with that...
  const [profile, setProfile] = useState({})

  const navigation = useNavigation();

  const handlePostPress = () => {
    navigation.navigate("ViewUsersPostsScreen", { profile: profile });
  }

  const handleUpdatePress = () => {
    navigation.navigate("UpdateProfileScreen", { profile: profile })
  }

  const handleVotePress = () => {
    navigation.navigate("VoteScreen")
  }
  const handlePhotosPress = () => {
    navigation.navigate("EditProfilePictureScreen", { pictures: profile.pictures })
  }



  /*

  const fetchUserProfile = async () => {
    try {
      const response = await axios.get('https://localhost:3000/users/cliuk0wnb0002uz6aw5dc3jrg');
      const userData = response.data;
      setProfile(userData);
    } catch (error) {
      console.log(error);
    }
  };

  */
  useEffect(() => {
    setProfile(userData);
  }, []);

  return (

    <View >

      <View style={tw`flex justify-center items-center mt-6`}>
        <Image
          source={require("../assets/favicon.png")}
        />
        <Text style={tw`mt-6`}>{profile.username}</Text>
        <Button style={tw`mt-6`} title="Update Profile" onPress={handleUpdatePress} />
      </View>

      <View style={tw`flex-row mt-6`}>
        <View style={tw`px-5`}>
          <Text>Favorite Anime: </Text>
          <Text style={tw`mt-6`}>Favorite Character:</Text>
          <Text style={tw`mt-6`}>Location</Text>
        </View>
        <View style={tw`px-10`}>
          <Text>{profile.favoriteAnimeId}</Text>
          <Text style={tw`mt-6`}>{profile.favoriteCharacterId}</Text>
          <Text style={tw`mt-6`}>{profile.zipcode}</Text>
        </View>
      </View>

      <View style={tw`flex-row px-5 mt-6`}>
        <Text>Bio:</Text>
        <Text style={tw`px-3`}>{profile.bio}</Text>
      </View>

      <View style={tw`flex-row justify-center mt-6`}>
        <Button title="Posts" onPress={handlePostPress} />
        <Button title="Photos" onPress={handlePhotosPress} />
        <Button title="Vote" onPress={handleVotePress} />
      </View>

    </View>
  );
}

export default ProfileScreen;
