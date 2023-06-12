import React, { ActivityIndicator, FlatList, View } from 'react-native';
import { Tab, Text } from '@rneui/themed';
import { useState } from 'react';
import tw from 'tailwind-react-native-classnames';
import PendingListEntry from './screen-components/friends/PendingListEntry';
import FriendListEntry from './screen-components/friends/FriendListEntry';
import { SafeAreaView } from 'react-native-safe-area-context';
import useInfiniteFetch from '../hooks/useInfiniteFetch';

const MOCK_USER_ID = 'clis7g6br001mjaq27z2zmzgr';

type Friend = {
  id: string;
  username: string;
  nearby: boolean;
};

export default function FriendScreen() {
  const [index, setIndex] = useState(0);

  const {
    data: friends,
    isLoading: isLoadingFriends,
    loadMoreData: loadMoreFriends,
  } = useInfiniteFetch<Friend>(
    `http://localhost:3000/users/${MOCK_USER_ID}/friends`,
    { status: 'ACCEPTED' },
    2,
  );

  const {
    data: pending,
    isLoading: isLoadingPending,
    loadMoreData: loadMorePending,
  } = useInfiniteFetch<Friend>(
    `http://localhost:3000/users/${MOCK_USER_ID}/friends`,
    { status: 'PENDING' },
    2,
  );

  const renderLoader = (condition) => {
    return (
      condition && (
        <View>
          <ActivityIndicator size="large" color="#aaa" />
        </View>
      )
    );
  };

  return (
    <>
      <Tab value={index} onChange={setIndex}>
        <Tab.Item>
          <Text style={tw`text-lg`}>Friends</Text>
        </Tab.Item>
        <Tab.Item>
          <Text style={tw`text-lg`}>Pending</Text>
        </Tab.Item>
      </Tab>
      <SafeAreaView style={tw`flex-1 bg-red-200`}>
        {index === 0 ? (
          <>
            <FlatList
              data={friends}
              renderItem={FriendListEntry}
              keyExtractor={(item) => item.id}
              ListFooterComponent={() => renderLoader(isLoadingFriends)}
              onEndReached={loadMoreFriends}
              onEndReachedThreshold={0.2}
            />
          </>
        ) : (
          <>
            <FlatList
              data={pending}
              renderItem={PendingListEntry}
              keyExtractor={(item) => 'pending-' + item.id}
              ListFooterComponent={() => renderLoader(isLoadingPending)}
              onEndReached={loadMorePending}
              onEndReachedThreshold={0.2}
            />
          </>
        )}
      </SafeAreaView>
    </>
  );
}
