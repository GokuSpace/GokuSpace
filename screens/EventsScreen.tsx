import React, { Text, View, ScrollView } from "react-native";
import { Avatar, Button, ListItem, Tab } from "@rneui/themed";
import { useEffect, useState } from "react";
import events from "../events-data.js";
import EventListEntry from "./screen-components/events-screens/EventListEntry";
import tw from 'tailwind-react-native-classnames';



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

  return (
    <>
      <Tab
        onChange={(e) => setIndex(e)}
        indicatorStyle={{
          backgroundColor: "orange",
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
              <EventListEntry event={event} key={i}/>
            )
          })}
        </>
      </ScrollView>

    </>
  );
}
//
export default EventsScreen;
