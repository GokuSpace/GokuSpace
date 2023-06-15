import React, { Text, View, Button, ScrollView, Pressable, TextInput, Image } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { Avatar, ListItem, Tab } from "@rneui/themed";
import { useState } from "react";
import tw from 'tailwind-react-native-classnames';
import axios from 'axios';

const EventDetails = () => {
  const route = useRoute();
  const { event, handleRSVPpress} = route.params;
  const navigation = useNavigation();

  const handleRSVP = () => {
    // console.log(event.id); //cliv7gckf0000uzjh9syxabhe exists
    // axios
    // .put(`http://localhost:3000/events/${event.id}/rsvp`, {
    //   user_id: "cliuk0wnb0002uz6aw5dc3jrg" // HARDCODED
    // })
    //   .then(() => {
    //
    //   })
    //   .catch(error => {
    //     console.log('error with axios rsvp', error);
    //   });
    handleRSVPpress(event);
    navigation.goBack();
  };

  return (

    <View style={tw`bg-white h-full`}>

      <View style={tw`flex justify-center items-center mt-6`}>
      <Image style={[tw`h-52 w-52 rounded-full`]} source={{ uri: event.picture }} />
        <Text style={tw`mt-6 font-bold text-base text-lg`}>{event.name}</Text>
        <Text style={tw`mt-6 font-bold text-base text-sm`}>{new Date(event.startDate).toString().slice(0, 15)}</Text>
        <Text style={tw`mt-2 text-base text-xs text-gray-400`}>{event.attendees} people responded</Text>
      </View>

      <View style={tw`flex justify-center items-center  mt-10 `}>
        <Text style={tw`px-3`}>{event.description}</Text>
        <Text style={tw`px-3 mt-16 font-bold`}>{event.address}</Text>
      </View>

      <View style={tw`flex flex-row justify-center mt-6 `}>
        <View style={tw` mt-6 border rounded-3xl px-16 py-2 bg-black`}>
          <Button color="white" title="RSVP" onPress={handleRSVP} />
        </View>
      </View>

    </View>

  );
}

export default EventDetails;
