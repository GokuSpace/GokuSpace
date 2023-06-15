import React, { useState } from 'react';
import { Image, View } from 'react-native';
import GestureRecognizer, {
} from 'react-native-swipe-gestures';
const userProfilePics = ["https://cdn.myanimelist.net/images/anime/3/83.jpg?s=85e5e3eb0709631191d66db3f6db4cfa", "https://cdn.myanimelist.net/images/anime/3/83.jpg?s=85e5e3eb0709631191d66db3f6db4cfa"];



const AuthNavigationSlide = () => {
  const [index, setIndex] = useState(0);

  const onSwipeLeft = () => {
    index === 0 ? setIndex(1) : setIndex(0);
  };
  const onSwipeRight = () => {
    index === 0 ? setIndex(1) : setIndex(0);
  };

  const config = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80,
  };
  return (
    <GestureRecognizer
      onSwipeLeft={onSwipeLeft}
      onSwipeRight={onSwipeRight}
      config={config}
      style={{ flex: 1 }}
    >
      <View style={{ flex: 1 }}>
        <Image
          source={{
            uri: userProfilePics[index],
            width: 100,
            height: 100,
          }}
        />

      </View>
    </GestureRecognizer>
  );
}

export default AuthNavigationSlide;

