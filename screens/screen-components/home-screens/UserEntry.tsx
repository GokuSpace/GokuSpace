/* eslint-disable react/prop-types */

import { Avatar, ListItem } from "@rneui/themed";
import React from "react";


const UserEntry = ({ user }) => (

<ListItem  bottomDivider>
<Avatar
  rounded
  source={{
    uri: user.image_url,
  }}
/>
<ListItem.Content >
  <ListItem.Title >
    {user.name}
  </ListItem.Title>
  <ListItem.Subtitle>
    {user.text}
  </ListItem.Subtitle>
</ListItem.Content>
</ListItem>

);

export default UserEntry;
