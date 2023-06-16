import { useRef, useEffect } from 'react';
import { Animated, Easing } from 'react-native';

const useAnimatedBottom = (show: boolean, height: number) => {
  const animatedValue = useRef(new Animated.Value(0));

  const bottom = animatedValue.current.interpolate({
    inputRange: [0, 1],
    outputRange: [-height, 0],
  });

  useEffect(() => {
    if (show) {
      Animated.timing(animatedValue.current, {
        toValue: 1,
        duration: 500,
        easing: Easing.bezier(0, 0, 0.5, 1),
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(animatedValue.current, {
        toValue: 0,
        duration: 900,
        easing: Easing.bezier(0, 0, 0.5, 1),
        useNativeDriver: false,
      }).start();
    }
  }, [show]);

  return bottom;
};

export default useAnimatedBottom;
