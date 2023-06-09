import { useNavigation } from "@react-navigation/native";
import { Avatar, Button, Icon, ListItem, Tab } from "@rneui/themed";
import { useEffect, useState } from "react";
import { React, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Slider from "react-native-slider";
import tw from 'tailwind-react-native-classnames';
import getEventsByDistance100 from '../jerryMockDataFolder/getEventsByDistance100.json';
import getEventsByDistance20 from '../jerryMockDataFolder/getEventsByDistance20.json';
import getEventsByDistance50 from '../jerryMockDataFolder/getEventsByDistance50.json';
import getEventsByDistanceAll from '../jerryMockDataFolder/getEventsByDistanceAll.json';
import getMyRSVPevents from '../jerryMockDataFolder/getMyRSVPevents.json';
import EventListEntry from "./screen-components/events-screens/EventListEntry";




function EventsScreen() {
  const navigation = useNavigation();

  const [displayedEvents, setDisplayedEvents] = useState([]);
  const [myEvents, setMyEvents] = useState([]);
  const [userEvents, setUserEvents] = useState([]); //represents all events
  const [eventsWithin20, setEventsWithin20] = useState([]);
  const [eventsWithin50, setEventsWithin50] = useState([]);
  const [eventsWithin100, setEventsWithin100] = useState([]);

  const [index, setIndex] = useState(0);
  const [distance, setDistance] = useState(1);

  const handleValueChange = (value) => {
    setDistance(value);
  };


  const fetchAllUserEvents = () => {
    axios
      .get(`http://${SERVER}/users/cliuk0wnb0002uz6aw5dc3jrg/events`, {
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

  const fetchEventsWithin20 = () => {
    axios
      .get(`http://${SERVER}/users/cliuk0wnb0002uz6aw5dc3jrg/events`, {
        params: {
          distance: "20"
        }
      })
      .then(response => {
        setEventsWithin20(response.data);
      })
      .catch(error => {
        console.log('error with axios get for user events', error);
      });
  };

  const fetchEventsWithin50 = () => {
    axios
      .get(`http://${SERVER}/users/cliuk0wnb0002uz6aw5dc3jrg/events`, {
        params: {
          distance: "50"
        }
      })
      .then(response => {
        setEventsWithin50(response.data);
      })
      .catch(error => {
        console.log('error with axios get for user events', error);
      });
  };

  const fetchEventsWithin100 = () => {
    axios
      .get(`http://${SERVER}/users/cliuk0wnb0002uz6aw5dc3jrg/events`, {
        params: {
          distance: "100"
        }
      })
      .then(response => {
        setEventsWithin100(response.data);
      })
      .catch(error => {
        console.log('error with axios get for user events', error);
      });
  };

  const fetchMyEvents = () => {
    axios
      .get(`http://${SERVER}/users/cliuk0wnb0002uz6aw5dc3jrg/my_events`)
      .then(response => {
        setMyEvents(response.data);
      })
      .catch(error => {
        console.log('error with axios get for user events', error);
      });
  }

  useEffect(() => {
    // fetchAllUserEvents();
    // fetchMyEvents();
    // fetchEventsWithin20();
    // fetchEventsWithin50()
    // fetchEventsWithin100()
    setMyEvents(getMyRSVPevents);
    setEventsWithin20(getEventsByDistance20);
    setEventsWithin50(getEventsByDistance50);
    setEventsWithin100(getEventsByDistance100);
    setUserEvents(getEventsByDistanceAll);
  }, []);

  useEffect(() => {
    let filteredEvents = [];
    switch (index) {
      case 0:
        switch (distance) {
          case 1:
            filteredEvents = eventsWithin20;
            break;
          case 2:
            filteredEvents = eventsWithin50;
            break;
          case 3:
            filteredEvents = eventsWithin100;
            break;
          case 4:
            filteredEvents = userEvents;
            break;
          default:
            filteredEvents = userEvents;
        }
        break;
      case 1:
        filteredEvents = myEvents;
        break;
      default:
        filteredEvents = userEvents;
    }
    setDisplayedEvents(filteredEvents);
  }, [index, distance]);



  const handleAddEventPress = () => {
    navigation.navigate("New Event", { handleCreateEvent: handleCreateEvent });
  }

  const handleRSVPpress = (event) => {
    const updatedEvents = [...myEvents];
    updatedEvents.push(event);
    setMyEvents(updatedEvents);
  };

  const handleCreateEvent = (event) => {
    // console.log(event);
    const { address, name, startDate, city, description, picture } = event
    const newEventObject = {
      address,
      name,
      startDate,
      city,
      description,
      friendsGoing: false,
      attendees: 1,
      picture
    }

    const updatedEvents = [...myEvents, newEventObject];
    // const updatedEvents20 = [...eventsWithin20, newEventObject];
    // const updatedEvents50 = [...eventsWithin50, newEventObject];
    // const updatedEvents100 = [...eventsWithin100, newEventObject];
    const updatedEventsAll = [...userEvents, newEventObject];

    setMyEvents(updatedEvents);
    // setEventsWithin20(updatedEvents20);
    // setEventsWithin50(updatedEvents50);
    // setEventsWithin100(updatedEvents100);
    setUserEvents(updatedEventsAll);

  }

  return (
    <>
      <Tab
        onChange={(e) => setIndex(e)}
        indicatorStyle={{
          backgroundColor: "#FF8200",
          height: 3,
        }}
        variant="primary"
        value={index}
      >
        <Tab.Item style={[tw`bg-gray-300`, { backgroundColor: 'orange' }]} containerStyle={(active) => ({
          backgroundColor: active ? "#EB5E28" : undefined,
        })} title="Near Me" />
        <Tab.Item style={[tw`bg-gray-300`, { backgroundColor: 'orange' }]} containerStyle={(active) => ({
          backgroundColor: active ? "#EB5E28" : undefined,
        })} title="My Events" />
      </Tab>
      {index === 0 && (
        <View style={[tw`flex items-center mb-8`, { backgroundColor: 'white', marginBottom: 0 }]}>

          <Slider
            style={tw`w-4/5 h-8`}
            value={distance}
            minimumValue={1}
            maximumValue={4}
            step={1}
            onValueChange={handleValueChange}
            minimumTrackTintColor="orange"
            maximumTrackTintColor="gray"
            thumbImage={require('../assets/like-fire2.png')} // Custom image for the thumb
            thumbStyle={[tw`w-6 h-8 rounded-full`, { backgroundColor: 'transparent' }]}
          />

          <View style={[tw`flex-row justify-between w-4/5 mt-2`, { backgroundColor: 'white' }]}>
            <Text style={[tw`text-xs`, distance === 1 && { color: 'orange' }]}>20 miles</Text>
            <Text style={[tw`text-xs`, distance === 2 && { color: 'orange' }]}>50 miles</Text>
            <Text style={[tw`text-xs`, distance === 3 && { color: 'orange' }]}>100 miles</Text>
            <Text style={[tw`text-xs`, distance === 4 && { color: 'orange' }]}>All</Text>
          </View>

        </View>
      )}
      <ScrollView>
        <>
          {displayedEvents.map((event, i) => {
            return (
              <EventListEntry event={event} key={i} handleRSVPpress={handleRSVPpress} />
            )
          })}
        </>
      </ScrollView>
      {/* <TouchableOpacity style={tw`absolute bottom-6 right-6 w-16 h-16 bg-red-500 rounded-full items-center justify-center`} onPress={handleAddEventPress}>
        <Text style={tw`text-white text-2xl font-bold`}>+</Text>
      </TouchableOpacity> */}

      <View style={styles.addButton}>
        <Icon
          raised
          name='plus'
          type='font-awesome-5'
          color='#f50'
          onPress={handleAddEventPress} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  addButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  }
})

export default EventsScreen;
