import React, { Text, View, Button, ScrollView, Pressable, TextInput } from "react-native";
import { Avatar, ListItem, Tab } from "@rneui/themed";
import { useState } from "react";
import tw from 'tailwind-react-native-classnames';
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation, useRoute } from "@react-navigation/native";

const EventListEntry = ({ event }) => {

  const navigation = useNavigation();

  const handleEventPress = () => {
    navigation.navigate("EventDetails", { event: event });
  }


  const handleAddEventPress = () => {
    navigation.navigate("NewEvent")
  }

  return (
    <View style={tw`bg-white h-full`}>
      <TouchableOpacity onPress={handleEventPress}>
        <ListItem bottomDivider>
          <ListItem.Content>
            <ListItem.Title>{event.name}</ListItem.Title>
          </ListItem.Content>
        </ListItem>
      </TouchableOpacity>

      <View style={tw`flex flex-row justify-end mr-6 mt-6 `}>
        <View style={tw` mt-6 border rounded-3xl px-2 py-2 bg-black`}>
          <Button color="white" title="Post" onPress={handleAddEventPress}/>
        </View>
      </View>
    </View>

  );
}

export default EventListEntry;