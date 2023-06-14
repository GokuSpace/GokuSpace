import React, { Text, View, Button, ScrollView, Pressable, TextInput, Image } from "react-native";
import { useRoute } from "@react-navigation/native";
import { Avatar, ListItem, Tab } from "@rneui/themed";
import { useState } from "react";
import tw from 'tailwind-react-native-classnames';

const EventDates = () => {

  return (

    <View style={tw`bg-white h-full`}>

      <View style={tw`flex justify-center items-center mt-20`}>
        <Text style={tw`font-bold text-3xl`}>DATES</Text>
      </View>

      <View style={tw`flex justify-center items-center mt-16`}>
        <Text style={tw`text-base`}>Start</Text>
      </View>
      <View style={tw`flex flex-row justify-center `}>
        <View style={tw` mt-2 border-4 rounded-3xl px-20  `}>
          <Button color="black" title="mm/dd/yyyy" />
        </View>
      </View>

      <View style={tw`flex justify-center items-center mt-8`}>
        <Text style={tw`text-base`}>End</Text>
      </View>
      <View style={tw`flex flex-row justify-center`}>
        <View style={tw` mt-2 border-4 rounded-3xl px-20 `}>
          <Button color="black" title="mm/dd/yyyy" />
        </View>
      </View>

      <View style={tw`flex flex-row justify-center mt-16 `}>
        <View style={tw` mt-6 border rounded-3xl px-16 py-1 bg-black`}>
          <Button color="white" title="Confirm" />
        </View>
      </View>

    </View>

  );
}

export default EventDates;
