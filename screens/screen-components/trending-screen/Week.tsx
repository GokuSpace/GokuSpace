/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React from "react";
import { View, Text, Pressable } from "react-native";
import { ListItem, Avatar } from "react-native-elements";
import most_3_trending_by_date from "./most_3_trending_by_date";
import animeSeries from "../../../animeSeries";
import { ScrollView } from "react-native-gesture-handler";

const Week = ({ animeSeries }) => {
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const currentDate = new Date();
  const currentWeekDay = currentDate.getDay();
  const currentMonthDay = currentDate.getDate()


  return (
    <ScrollView >
      {daysOfWeek.map((day, index) => {
        const { first, second, third } = most_3_trending_by_date(animeSeries, currentDate.setDate(currentMonthDay - currentWeekDay + index));

        return (

          <Pressable onPress={e => console.log('>>>>>>>>>>>>>>>>>',e)}>
            <Text>{day}</Text>
            <Avatar rounded source={{ uri: first.url }} size={100} />
            <Avatar rounded source={{ uri: second.url }} size={100} />
            <Avatar rounded source={{ uri: third.url }} size={100} />
          </Pressable>

        );
      })}
    </ScrollView>
  );
}

export default Week;


