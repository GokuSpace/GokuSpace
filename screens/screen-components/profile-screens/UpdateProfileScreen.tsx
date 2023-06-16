import { useNavigation, useRoute } from "@react-navigation/native";
import React, { Text, View, Button, Image, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import tw from 'tailwind-react-native-classnames';
import { useState, useEffect } from "react";
import axios from "axios";
import { SERVER } from '@env';


function UpdateProfileScreen() {

  const [editedUsername, setEditedUsername] = useState("")
  const [editedZipcode, setEditedZipcode] = useState("")
  const [editedBio, setEditedBio] = useState("")
  const [images, setImages] = useState([])
  const [index, setIndex] = useState(0);

  const route = useRoute();
  const { profile } = route.params;
  const navigation = useNavigation();

  useEffect(() => {
    setImages(profile.pictures)
  }, [])

  const handleProfileSavePress = () => {
    const updatedProfile = {
      username: editedUsername,
      zipcode: editedZipcode,
      bio: editedBio,
    };
    // FIXISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
  }

  return (
    <View style={tw`bg-white flex-1`}>
      <View style={tw`justify-center items-center mt-6 `}>
        <View style={tw`justify-center items-center rounded-full `}>
          <Image
            style={tw`h-52 w-52`}
            source={require("../../../assets/add-user-photo.jpg")}
          />
        </View>

      </View>


      <View style={tw`flex-row mt-16`}>
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
        <Text style={tw`font-bold`}>Bio: &nbsp;&nbsp;</Text>
        <TextInput style={tw` px-2 py-3 border text-gray-400 rounded-xl ml-3`} multiline={true} numberOfLines={4} defaultValue={profile.bio} onChangeText={setEditedBio}></TextInput>
      </View>

      <View style={tw`flex flex-row justify-center mt-6 `}>
        <View style={[tw`mt-6 rounded-2xl px-5 py-1`, { backgroundColor: '#EB5E28' }]} >
          <Button color="white" title="Save" onPress={handleProfileSavePress} />
        </View>
      </View>

    </View>
  );
}

export default UpdateProfileScreen;

