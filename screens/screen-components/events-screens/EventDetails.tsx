import React, { Text, View, Button, ScrollView, Pressable, TextInput } from "react-native";
import { useRoute } from "@react-navigation/native";
import { Avatar, ListItem, Tab } from "@rneui/themed";
import { useState } from "react";
import tw from 'tailwind-react-native-classnames';

const EventDetails = () => {
  const route = useRoute();
  const { event } = route.params;

  return (
    <>
      <Text>{event.name}</Text>
      <Text>{event.startDate}</Text>
    </>
  );
}

export default EventDetails;
