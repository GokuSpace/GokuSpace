/* eslint-disable react/prop-types */
import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import { Avatar } from 'react-native-elements';


const WeekEntry = ({day, first, second, third, setSingleDay, setDayMostTrending}) => {
  const pressHandler = () => {
      setSingleDay(day);
      setDayMostTrending({
        first:{
          title:first.title,
          total_votes: first.total_votes,
          url:first.url,
          body: first.body
        },
        second:{
          title:second.title,
          total_votes: second.total_votes,
          url:second.url,
          body: second.body
        },
        third:{
          title:third.title,
          total_votes: third.total_votes,
          url:third.url,
          body: third.body
        },

      })
  }
  return (

    <Pressable onPress={pressHandler} style={styles.container}>
      <Text style={styles.day}>{day[0]}</Text>
      <Avatar rounded source={{ uri: first.url }} size={70} />
      <Avatar rounded source={{ uri: second.url }} size={70} />
      <Avatar rounded source={{ uri: third.url }} size={70} />
    </Pressable>

  );
}

export default WeekEntry;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-evenly',
    borderBottomColor:'#CCC5B9',
    borderBottomWidth:1,
    paddingVertical:15,

  },
  day:{
    fontSize:30,
    fontWeight:'600',
    color:'gray'
  }
});