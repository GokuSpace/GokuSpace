/* eslint-disable react/prop-types */

import { Tab } from "@rneui/themed";
import React, { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import PostEntry from "./PostEntry";

const PostsList = ({ allPosts, setAllPosts, setFriendsPosts, setForYouPosts, filteredPosts, index, setIndex }) => {

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
              <PostEntry allPosts={allPosts} setAllPosts={setAllPosts} setFriendsPosts={setFriendsPosts} setForYouPosts={setForYouPosts} post={post} />
            </>
          );
        })}

      </ScrollView>
    </>
  );
}

export default PostsList;