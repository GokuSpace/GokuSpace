/* eslint-disable react/prop-types */

import { Tab } from "@rneui/themed";
import React, { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import PostEntry from "./PostEntry";

const PostsList = ({ posts }) => {
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [index, setIndex] = useState(1);
  const all = posts;
  const friends = posts.filter((post) => post.is_friend);
  const forYou = posts.filter((post) => post.series === "Fullmetal Alchemist");




  useEffect(() => {
    switch (index) {
      case 0:
        setFilteredPosts(all);
        break;
      case 1:
        setFilteredPosts(friends);
        break;
      case 2:
        setFilteredPosts(forYou);
        break;
      default:
        setFilteredPosts(friends);
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
              <PostEntry post={post} />
            </>
          );
        })}

      </ScrollView>
    </>
  );
}

export default PostsList;