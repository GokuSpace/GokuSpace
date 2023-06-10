import { useNavigation } from "@react-navigation/native";
import { Avatar, ListItem } from "@rneui/themed";
import React, { ScrollView, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import characters from "../characters";

function HomeScreen() {
  return (
    <ScrollView>
      {characters.map((character) => {
        const contentKey = Math.floor(1000000 * Math.random());
        const nameKey = Math.floor(1000000 * Math.random());
        const characterKey = Math.floor(1000000 * Math.random());
        return (
          <>
            <ListItem key={character.mal_id} bottomDivider>
              <Avatar
                key={character.image_url}
                rounded
                source={{
                  uri: character.image_url,
                }}
              />
              <ListItem.Content key={contentKey}>
                <ListItem.Title key={nameKey}>{character.name}</ListItem.Title>
                <ListItem.Subtitle key={characterKey}>
                  {character.text}
                </ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          </>
        );
      })}
    </ScrollView>
  );
}

export default HomeScreen;
