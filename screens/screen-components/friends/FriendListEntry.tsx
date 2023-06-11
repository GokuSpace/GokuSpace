import { Icon, ListItem } from '@rneui/base';
import { Button } from '@rneui/themed';
import React from 'react';
import { Image, View, StyleSheet, Text } from 'react-native';
import tw from 'tailwind-react-native-classnames';

type Friend = {
  id: string;
  username: string;
  nearby: boolean;
};

export default function FriendListEntry({ item }: { item: Friend }) {
  return (
    // <ListItem bottomDivider style={tw`flex-1 items-center flex-row`}>
    <ListItem bottomDivider containerStyle={tw`flex-1 items-start flex-row`}>
      <View style={tw`relative`}>
        <View style={tw`bg-gray-200 w-16 h-16 rounded-full`} />
        {item.nearby && (
          <View style={tw`absolute -bottom-1 -right-1`}>
            <Icon name="location-pin" color="red" size={35} />
          </View>
        )}
      </View>
      <View style={tw`flex-1 flex-col`}>
        <Text style={tw`text-lg mb-1`}>{item.username}</Text>
        <View style={tw`flex-1 flex-row`}>
          <Button
            titleStyle={tw`text-sm`}
            buttonStyle={tw`px-4 py-0 rounded-full mr-4`}
            color="secondary"
          >
            Accept
          </Button>
          <Button
            titleStyle={tw`text-sm`}
            buttonStyle={tw`px-4 py-0 rounded-full`}
            color="secondary"
          >
            Reject
          </Button>
        </View>
      </View>
    </ListItem>
  );
}
