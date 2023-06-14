
import { Button } from "@rneui/themed";
import React, { useState } from "react";
import users from "../characters";
import BottomSheetComponent from "./screen-components/BottomSheetComponent"
import SlideUp from "./screen-components/home-screens/SlideUp";
import UsersList from "./screen-components/home-screens/UsersList";


function HomeScreen() {
  const [showSlideup, setShowSlideup] = useState(false)
  const [isUser, setIsUser] = useState(false);
  const [isAuth, setIsAuth] = useState(false);
  const [userImage, setUserImage] = useState("https://cdn.myanimelist.net/images/anime/1223/96541.jpg?s=2ab13dc6a3e874f5dc8b7229632f8c1f");
import { useNavigation } from "@react-navigation/native";
import { Avatar, Button, ListItem, Tab } from "@rneui/themed";
import { useEffect, useState } from "react";
import React, { Dimensions, ScrollView, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import characters from "../characters";
import BottomSheetComponent from "./screen-components/home-screens/BottomSheetComponent";
import { SlideUpModal } from './screen-components/home-screens/SlideUpModal';

function HomeScreen() {
  const { height } = Dimensions.get('window');

  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [index, setIndex] = useState(1);
  const [modalVisible, setModalVisible] = useState(false);


  return (
    <>
      <>
        <UsersList users={users} />
        <BottomSheetComponent />
      </>

      <>
        <Button title='slideup' onPress={() => setShowSlideup(!showSlideup)} />
        <SlideUp
          show={showSlideup}
          onOuterClick={() => setShowSlideup(false)} isUser={isUser} user={{ image_url: userImage }} isAuth={isAuth}>
        </SlideUp>
      </>
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
              <ListItem key={character.user_id} bottomDivider>
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
      <Button title="Add a Post" onPress={() => setModalVisible(true)} />
      {modalVisible && <SlideUpModal isVisible={modalVisible} onClose={() => setModalVisible(false)} />}
      </ScrollView>
    </>
  );
}

export default HomeScreen;