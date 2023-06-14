import React, { Text, View, Button, ScrollView, Pressable, TextInput, Image } from "react-native";
import { useRoute } from "@react-navigation/native";
import { Avatar, ListItem, Tab } from "@rneui/themed";
import { useState } from "react";
import tw from 'tailwind-react-native-classnames';

const EventDetails = () => {
  const [rsvp, setRsvp] = useState(false);

  const route = useRoute();
  const { event } = route.params;

  const handleRSVP = () => {
    setRsvp(true);
  }

  return (

    <View style={tw`bg-white h-full`}>

      <View style={tw`flex justify-center items-center mt-6`}>
        <Image style={tw`h-52 w-52`}
          source={require("../../../assets/profile-photo.png")}
        />
        <Text style={tw`mt-6 font-bold text-base text-lg`}>{event.name}</Text>
        <Text style={tw`mt-6 font-bold text-base text-sm`}>{new Date (event.startDate).toString().slice(0, 15)}</Text>
        <Text style={tw`mt-2 text-base text-xs text-gray-400`}>3.5k people responded</Text>
      </View>

      <View style={tw`flex justify-center items-center  mt-10 `}>
        <Text style={tw`px-3`}>{event.description}</Text>
        <Text style={tw`px-3 mt-16 font-bold`}>E 123 New York st, Stark tower, 1204 NY</Text>
      </View>

      {!rsvp ? (
      <View style={tw`flex flex-row justify-center mt-6 `}>
        <View style={tw` mt-6 border rounded-3xl px-16 py-2 bg-black`}>
          <Button color="white" title="RSVP" onPress={handleRSVP}/>
        </View>
      </View>
      ) : (
        <View style={tw`flex flex-row justify-center mt-6 `}>
        <View style={tw` mt-6 rounded-3xl px-9 py-2 bg-green-600`}>
          <Button color="white" title="CONFIRMED"/>
        </View>
      </View>
      )}


    </View>

  );
}

export default EventDetails;
