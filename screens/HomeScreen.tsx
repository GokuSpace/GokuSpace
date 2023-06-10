import { useNavigation } from "@react-navigation/native";
import { Avatar, ListItem, Tab } from "@rneui/themed";
import { useEffect, useState } from "react";
import React, { ScrollView, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import characters from "../characters";

function HomeScreen() {
  const [filteredCharacters, setFilteredCharacters] = useState(characters);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index === 0) {
      setFilteredCharacters(characters);
    }
    if (index === 1) {
      setFilteredCharacters(friends);
    }
    if (index === 2) {
      setFilteredCharacters(forYou);
    }
  }, [index]);

  const friends = characters.filter((char) => {
    return char.is_friend;
  });
  const forYou = characters.filter((char) => {
    return (
      char.series === "Fullmetal Alchemist" || char.character === "Riza Hawkeye"
    );
  });

  return (
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
        <Tab.Item title="All" />
        <Tab.Item title="Friends" />
        <Tab.Item title="For You" />
      </Tab>
      <ScrollView>
        {filteredCharacters.map((character) => {
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
                  <ListItem.Title key={nameKey}>
                    {character.name}
                  </ListItem.Title>
                  <ListItem.Subtitle key={characterKey}>
                    {character.text}
                  </ListItem.Subtitle>
                </ListItem.Content>
              </ListItem>
            </>
          );
        })}
      </ScrollView>
    </>
  );
}

export default HomeScreen;
