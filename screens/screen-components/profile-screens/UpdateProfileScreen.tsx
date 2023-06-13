import { useNavigation, useRoute } from "@react-navigation/native";
import React, { Text, View, Button, Image, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import tw from 'tailwind-react-native-classnames';

function UpdateProfileScreen() {
  const route = useRoute();
  const { profile } = route.params;
  return (
    <View >

    <View style={tw`flex justify-center items-center mt-6`}>
      <Image
        source={require("../../../assets/favicon.png")}
      />
      <TextInput style={tw`mt-6 border rounded-lg px-2 bg-white`} defaultValue={profile.username}></TextInput>
      {/* <Button style={tw`mt-6`} title="Update Profile"/> */}
    </View>

    <View style={tw`flex-row mt-6`}>
      <View style={tw`px-5`}>
        <Text>Favorite Anime: </Text>
        <Text style={tw`mt-6`}>Favorite Character:</Text>
        <Text style={tw`mt-6`}>Location</Text>
      </View>
      <View style={tw`px-10`}>
        <TextInput style={tw`border rounded-lg px-2 bg-white` } defaultValue={profile.favoriteAnimeId}></TextInput>
        <TextInput style={tw`mt-6 border rounded-lg px-2 bg-white` } defaultValue={profile.favoriteCharacterId}></TextInput>
        <TextInput style={tw`mt-6 border rounded-lg px-2 bg-white` } defaultValue={profile.zipcode}></TextInput>
      </View>
    </View>

    <View style={tw`flex-row px-5 mt-6`}>
      <Text>Bio:</Text>
      <TextInput style={tw`px-3 bg-white rounded-lg px-2`} multiline={true} numberOfLines={4} defaultValue={profile.bio}></TextInput>
    </View>

  </View>
  );
}

export default UpdateProfileScreen;








