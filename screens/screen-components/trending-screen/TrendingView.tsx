import { Tab } from "@rneui/themed";
import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Today from "./Today";
import Week from "./Week";
import animeSeries from '../../../animeSeries';
import DaysOfWeek from "./DayOfWeek";

import { Pressable } from "react-native";

const TrendingView = () => {
  const [index, setIndex] = useState(1);
  const [singleDay, setSingleDay] = useState('');
  const [dayMostTrending, setDayMostTrending] = useState({
    firsr: { title: '', total_votes: '', url: '' },
    second: { title: '', total_votes: '', url: '' },
    third: { title: '', total_votes: '', url: '' }
  })

  return (
    <>{!singleDay ?
      <>
        <Tab
          value={index}
          onChange={(e) => setIndex(e)}
          indicatorStyle={{
            backgroundColor: "orange",
            height: 7,
          }}
          containerStyle={{
            backgroundColor: "#EB5E28",

          }}
          variant="primary"
        >
          <Tab.Item title="Week" />
          <Tab.Item title="Today" />
        </Tab>
        <View>
          {index ?
            <Today animeSeries={animeSeries} />
            :
            <Week animeSeries={animeSeries} setSingleDay={setSingleDay} setDayMostTrending={setDayMostTrending} dayMostTrending={dayMostTrending} />
          }
        </View>
      </> :
      <>
        <TouchableOpacity onPress={() => setSingleDay('')} style={styles.button}>
        <Text style={styles.text}>Back</Text>
        </TouchableOpacity>
        <Tab value={0}
          onChange={(e) => console.log(e)}
          indicatorStyle={{
            backgroundColor: "#EB5E28",
            height: 3,

          }}
          variant='default'
        >
          <Tab.Item title={singleDay} />
        </Tab>
        <DaysOfWeek dayMostTrending={dayMostTrending} />
      </>
    }</>
  );
}

export default TrendingView;
const styles = StyleSheet.create({
  button: {
    backgroundColor:'white'
  },
  text: {
    fontSize:20,
    width: 60,
    paddingLeft:7


  },
});