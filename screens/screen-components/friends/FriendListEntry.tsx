import { Icon, ListItem } from '@rneui/base';
import { Button } from '@rneui/themed';
import React, { useCallback, useMemo, useRef } from 'react';
import { Image, View, StyleSheet, Text } from 'react-native';
import { Avatar } from 'react-native-elements';
import tw from 'tailwind-react-native-classnames';

type Friend = {
  id: string;
  username: string;
  nearby: boolean;
};

export default function FriendListEntry({
  item,
  handlePresentModalPress,
}: {
  item: Friend;
}) {
  return (
    <View style={tw`flex flex-row p-4 border-b border-gray-400 items-center`}>
      <View style={tw`relative mr-4`}>
        <Image
          source={{ uri: item.pictures[0] }}
          style={tw`bg-gray-200 w-16 h-16 rounded-full`}
        />
        {item.firstName === 'l' && (
          <View style={tw`absolute -bottom-2 -right-2`}>
            <Icon name="location-pin" color="red" size={35} />
          </View>
        )}
      </View>
      <View style={tw`flex-1 justify-between flex-row`}>
        <Text style={tw`text-lg mr-4`}>{item.username}</Text>
        <View style={tw`flex flex-row items-center`}>
          <Icon
            name="message"
            size={35}
            onPress={() => handlePresentModalPress(item)}
          />
          <Button
            titleStyle={tw`text-sm`}
            buttonStyle={tw`px-4 py-0 rounded-full ml-5`}
            color="secondary"
          >
            Unfriend
          </Button>
        </View>
      </View>
    </View>
  );
}
