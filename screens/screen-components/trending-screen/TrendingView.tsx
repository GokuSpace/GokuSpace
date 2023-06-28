import { Tab } from "@rneui/themed";
import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Today from "./Today";
import Week from "./Week";
import animeSeries from '../../../animeSeries';
import DaysOfWeek from "./DayOfWeek";
import { Pressable } from "react-native";
import { color } from "react-native-reanimated";

const TrendingView = () => {
  const [index, setIndex] = useState(1);
  const [singleDay, setSingleDay] = useState('');
  const [dayMostTrending, setDayMostTrending] = useState({
    firsr: { title: '', total_votes: '', url: '', body:''},
    second: { title: '', total_votes: '', url: '', body:''},
    third: { title: '', total_votes: '', url: '', body:''}
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
            <Week animeSeries={animeSeries} setSingleDay={setSingleDay} setDayMostTrending={setDayMostTrending} />
          }
        </View>
      </> :
      <>
        <TouchableOpacity  >
        <Text style={styles.text} >Back</Text>
        </TouchableOpacity>
        <Tab value={0}
          onChange={() => setSingleDay('')}
          indicatorStyle={{
            backgroundColor: "#EB5E28",
            height: 3,

          }}
          titleStyle={{
            color:'#EB5E28',
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
  text: {
    fontSize:20,
    width: 60,
    paddingLeft:10,
    zIndex:1,
    position:'absolute',
    color:'#252422',
    fontWeight:'500'
  },

});