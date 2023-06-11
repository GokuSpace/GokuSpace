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

  return (

    <View >

      <View style={tw`flex justify-center items-center mt-6`}>
        <Image
          source={require("../assets/favicon.png")}
        />
        <Text style={tw`mt-6`}>ALIYAH JERRY USERNAME</Text>
        <Button style={tw`mt-6`} title="Update Profile" onPress={handleUpdatePress}/>
      </View>

      <View style={tw`flex-row mt-6`}>
        <View style={tw`px-5`}>
          <Text>Favorite Anime: </Text>
          <Text style={tw`mt-6`}>Favorite Character:</Text>
          <Text style={tw`mt-6`}>Location</Text>
        </View>
        <View style={tw`px-10`}>
          <Text>dummy data</Text>
          <Text style={tw`mt-6`}>dummy data</Text>
          <Text style={tw`mt-6`}>dummy data</Text>
        </View>
      </View>

      <View style={tw`flex-row px-5 mt-6`}>
        <Text>Bio:</Text>
        <Text style={tw`px-3`}>Dont tell me you want to conquer the world, instead be more realistic and bring me something original!</Text>
      </View>

      <View style={tw`flex-row justify-center mt-6`}>
        <Button title="Posts" onPress={handlePostPress}/>
        <Button title="Photos" />
      </View>

    </View>
  );
}

export default ProfileScreen;
