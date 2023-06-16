/* eslint-disable react/prop-types */
import React from "react";
import { Button } from "react-native";
import { Avatar } from 'react-native-elements';


const UserNavigationSlide = ({ user }) => (
  <>
  <Avatar rounded
    source={{
      uri: user.image_url,

    }} size="large" />
  <Button title='Posts' />
  <Button title='Profile' />
  <Button title='Votes' />
</>
);

export default UserNavigationSlide;