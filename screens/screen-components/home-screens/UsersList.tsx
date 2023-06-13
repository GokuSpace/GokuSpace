/* eslint-disable react/prop-types */

import { Tab } from "@rneui/themed";
import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import UserEntry from "./UserEntry";

const UsersList = ({ users }) => {
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [index, setIndex] = useState(1);
  const all = users;
  const friends = users.filter((user) => user.is_friend);
  const forYou = users.filter((user) => user.series === "Fullmetal Alchemist");




  useEffect(() => {
    switch (index) {
      case 0:
        setFilteredUsers(all);
        break;
      case 1:
        setFilteredUsers(friends);
        break;
      case 2:
        setFilteredUsers(forYou);
        break;
      default:
        setFilteredUsers(friends);
    }
  }, [index]);

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
        {filteredUsers.map((user) => {
          return (
            <>
              <UserEntry user={user} />
            </>
          );
        })}

      </ScrollView>
    </>
  );
}

export default UsersList;