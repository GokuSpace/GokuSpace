import React, { Text, View, Button, ScrollView, Pressable, TextInput } from "react-native";
import { Avatar, ListItem, Tab } from "@rneui/themed";
import { useState } from "react";
import tw from 'tailwind-react-native-classnames';
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation, useRoute } from "@react-navigation/native";

const EventListEntry = ({ event, handleRSVPpress }) => {

  const navigation = useNavigation();

  const handleEventPress = () => {
    navigation.navigate("EventDetails", { event: event, handleRSVPpress: handleRSVPpress });
  }

  return (
    <View style={tw`bg-white`}>
      <TouchableOpacity onPress={handleEventPress}>
        <ListItem bottomDivider>
          <Avatar style={tw`h-16 w-16 flex justify-start`}
            key={event.picture}
            rounded
            source={{
              uri: event.picture,
            }}
          />
          <ListItem.Content>
            <ListItem.Title>{event.name}</ListItem.Title>
            <ListItem.Subtitle>{new Date(event.startDate).toString().slice(0, 15)}</ListItem.Subtitle>
            <ListItem.Subtitle>{event.city}</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      </TouchableOpacity>

    </View>

  );
}

export default EventListEntry;