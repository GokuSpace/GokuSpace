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

/*
 WARN  Non-serializable values were found in the navigation state. Check:

Events > EventDetails > params.event.startDate (Sun Jun 18 2023 08:00:00 GMT-0700)

This can break usage such as persisting and restoring state. This might happen if you passed non-serializable values such as function, class instances etc. in params. If you need to use components with callbacks in your options, you can use 'navigation.setOptions' instead. See https://reactnavigation.org/docs/troubleshooting#i-get-the-warning-non-serializable-values-were-found-in-the-navigation-state for more details.

*/