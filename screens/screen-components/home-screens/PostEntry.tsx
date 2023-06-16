/* eslint-disable react/prop-types */

import { Avatar, ListItem } from "@rneui/themed";
import React from "react";


const PostEntry = ({ post }) => (

<ListItem  bottomDivider>
<Avatar
  rounded
  source={{
    uri: post.image_url,
  }}
/>
<ListItem.Content >
  <ListItem.Title >
    {post.name}
  </ListItem.Title>
  <ListItem.Subtitle>
    {post.text}
  </ListItem.Subtitle>
</ListItem.Content>
</ListItem>

);

export default PostEntry;
