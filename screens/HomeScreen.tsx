import { Button, Icon } from "@rneui/themed";
import React, { useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import posts from "../data/home-screen-data/posts";
import PostsList from "./screen-components/home-screens/PostsList";
import SlideUp from "./screen-components/home-screens/SlideUp";
import { SlideUpModal } from './screen-components/home-screens/SlideUpModal';


function HomeScreen() {
  const [showSlideup, setShowSlideup] = useState(false)
  const [isUser, setIsUser] = useState(true);
  const [isAuth, setIsAuth] = useState(false);
  const [userImage, setUserImage] = useState("https://cdn.myanimelist.net/images/anime/1223/96541.jpg?s=2ab13dc6a3e874f5dc8b7229632f8c1f");
  const [modalVisible, setModalVisible] = useState(false);


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <PostsList posts={posts} />
      </ScrollView>
      <View style={styles.addButton}>
        <Icon 
        raised
        name='pen'
        type='font-awesome-5'
        color='#f50'
        onPress={() => setModalVisible(!modalVisible)} />
      </View>
      {modalVisible && <SlideUpModal isVisible={modalVisible} onClose={() => setModalVisible(false)} />}
    </SafeAreaView>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  }
})
