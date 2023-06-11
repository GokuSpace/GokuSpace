import { useNavigation } from "@react-navigation/native";
import { Avatar, ListItem, Tab } from "@rneui/themed";
import { useEffect, useState } from "react";
import React, { ScrollView, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import characters from "../characters";

function HomeScreen() {
  const friends = characters.filter((char) => char.is_friend);
  const [filteredCharacters, setFilteredCharacters] = useState(friends);
  const [index, setIndex] = useState(1);

  const forYou = characters.filter(
    (char) =>
      char.series === "Fullmetal Alchemist" || char.character === "Riza Hawkeye"
  );

  useEffect(() => {
    switch (index) {
      case 0:
        setFilteredCharacters(characters);
        break;
      case 1:
        setFilteredCharacters(friends);
        break;
      case 2:
        setFilteredCharacters(forYou);
        break;
      default:
        setFilteredCharacters(friends);
    }
  }, [index]);

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
