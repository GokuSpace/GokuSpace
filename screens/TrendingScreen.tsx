import React, { Text, View, ScrollView} from "react-native";
import { ListItem } from "@rneui/base";
import { useState, useEffect } from "react";
import axios from 'axios'
import AnimeItem from './screen-components/trending-screens/AnimeItem';
import { SERVER } from '@env';
import AnimePicker from "./auth/AnimePicker";

function TrendingScreen() {
const [animeList, setAnimeList] = useState([{title: "loading anime titles"}]);
console.log(animeList)
useEffect(() => {
   axios.get(`http://${SERVER}/anime/titles`)
  .then((res) => {
     setAnimeList(res.data)
  })
  .catch(err => {
    console.log(err)
  })
}, [])

  return (

      animeList.length > 1
      ?
          animeList.map((anime, i) => {
            <ListItem>{anime.title}</ListItem>
          })
      : <Text>loading...</Text>

  );
}

export default TrendingScreen;
