import React, { Text, View, ScrollView } from "react-native";
import { Avatar, Button, ListItem, Tab } from "@rneui/themed";
import { useEffect, useState } from "react";

import EventListEntry from "./screen-components/events-screens/EventListEntry";
import tw from 'tailwind-react-native-classnames';
import axios from 'axios';


function EventsScreen() {

  const [userEvents, setUserEvents] = useState([]);
  // const [index, setIndex] = useState(1);

  // let distanceFilter = events.filter((event) => event.name === "Cosplay Contest")
  //let distance 20 = events...
  //let distance 50 = events...
  //let distance all = events...
    //^^place this inside useEffect (perhaps diff one but similar to tabs)
      //4 indexes for 4 distance filters

  //let myEvents = router.get('/users/:user_id/my_events', events.getUserEvents);
    //use existing useEffect to render tab

  const fetchUserEvents = () => {
    axios
      .get("http://localhost:3000/users/cliuk0wnb0002uz6aw5dc3jrg/events", {
        params: {
          distance: "all"
        }
      })
      .then(response => {
        setUserEvents(response.data);
      })
      .catch(error => {
        console.log('error with axios get for user events', error);
      });
  };

  useEffect(() => {
    fetchUserEvents();
  }, []);

  // useEffect(() => {
  //   switch (index) {
  //     case 0:
  //       setUserEvents(events);
  //       break;
  //     case 1:
  //       setUserEvents(distanceFilter);
  //       break;
  //     default:
  //       setUserEvents(events);
  //   }
  // }, [index]);

  return (
    <>
      {/* <Tab
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
      </Tab> */}
      <ScrollView>
        <>
          {userEvents.map((event, i) => {
            return (
              <EventListEntry event={event} key={i} />
            )
          })}
        </>
      </ScrollView>

    </>
  );
}
//
export default EventsScreen;
