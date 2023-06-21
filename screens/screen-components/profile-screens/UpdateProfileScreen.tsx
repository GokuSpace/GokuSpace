import { SERVER } from '@env';
import { useNavigation, useRoute } from "@react-navigation/native";
import axios from "axios";
import * as ImagePicker from 'expo-image-picker';
import { useEffect, useState } from "react";
import { Button, Image, React, Text, TextInput, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Carousel from 'react-native-snap-carousel';
import GestureRecognizer from 'react-native-swipe-gestures';
import tw from 'tailwind-react-native-classnames';


function UpdateProfileScreen() {

  const [editedUsername, setEditedUsername] = useState("")
  const [editedZipcode, setEditedZipcode] = useState("")
  const [editedBio, setEditedBio] = useState("")
  const [images, setImages] = useState("")
  const [index, setIndex] = useState(0);

  const route = useRoute();
  const { profile } = route.params;
  const navigation = useNavigation();

  useEffect(() => {
    setImages(profile.pictures[0])
  }, [])

  const handleProfileSavePress = () => {
    const updatedProfile = {
      username: editedUsername,
      zipcode: editedZipcode,
      bio: editedBio,
    };
    // FIXISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
  }

  const handleImageSelect = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    })

    if (!result.canceled) {
      const newImages = result.assets[0].uri
      setImages(newImages);
      //add logic to post new profile picture to the backend
    }
  };

  return (
    <View style={tw`bg-white flex-1`}>
      <View style={tw`justify-center items-center mt-6 `}>
          <TouchableOpacity onPress={handleImageSelect}>
            {images && <Image style={[tw`h-52 w-52 rounded-full`]} source={{ uri: images }} />}
          </TouchableOpacity>
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

