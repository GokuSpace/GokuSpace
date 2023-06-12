import React, { Text, View } from "react-native";
import { Input, Button } from '@rneui/themed';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import animeData from '../../animeData.json';
import animeCharData from '../../charactersData.json'


export default function AnimePicker({form, setForm}) {
  const animeList = [];

  const changeForm = (text:string, field:string) => {
    setForm({
      ...form,
      [field]: text
    })
  }

// Get list of anime from DB to display anime list,
// once anime is chosen, get list of characters for anime id to display character list

  return (
    <>
    <Text>Favorite Anime</Text>
    <Input onChangeText={text => changeForm(text, 'favoriteAnimeId')} value={form.favoriteAnimeId}/>
    <Text>Favorite Character</Text>
    <Input onChangeText={text => changeForm(text, 'favoriteCharacterId')} value={form.favoriteCharacterId}/>
    </>
  );
}
