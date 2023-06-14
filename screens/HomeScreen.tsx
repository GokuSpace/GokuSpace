import { Button } from "@rneui/themed";
import React, { useState } from "react";
import users from "../characters";
import { SlideUpModal } from './screen-components/home-screens/SlideUpModal';
import SlideUp from "./screen-components/home-screens/SlideUp";
import UsersList from "./screen-components/home-screens/UsersList";


function HomeScreen() {
  const [showSlideup, setShowSlideup] = useState(false)
  const [isUser, setIsUser] = useState(false);
  const [isAuth, setIsAuth] = useState(false);
  const [userImage, setUserImage] = useState("https://cdn.myanimelist.net/images/anime/1223/96541.jpg?s=2ab13dc6a3e874f5dc8b7229632f8c1f");
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <>
        <UsersList users={users} />
        {modalVisible && <SlideUpModal isVisible={modalVisible} onClose={() => setModalVisible(false)} />}
      </>

      <>
        <Button title='slideup' onPress={() => setShowSlideup(!showSlideup)} />
        <SlideUp
          show={showSlideup}
          onOuterClick={() => setShowSlideup(false)} isUser={isUser} user={{ image_url: userImage }} isAuth={isAuth}>
        </SlideUp>
      </>
    </>
  );
}

export default HomeScreen;
