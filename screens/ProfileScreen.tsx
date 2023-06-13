import React, { Text, View, Image, Button } from "react-native";
import tw from 'tailwind-react-native-classnames';
import { useNavigation, useRoute } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";

  // const route = useRoute();
  // const { post } = route.params;

function ProfileScreen() {
  const navigation = useNavigation();

  const handlePostPress = () => {
    navigation.navigate("ViewUsersPostsScreen");
  }

  const handleUpdatePress = () => {
    navigation.navigate("UpdateProfileScreen")
  }

  const handleVotePress = () => {
    navigation.navigate("VotesHistory")
  }
  const handlePhotosPress = () => {
    navigation.navigate("EditProfilePictureScreen")
  }

  return (

    <View style={tw`bg-white h-full`}>

      <View style={tw`flex justify-center items-center mt-6`}>
        <Image style={tw`h-52 w-52`}
          source={require("../assets/profile-photo.png")}
        />
        <Text style={tw`mt-6 font-bold text-base text-lg`}>USERNAME</Text>
        <View style={tw`mt-6 border rounded-2xl px-2 px-2 bg-black`} >
        <Button color="white" title="Update Profile" onPress={handleUpdatePress} />
        </View>
      </View>

      <View style={tw`flex-row mt-6`}>
        <View style={tw`px-5`}>
          <Text style={tw`font-bold`}>favorite anime: </Text>
          <Text style={tw`mt-6 font-bold`}>favorite character:</Text>
          <Text style={tw`mt-6 font-bold`}>Location:</Text>
        </View>
        <View style={tw`px-10`}>
          <Text>My Hero Academia</Text>
          <Text style={tw`mt-6`}>Bakugou bnha</Text>
          <Text style={tw`mt-6`}>123 Stark dr, NY 1201</Text>
        </View>
      </View>

      <View style={tw`flex-row px-5 mt-6 mr-1`}>
        <Text style={tw`font-bold`}>Bio:</Text>
        <Text style={tw`px-3`}>Dont tell me you want to conquer the world, instead be more realistic and bring me something original!</Text>
      </View>

      <View style={tw`flex flex-row justify-center mt-6 `}>
        <View style={tw`mt-6 border rounded-2xl px-2 px-2 bg-black`}>
        <Button  color="white" title="Posts" onPress={handlePostPress}/>
        </View>
        <View style={tw`mt-6 border rounded-2xl px-2 mx-9 px-2 bg-black`}>
        <Button color="white" title="Photos" onPress={handlePhotosPress}/>
        </View>
        <View style={tw`mt-6 border rounded-2xl px-2 px-2 bg-black`}>
        <Button color="white" title="Vote" onPress={handleVotePress} />
        </View>
      </View>

    </View>
  );
}

export default ProfileScreen;
