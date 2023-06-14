import React, { Text, View, Button, ScrollView, Pressable, TextInput, Image } from "react-native";
import { useRoute } from "@react-navigation/native";
import { Avatar, ListItem, Tab } from "@rneui/themed";
import { useState } from "react";
import tw from 'tailwind-react-native-classnames';

const NewEvent = () => {
  const route = useRoute();
  const { event } = route.params;

  return (

    <View style={tw`bg-white h-full`}>

      <View style={tw`flex justify-center items-center mt-6`}>
        <Image style={tw`h-52 w-52`}
          source={require("../../../assets/profile-photo.png")}
        />
      </View>

      <View style={tw`flex-row mt-10`}>
      <View style={tw`px-5`}>
      <Text style={tw`mt-1 font-bold`}>Event Name: </Text>
        <Text style={tw`mt-6 font-bold`}>start date: </Text>
        <Text style={tw`mt-6 font-bold`}>end date:</Text>
        <Text style={tw`mt-6 font-bold`}>time:</Text>
        <Text style={tw`mt-6 font-bold`}>Location:</Text>
      </View>
      <View style={tw`px-2`}>
        <TextInput style={tw`border px-2 py-1  text-gray-400 rounded-lg w-48`}  ></TextInput>
        <TextInput style={tw`mt-4  border px-2 py-1  text-gray-400 rounded-lg`} ></TextInput>
        <TextInput style={tw`mt-4 border px-2 py-1 text-gray-400 rounded-lg`} ></TextInput>
        <TextInput style={tw`mt-4 border px-2 py-1 text-gray-400 rounded-lg`} ></TextInput>
        <TextInput style={tw`mt-4 border px-2 py-1 text-gray-400 rounded-lg`} ></TextInput>

      </View>
    </View>

    <View style={tw`flex-row px-5 mt-6 mr-4 `}>
      <Text style={tw`font-bold`}>Description: &nbsp;&nbsp;</Text>
      <TextInput style={tw` px-2 py-2 border text-gray-400 rounded-lg ml-2`} multiline={true} numberOfLines={4}></TextInput>
    </View>

      <View style={tw`flex flex-row justify-center mt-6 `}>
        <View style={tw` mt-6 border rounded-3xl px-16 py-2 bg-black`}>
          <Button color="white" title="Post Event" />
        </View>
      </View>

    </View>

  );
}

export default NewEvent;
