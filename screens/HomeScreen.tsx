import { useNavigation } from "@react-navigation/native";
import { Avatar, ListItem } from "@rneui/themed";
import React, { View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import posts from "../dummy_data";

function HomeScreen() {
  return (
    <View>
      {posts.map((post) => {
        return (
          <>
            <ListItem key={post.id} bottomDivider>
              <Avatar
                rounded
                source={{
                  uri: "../assets/me_crop.jpg",
                }}
              />
              <ListItem.Content>
                <ListItem.Title>{post.username}</ListItem.Title>
                <ListItem.Subtitle>{post.text}</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          </>
        );
      })}
    </View>
  );
}

export default HomeScreen;
