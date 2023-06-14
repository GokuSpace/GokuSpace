import { Avatar, Button, ListItem, Tab } from "@rneui/themed";
import axios from 'axios';
import { useEffect, useState } from "react";
import React, { Dimensions, ScrollView, Text, View } from "react-native";
import characters from "../characters";
import getPosts from "../server/controllers/posts";
import { SlideUpModal } from './screen-components/home-screens/SlideUpModal';

function HomeScreen() {
  const { height } = Dimensions.get('window');
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [index, setIndex] = useState(1);
  const [modalVisible, setModalVisible] = useState(false);


  const friends = characters.filter((char) => char.is_friend);
  const forYou = characters.filter((char) => char.series === "Fullmetal Alchemist");

  // useEffect(() => {
  //     async function fetchPosts() {
  //     try {
  //       const response = await axios.get('http://localhost:3000/posts');
  //       setAllPosts(response.data);
  //       setFilteredPosts(response.data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }

  //   fetchPosts();
  // }, [])

  // async function addPost(req, res) {
  // const {title, body, attachment, authorId} = req.body
  //   try {
  //     const response = await axios.post('http://localhost:3000/posts', {
  //       title: title,
  //       body: body,
  //       attachment: attachment ? attachment : null,
  //       authorId: authorId
  //     });
  //     setAllPosts((currAllPosts) => [...currAllPosts, response.data]);
  //     setFilteredPosts((currFilteredPosts) => [...currFilteredPosts, response.data]);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  useEffect(() => {
    switch (index) {
      case 0:
        setFilteredPosts(characters);
        break;
      case 1:
        setFilteredPosts(friends);
        break;
      case 2:
        setFilteredPosts(forYou);
        break;
      default:
        setFilteredPosts(friends);
    }
  }, [index]);

  if (!filteredPosts) {
    return <View>
      <Text>Loading...</Text>
    </View>
  }

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
        {filteredPosts.map((post) => {
          return (
            <>
              <ListItem key={post.user_id} bottomDivider>
                <Avatar
                  key={post.image_url}
                  rounded
                  source={{
                    uri: post.image_url,
                  }}
                />
                <ListItem.Content key={post.user_id + "Content"}>
                  <ListItem.Title key={post.user_id + "Title"}>
                    {post.name}
                  </ListItem.Title>
                  <ListItem.Subtitle key={post.id + "Body"}>
                    {post.text}
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