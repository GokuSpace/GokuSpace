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
  return (
    <TouchableOpacity onPress={handleEventPress}>
      <ListItem bottomDivider>
        <ListItem.Content>
          <ListItem.Title>{event.name}</ListItem.Title>
        </ListItem.Content>
      </ListItem>
    </TouchableOpacity>
  );
}

export default EventListEntry;