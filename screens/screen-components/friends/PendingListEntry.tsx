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

export default function PendingListEntry({ item }: { item: Friend }) {
  return (
    <View style={tw`flex flex-row p-4 border-b border-gray-400`}>
      <View style={tw`relative mr-4`}>
        <View style={tw`bg-gray-200 w-16 h-16 rounded-full`}>
          {false && (
            <View style={tw`absolute bottom-1 right-1`}>
              <Icon name="location-pin" color="red" size={35} />
            </View>
          )}
        </View>
      </View>
      <View style={tw`flex justify-around`}>
        <Text style={tw`text-lg`}>{item.username}</Text>
        <View style={tw`flex flex-row`}>
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
    </View>
  );
}
