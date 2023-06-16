import React, { Text, View, Image, Button } from "react-native";
import tw from 'tailwind-react-native-classnames';
import { useNavigation, useRoute } from "@react-navigation/native";
import { useState, useEffect } from "react";
import axios from 'axios';
import userData from '../jerryMockDataFolder/getUserById.json';
import { SERVER } from '@env';


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
    navigation.navigate("VotesHistory")
  }
  const handlePhotosPress = () => {
    navigation.navigate("EditProfilePictureScreen", { pictures: profile.pictures })
  }

  /*

  const fetchUserProfile = async () => {
    try {
      const response = await axios.get('https://SERVER/users/cliuk0wnb0002uz6aw5dc3jrg');
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

    <View style={tw`bg-white h-full`}>

      <View style={tw`flex justify-center items-center mt-6`}>
        {profile.pictures && <Image style={[tw`h-52 w-52 rounded-full`]} source={{ uri: profile.pictures[0] }} />}
        <Text style={tw`mt-6 font-bold text-base text-lg`}>@{profile.username}</Text>
        {/* <View style={[tw`mt-6 rounded-2xl px-2 py-1`, { backgroundColor: '#EB5E28' }]} >
          <Button color="white" title="Update Profile" onPress={handleUpdatePress} />
        </View> */}
      </View>

      <View style={tw`flex-row mt-8`}>
        <View style={tw`px-5`}>
          <Text style={tw`font-bold`}>Favorite anime: </Text>
          <Text style={tw`mt-6 font-bold`}>Favorite character:</Text>
          <Text style={tw`mt-6 font-bold`}>Location:</Text>
        </View>
        <View style={tw`px-10`}>
          <Text>{profile.favoriteAnime ? profile.favoriteAnime.title : ""}</Text>
          <Text style={tw`mt-6`}>{profile.favoriteCharater ? profile.favoriteCharater.name : ""}</Text>
          <Text style={tw`mt-6`}>{profile.location}</Text>
        </View>
      </View>

      <View style={tw`flex-row px-5 mt-6 mr-1`}>
        <Text style={tw`font-bold`}>Bio:</Text>
        <Text style={tw`px-3`}>{profile.bio}</Text>
      </View>

      <View style={tw`flex flex-row justify-center mt-8 `}>
        <View style={[tw`mt-6 rounded-2xl px-4 py-1`, { backgroundColor: '#EB5E28' }]}>
          <Button color="white" title="Posts" onPress={handlePostPress} />
        </View>
        <View style={[tw`mt-6 rounded-2xl px-3 py-1 ml-12`, { backgroundColor: '#EB5E28' }]}>
          <Button color="white" title="Update" onPress={handleUpdatePress} />
        </View>
        {/* <View style={[tw`mt-6 rounded-2xl px-2 px-2`, {backgroundColor: '#EB5E28'}]}>
          <Button color="white" title="Vote" onPress={handleVotePress} />
        </View> */}
      </View>

    </View>
  );
}

export default ProfileScreen;
