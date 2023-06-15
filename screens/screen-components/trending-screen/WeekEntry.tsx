/* eslint-disable react/prop-types */
import React from 'react';
import { Pressable, Text } from 'react-native';
import { Avatar } from 'react-native-elements';


const WeekEntry = ({day, first, second, third, setSingleDay, setDayMostTrending}) => {
  const pressHandler = () => {
      setSingleDay(day);
      setDayMostTrending([first, second,third])
  }
  return (

    <Pressable onPress={pressHandler}>
      <Text>{day}</Text>
      <Avatar rounded source={{ uri: first.url }} size={100} />
      <Avatar rounded source={{ uri: second.url }} size={100} />
      <Avatar rounded source={{ uri: third.url }} size={100} />
    </Pressable>

  );
}

export default WeekEntry;