import { Tab } from "@rneui/themed";
import React, { useEffect, useState } from "react";
import { View } from "react-native";
import Today from "./Today";
import Week from "./Week";
import exp from "constants";
import animeSeries from '../../../animeSeries';
console.log(animeSeries)

const TrendingView = () => {

const [index, setIndex] = useState(1);

  return (
    <>
      <Tab
        value={index}
        onChange={(e) => {
          console.log(e)
          setIndex(e)}}
        indicatorStyle={{
          backgroundColor: "white",
          height: 3,
        }}
        variant="primary"
      >
        <Tab.Item title="Week" />
        <Tab.Item title="Today" />
      </Tab>
      <View>
        {index ?
        <Today animeSeries={animeSeries}/>
        :
        <Week />
        }
      </View>
    </>
  );
}

export default TrendingView;
