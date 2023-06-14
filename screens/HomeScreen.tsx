import { Avatar, Button, ListItem, Tab } from "@rneui/themed";
import axios from 'axios';
import { useEffect, useState } from "react";
import React, { Dimensions, ScrollView, Text, View } from "react-native";
import getPosts from "../server/controllers/posts";
import { SlideUpModal } from './screen-components/home-screens/SlideUpModal';
import { SERVER } from "@env";

function HomeScreen() {
  const { height } = Dimensions.get('window');
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [index, setIndex] = useState(1);
  const [modalVisible, setModalVisible] = useState(false);


  // const friends = posts.filter((post) => a=.is_friend);
  // const forYou = posts.filter((char) => char.series === "Fullmetal Alchemist");
  console.log(allPosts)
  useEffect(() => {
      async function fetchPosts() {
      try {
        const response = await axios.get(`http://${SERVER}/posts`);
        setAllPosts(response.data);
        setFilteredPosts(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchPosts();
  }, [])

  async function addPost(req, res) {
  const {title, body, attachment, authorId} = req.body
    try {
      const response = await axios.post(`http://${SERVER}/posts`, {
        title: title,
        body: body,
        attachment: attachment ? attachment : null,
        authorId: authorId
      });
      setAllPosts((currAllPosts) => [...currAllPosts, response.data]);
      setFilteredPosts((currFilteredPosts) => [...currFilteredPosts, response.data]);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    switch (index) {
      case 0:
        // setFilteredPosts(posts);
        break;
      case 1:
        // setFilteredPosts(posts);
        break;
      case 2:
        // setFilteredPosts(posts);
        break;
      default:
        // setFilteredPosts(posts);
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
              <ListItem key={post.id} bottomDivider>
                {/* <Avatar
                  key={post.authorId}
                  rounded
                  source={{
                    uri: post.author.pictures[0],
                  }}
                /> */}
                <ListItem.Content key={post.id + "Content"}>
                  <ListItem.Title key={post.id + "Title"}>
                    {post.title}
                  </ListItem.Title>
                  <ListItem.Subtitle key={post.id + "Body"}>
                    {post.body}
                  </ListItem.Subtitle>
                </ListItem.Content>
              </ListItem>
            </>
          );
        })}
      <Button title="Add a Post" onPress={() => setModalVisible(true)} />
      {modalVisible && <SlideUpModal isVisible={modalVisible} onClose={() => setModalVisible(false)} onPost={addPost}/>}
      </ScrollView>
    </>
  );
}

export default HomeScreen;