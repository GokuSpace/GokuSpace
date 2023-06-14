import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import { Input, Button } from '@rneui/themed';
import { SelectList } from 'react-native-dropdown-select-list'
import { useNavigation } from '@react-navigation/native';
import animeData from '../../animeData.json';
import animeCharData from '../../charactersData.json';
import axios from 'axios';
import { SERVER } from '@env';

export default function AnimePicker({form, setForm}) {
  const [animeData, setAnimeData] = useState([]);
  const [animeID, setAnimeID] = useState("");
  const [characterData, setCharacterData] = useState([]);
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    axios.get(`http://${SERVER}/anime`)
    .then(res => {
      const formattedAnimeData = res.data.anime.map((anime) => ({
        key: anime.id.toString(),
        value: anime.title,
      }));
      // const formattedCharacterData = res.data.characters.map((char) => ({
      //   key: char.id.toString(),
      //   value: char.name,
      // }));
      setAnimeData(formattedAnimeData);
      setCharacterData(res.data.characters);
    })
    .catch(err => {
      console.error(err)
    })
  },[])

  useEffect(() => {
    const data = characterData.filter((char) => {
    return char.mal_id.toString() === animeID;
    }).map((char) => {
      return {
        key: char.id.toString(),
        value: char.name
      };
    })
    console.log(data)
    setCharacterData(data)
  }, [trigger])

  const handleSelectAnime = (item) => {
    setAnimeID(item);
    changeForm(item, 'favoriteAnimeId');
    setTrigger(!trigger);
  };

  const handleSelectAnimeChar = (item) => {
    changeForm(item.value, 'favoriteCharacter');
  };

  const changeForm = (text, field) => {
    setForm({
      ...form,
      [field]: text
    });
  };

  return (
    animeData.length
    ? <>
      <Text>Favorite Anime</Text>
      <SelectList
        setSelected={handleSelectAnime}
        data={animeData}
        save="key"
        placeholder="Search..."
      />
      <Text>Favorite Character</Text>
      <SelectList
        setSelected={handleSelectAnimeChar}
        data={characterData}
        save="key"
        placeholder="Search..."
      />
    </>
    : <Text>loading...</Text>
  );
}
