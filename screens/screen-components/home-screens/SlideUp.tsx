/* eslint-disable react/prop-types */
// Importing required dependencies
import React, { ReactNode } from 'react'
import {
  Animated,
  Pressable,
  StyleSheet,
  useWindowDimensions,
  View,
  Dimensions,
  Button
} from 'react-native'

import useAnimatedBottom from './slideup-component/useAnimatedBottom';
import UserNavigationSlide from './slideup-component/UserNavigationSlide';
import AuthNavigationSlide from './slideup-component/AuthNavigationSlide';


interface user {
  image_url: string;
}
interface Props {
  show: boolean;
  height?: number;
  onOuterClick?: () => void;
  isUser: boolean;
  isAuth: boolean;
  user: user;
  children?: ReactNode;
}
const DEFAULT_HEIGHT = Dimensions.get('window').height / 2;


const SlideUp = ({ show, height = DEFAULT_HEIGHT, onOuterClick, isUser, user, isAuth }: Props) => {

  const { height: screenHeight } = useWindowDimensions();
  const bottom = useAnimatedBottom(show, DEFAULT_HEIGHT)



  return (
    <>
      {show && (
        <Pressable
          onPress={onOuterClick}
          style={[styles.outerOverlay, { height: screenHeight }]}>
          <View />
        </Pressable>
      )}

      <Animated.View style={[styles.bottomSheet, { height, bottom }]}>
        <Button title="Close" onPress={onOuterClick} />
        {isUser &&
          <UserNavigationSlide user={user} />
        }
        {isAuth &&
          <>
            <AuthNavigationSlide />
          </>
        }
      </Animated.View>
    </>
  )
}


export default SlideUp;

//styling
const styles = StyleSheet.create({
  outerOverlay: {
    position: 'absolute',
    width: '100%',
    zIndex: 1,
    backgroundColor: 'none',
  },
  bottomSheet: {
    position: 'absolute',
    width: '100%',
    zIndex: 1,
    backgroundColor: 'dodgerblue',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
})


