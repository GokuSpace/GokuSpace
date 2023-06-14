import React, { Text, View, ScrollView} from "react-native";
import { ListItem } from "@rneui/base";
import { useState, useEffect } from "react";
import axios from 'axios'
import AnimeItem from './AnimeItem';
import { SERVER } from '@env';
import AnimePicker from "../../auth/AnimePicker";

function TrendingScreen() {
const [animeList, setAnimeList] = useState([{title: "loading anime titles"}]);
useEffect(() => {
   axios.get(`http://${SERVER}/anime/titles`)
  .then((res) => {
    console.log(res.data)
     setAnimeList(res.data)
  })
  .catch(err => {
    console.log(err)
  })
}, [])

  return (
    <View>
      {animeList.length > 1
      ? <ScrollView>
          {animeList.map((anime, i) => {
            <AnimeItem
              anime={anime}
              key={i}
            />
          })}
        </ScrollView>
      : <Text>loading...</Text>}
    </View>
  );
}

export default TrendingScreen;
