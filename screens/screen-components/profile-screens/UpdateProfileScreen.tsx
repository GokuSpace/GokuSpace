import { useNavigation, useRoute } from "@react-navigation/native";
import React, { Text, View, Button, Image, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import tw from 'tailwind-react-native-classnames';
import { useState } from "react";
import axios from "axios";
import { SERVER } from '@env';

function UpdateProfileScreen() {

  const[editedUsername, setEditedUsername] = useState("")
  const[editedZipcode, setEditedZipcode] = useState("")
  const[editedBio, setEditedBio] = useState("")


  const route = useRoute();
  const { profile } = route.params;
  const navigation = useNavigation();


  const handleProfileSavePress = () => {
    const updatedProfile = {
      username: editedUsername,
      zipcode: editedZipcode,
      bio: editedBio,
    };
    //axios PUT request
    //axios.put(`/userProfile/:userID`, updatedProfile).then
    // axios.put(`http://${SERVER}/userProfile/cliuk0wnb0002uz6aw5dc3jrg`, updatedProfile)
    // .then(() => {
    //   setEditedUsername("");
    //   setEditedZipcode("");
    //   setEditedBio("");
    //   navigation.goBack();
    // })
    // .catch((error) => {
    //   console.log(error);
    // });
    //^^^^^^^^^^ CONFIRM WORKS
  }

  return (
    <View style={tw`bg-white h-full`}>

    <View style={tw`flex justify-center items-center mt-6 `}>
      <Image style={tw`h-52 w-52`}
        source={require("../../../assets/profile-photo.png")}
      />
      {/* <TextInput style={tw`mt-6 text-gray-400 border px-2 pb-2 rounded-lg font-bold text-lg	`} defaultValue="USERNAME"></TextInput> */}
    </View>

    <View style={tw`flex-row mt-10`}>
      <View style={tw`px-5`}>
      <Text style={tw`mt-1 font-bold`}>username: </Text>
        <Text style={tw`mt-6 font-bold`}>favorite anime: </Text>
        <Text style={tw`mt-6 font-bold`}>favorite character:</Text>
        <Text style={tw`mt-6 font-bold`}>Location:</Text>
      </View>
      <View style={tw`px-2`}>
        <TextInput style={tw`border px-2 py-1  text-gray-400 rounded-lg w-48`} defaultValue={profile.username} onChangeText={setEditedUsername}></TextInput>
        <TextInput style={tw`mt-4  border px-2 py-1  text-gray-400 rounded-lg`} defaultValue={profile.favoriteAnime ? profile.favoriteAnime.title : ""}></TextInput>
        <TextInput style={tw`mt-4 border px-2 py-1 text-gray-400 rounded-lg`} defaultValue={profile.favoriteCharater ? profile.favoriteCharater.name : ""}></TextInput>
        <TextInput style={tw`mt-4 border px-2 py-1 text-gray-400 rounded-lg`} defaultValue={profile.zipcode} onChangeText={setEditedZipcode}></TextInput>
      </View>
    </View>

    <View style={tw`flex-row px-5 mt-6 mr-4 `}>
      <Text style={tw`font-bold`}>Bio &nbsp;&nbsp;</Text>
      <TextInput style={tw` px-2 py-2 border text-gray-400 rounded-lg ml-2`} multiline={true} numberOfLines={4} defaultValue={profile.bio} onChangeText={setEditedBio}></TextInput>
    </View>

    <View style={tw`flex flex-row justify-center mt-6 `}>
        <View style={tw`mt-6 border rounded-2xl px-2 bg-black`} >
        <Button color="white" title="Save" onPress={handleProfileSavePress}/>
        </View>
      </View>


  </View>
  );
}

export default UpdateProfileScreen;








