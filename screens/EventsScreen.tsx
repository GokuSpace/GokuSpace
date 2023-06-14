import React, { Text, View, ScrollView } from "react-native";
import { Avatar, Button, ListItem, Tab } from "@rneui/themed";
import { useEffect, useState } from "react";
import events from "../events-data.js";
import EventListEntry from "./screen-components/events-screens/EventListEntry";
import tw from 'tailwind-react-native-classnames';
import { useNavigation, useRoute } from "@react-navigation/native";



// interface Event {
//   id: string;
//   name: string;
//   description: string;
//   startDate: Date;
//   endDate: Date;
//   latitude: number;
//   longitude: number;
// }

//pictures? number of responses??

function EventsScreen() {

  const [userEvents, setUserEvents] = useState(events);
  const [index, setIndex] = useState(1);

  const distanceFilter = events.filter((event) => event.name === "Cosplay Contest")

  useEffect(() => {
    switch (index) {
      case 0:
        setUserEvents(events);
        break;
      case 1:
        setUserEvents(distanceFilter);
        break;
      default:
        setUserEvents(events);
    }
  }, [index]);

  const navigation = useNavigation();

  const handleAddEventPress = () => {
    navigation.navigate("NewEvent")
  }


  return (
    <>
      <View style={tw`bg-white h-full`}>
        <Tab
          onChange={(e) => setIndex(e)}
          indicatorStyle={{
            backgroundColor: "black",
            height: 3,
          }}
          variant="primary"
          value={index}
        >
          <Tab.Item style={tw`bg-gray-300`} color="black" title="Date" />
          <Tab.Item style={tw`bg-gray-300`} color="black" title="Distance" />
        </Tab>
        <ScrollView>
          <>
            {userEvents.map((event, i) => {
              return (
                <EventListEntry event={event} key={i} />
              )
            })}
          </>
        </ScrollView>
        <View style={tw`flex flex-row justify-end mr-8 mb-2`}>
          <View style={tw`border rounded-3xl px-3 py-2 bg-black`}>
            <Button color="black" title="+" onPress={handleAddEventPress} />
          </View>
        </View>
      </View>
    </>
  );
}
//
export default EventsScreen;
