import React, { Text, View, Button, ScrollView, Pressable, TextInput } from "react-native";
import { Avatar, ListItem, Tab, Icon } from "@rneui/themed";
import { useState } from "react";
import tw from 'tailwind-react-native-classnames';
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation, useRoute } from "@react-navigation/native";

const EventListEntry = ({ event, handleRSVPpress }) => {

  const navigation = useNavigation();

  const handleEventPress = () => {
    navigation.navigate("Event Details", { event: event, handleRSVPpress: handleRSVPpress });
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
          <ListItem.Content style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <View>
              <ListItem.Title style={{ fontSize: 18 }}>{event.name}</ListItem.Title>
              <ListItem.Subtitle>{new Date(event.startDate).toString().slice(0, 15)}</ListItem.Subtitle>
              <ListItem.Subtitle>{event.city}</ListItem.Subtitle>
            </View>
            {event.friendsGoing ? <Icon name="user-friends" type="font-awesome-5" color="orange" /> : null}
          </ListItem.Content>
        </ListItem>
      </TouchableOpacity>

    </View>



  );
}

export default EventListEntry;