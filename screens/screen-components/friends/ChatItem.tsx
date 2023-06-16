import * as React from 'react';
// import { store } from '/redux/store';
import {
  StyleSheet,
  // Button,
  View,
  // SafeAreaView,
  Text,
  // Alert,
  // Pressable,
} from 'react-native';
import PropTypes from 'prop-types';
import tw from 'tailwind-react-native-classnames';

// import Fonts from "constants/Fonts.js";

const MessagesChatItem = ({
  isSenderUser,

  body,
}) => {
  return (
    <View
      style={{
        alignItems: isSenderUser ? 'flex-end' : 'flex-start',
      }}
    >
      <View
        style={{
          ...styles.chatItem,
          backgroundColor: isSenderUser ? '#EB5E28' : '#FFFCF2',

          borderRadius: 4,
          marginVertical: 3,
        }}
      >
        <View style={styles.chatText}>
          <Text
            style={{ color: isSenderUser ? 'white' : '#EB5E28', fontSize: 16 }}
          >
            {body}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default MessagesChatItem;

const styles = StyleSheet.create({
  chatItem: {
    width: 250,
    paddingVertical: 12,
    paddingHorizontal: 6,
    marginHorizontal: 45,
  },
  chatText: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 15,
    gap: 5,
  },
});
