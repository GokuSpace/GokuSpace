import { useNavigation } from "@react-navigation/native";
import React, { Image, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import posts from "../dummy_data";

function HomeScreen() {
  return (
    <View>
      {posts.map((post) => {
        return (
          <>
            <Text>{post.username}</Text>
            <Text>{post.text}</Text>
          </>
        );
      })}
    </View>
  );
}

export default HomeScreen;
