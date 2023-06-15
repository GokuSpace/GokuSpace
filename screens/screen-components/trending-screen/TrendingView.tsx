import { Tab } from "@rneui/themed";
import React, { useEffect, useState } from "react";
import { View } from "react-native";
import Today from "./Today";
import Week from "./Week";
import exp from "constants";
import animeSeries from '../../../animeSeries';
import DaysOfWeek from "./DayOfWeek";
console.log(animeSeries)

const TrendingView = () => {
  const [index, setIndex] = useState(1);
  const [singleDay, setSingleDay] = useState('');
  const [dayMostTrending, setDayMostTrending] = useState([{},{},{}])
  //
  //

  return (
    <>{!singleDay ?
      <>
        <Tab
          value={index}
          onChange={(e) => setIndex(e)}
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
            <Today animeSeries={animeSeries} />
            :
            <Week animeSeries={animeSeries} setSingleDay={setSingleDay} setDayMostTrending={setDayMostTrending}/>
          }
        </View>
      </> :
      <>
        <Tab
          indicatorStyle={{
            backgroundColor: "white",
            height: 3,
          }}
          variant="primary"
        >
          <Tab.Item title={singleDay} />
        </Tab>
          <DaysOfWeek dayMostTrending={dayMostTrending}/>
      </>
    }</>
  );
}

export default TrendingView;
