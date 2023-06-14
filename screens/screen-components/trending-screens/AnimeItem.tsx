import React, { Text, View, ScrollView} from "react-native";
import { ListItem } from "@rneui/base";

export default function AnimeItem({anime}) {
  return (
      <ListItem>
        {anime.title}
      </ListItem>
  )
}