import React, { FlatList, View } from 'react-native';
import FriendListEntry from './screen-components/friends/FriendListEntry';
import { Tab, Text } from '@rneui/themed';
import { useState } from 'react';
import tw from 'tailwind-react-native-classnames';
import PendingListEntry from './screen-components/friends/PendingListEntry';
import {
  QueryClient,
  QueryClientProvider,
  useInfiniteQuery,
  useQuery,
} from '@tanstack/react-query';
import { Button } from '@rneui/base';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

type Friend = {
  id: string;
  username: string;
  nearby: boolean;
};

function useFetchDogs() {
  const getDogs = async ({ pageParam = 0 }) => {
    const res = await (
      await fetch(
        `https://api.thedogapi.com/v1/breeds?limit=2&page=${pageParam}`,
      )
    ).json();
    return {
      data: res,
      nextPage: pageParam + 1,
    };
  };
  return useInfiniteQuery(['dogs'], getDogs, {
    getNextPageParam: (lastPage) =>
      lastPage.data.length < 2 ? undefined : lastPage.nextPage,
  });
}

const pending: Friend[] = [
  { id: '1', username: 'Tammam', nearby: true },
  { id: '2', username: 'Uncle J', nearby: false },
  { id: '3', username: 'Milad', nearby: false },
  // Add more friends here
];

const friends: Friend[] = [
  { id: '1', username: 'Jerry', nearby: true },
  { id: '2', username: 'Dillon', nearby: false },
  { id: '3', username: 'Aliya', nearby: false },
  { id: '4', username: 'Thomas', nearby: true },
  { id: '5', username: 'Kodi', nearby: false },
  { id: '6', username: 'Gauri', nearby: true },
  { id: '7', username: 'Kevin', nearby: false },
  { id: '8', username: 'T-ball', nearby: false },
  { id: '10', username: 'Jerry', nearby: true },
  { id: '21', username: 'Dillon', nearby: false },
  { id: '31', username: 'Aliya', nearby: false },
  { id: '41', username: 'Thomas', nearby: true },
  { id: '51', username: 'Kodi', nearby: false },
  { id: '61', username: 'Gauri', nearby: true },
  { id: '71', username: 'Kevin', nearby: false },
  { id: '81', username: 'T-ball', nearby: false },
  { id: '110', username: 'Jerry', nearby: true },
  { id: '200', username: 'Dillon', nearby: false },
  { id: '300', username: 'Aliya', nearby: false },
  { id: '400', username: 'Thomas', nearby: true },
  { id: '500', username: 'Kodi', nearby: false },
  { id: '600', username: 'Gauri', nearby: true },
  { id: '700', username: 'Kevin', nearby: false },
  { id: '800', username: 'T-ball', nearby: false },
  // Add more friends here
];

const MOCK_USER_ID = 0;

function useFetchFriends() {
  const getDogs = async ({ pageParam = 0 }) => {
    const res = await (
      await fetch(`/users/${MOCK_USER_ID}/friends?limit=2&page=${pageParam}`)
    ).json();
    return {
      data: res,
      nextPage: pageParam + 1,
    };
  };
  return useInfiniteQuery(['dogs'], getDogs, {
    getNextPageParam: (lastPage) =>
      lastPage.data.length < 2 ? undefined : lastPage.nextPage,
  });
}

export default function FriendScreen() {
  const [index, setIndex] = useState<number>(0);
  const { data, isLoading, error, hasNextPage, fetchNextPage } =
    useFetchFriends();

  // const [index, setIndex] = useState<number>(0);
  // const {
  //   data,
  //   error,
  //   fetchNextPage,
  //   hasNextPage,
  //   isFetching,
  //   isFetchingNextPage,
  //   status,
  // } = useInfiniteQuery({
  //   queryKey: ['projects'],
  //   queryFn: fetchFriends,
  //   getNextPageParam: (lastPage, pages) => lastPage.nextCursor,
  // });

  // console.log('data', data);

  if (isLoading) return <Text>loading...</Text>;

  if (error) return <Text>{error.message}</Text>;

  const flattenData = data.pages.flatMap((page) => page.data);

  const loadNext = () => {
    if (hasNextPage) {
      fetchNextPage();
    }
  };

  return (
    <View>
      <Tab value={index} onChange={setIndex}>
        <Tab.Item>
          <Text style={tw`text-lg`}>Friends</Text>
        </Tab.Item>
        <Tab.Item>
          <Text style={tw`text-lg`}>Pending</Text>
        </Tab.Item>
      </Tab>
      {!index ? (
        <FlatList
          data={flattenData}
          renderItem={({ item }) => <Text>{item.name}</Text>}
          onEndReached={loadNext}
          keyExtractor={(item) => item.id}
        />
      ) : (
        // <>
        //   <View>
        //     <FlatList
        //       data={data.pages}
        //       keyExtractor={(group, index) => index.toString()}
        //       renderItem={({ item: group }) => (
        //         <View>
        //           {group.data.map((friend, j) => (
        //             <FriendListEntry key={j} item={friend} />
        //           ))}
        //         </View>
        //       )}
        //     />
        //   </View>
        //   <Button
        //     onPress={() => fetchNextPage()}
        //     disabled={!hasNextPage || isFetchingNextPage}
        //   >
        //     {isFetchingNextPage
        //       ? 'Loading more...'
        //       : hasNextPage
        //       ? 'Load More'
        //       : 'Nothing more to load'}
        //   </Button>
        // </>
        <FlatList
          data={pending}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <PendingListEntry item={item} />}
        />
      )}
    </View>
  );
}
