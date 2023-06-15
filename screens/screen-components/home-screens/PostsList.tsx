/* eslint-disable react/prop-types */

import { Tab } from "@rneui/themed";
import React, { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import PostEntry from "./PostEntry";

const PostsList = ({ allPosts, setAllPosts }) => {
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [friendsPosts, setFriendsPosts] = useState([]);
  const [forYouPosts, setForYouPosts] = useState([]);
  const [index, setIndex] = useState(1);
  
useEffect(() => {
  if (allPosts) {
    setFriendsPosts(allPosts.filter((post) => post.is_friend));
    setForYouPosts(allPosts.filter((post) => post.series === "Fullmetal Alchemist"));
  }
}, [allPosts])




  useEffect(() => {
    switch (index) {
      case 0:
        setFilteredPosts(allPosts);
        break;
      case 1:
        setFilteredPosts(friendsPosts);
        break;
      case 2:
        setFilteredPosts(forYouPosts);
        break;
      default:
        setFilteredPosts(friendsPosts);
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