import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Input, Button } from '@rneui/themed';
import { SelectList } from 'react-native-dropdown-select-list'
import { useNavigation } from '@react-navigation/native';
import animeData from '../../animeData.json';
import animeCharData from '../../charactersData.json'

export default function AnimePicker({form, setForm}) {
  const [animeID, setAnimeID] = useState("");
  const [formattedAnimeCharData, setFormattedAnimeCharData] = useState(['Select an anime first']);

  const formattedAnimeData = animeData.map((anime) => ({
    key: anime.mal_id.toString(),
    value: anime.title,
  }));

  const formatAnimeCharData = () => {
    const formattedData = animeCharData.filter((char) => {
      return char.mal_id.toString() === animeID;
    }).map((char) => {
      return {
        key: char.mal_id.toString(),
        value: char.name
      };
    });    
    setFormattedAnimeCharData(formattedData);
  }

  const handleSelectAnime = (item) => {
    setAnimeID(item);
    changeForm(item, 'favoriteAnimeId');
    setFormattedAnimeCharData(['Select an anime first'])
    formatAnimeCharData();
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
    <>
      <Text>Favorite Anime</Text>
      <SelectList 
        setSelected={handleSelectAnime}
        data={formattedAnimeData}
        save="key"
        placeholder="Search..."
      />
      <Text>Favorite Character</Text>
      <SelectList 
        setSelected={handleSelectAnimeChar}
        data={formattedAnimeCharData}
        save="value"
        placeholder="Search..."
      />
    </>
  );
}
