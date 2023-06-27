/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React from "react";
import most_3_trending_by_date from "./most_3_trending_by_date";
import { ScrollView } from "react-native-gesture-handler";
import WeekEntry from "./WeekEntry";
import { v4 as uuidv4 } from 'uuid';

const Week = ({ animeSeries, setSingleDay, setDayMostTrending }) => {
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const currentDate = new Date();
  const currentWeekDay = currentDate.getDay();
  const currentMonthDay = currentDate.getDate()

  return (
    <ScrollView >
      {daysOfWeek.map((day, index) => {
        const { first, second, third } = most_3_trending_by_date(animeSeries, currentDate.setDate(currentMonthDay - currentWeekDay + index));

        // Include the key prop with unique value using uuidv4
        return (<WeekEntry key={uuidv4()} day={day} first={first} second={second} third={third} setSingleDay={setSingleDay} setDayMostTrending={setDayMostTrending} />);
      })}
    </ScrollView>
  );
}

export default Week;


