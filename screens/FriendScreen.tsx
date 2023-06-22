import React, {
  ActivityIndicator,
  FlatList,
  View,
  StyleSheet,
  Image,
} from 'react-native';
import { Tab, Text, Button } from '@rneui/themed';
import { useCallback, useMemo, useRef, useState } from 'react';
import tw from 'tailwind-react-native-classnames';
import PendingListEntry from './screen-components/friends/PendingListEntry';
import FriendListEntry from './screen-components/friends/FriendListEntry';
import { SafeAreaView } from 'react-native-safe-area-context';
import useInfiniteFetch from '../hooks/useInfiniteFetch';
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';

import { useNavigation } from '@react-navigation/native';

const MOCK_USER_ID = '106';

type Friend = {
  id: string;
  username: string;
  nearby: boolean;
};

export default function FriendScreen() {
  const [currentChat, setCurrentChat] = useState({ username: '' });

  const navigation = useNavigation();

  const [index, setIndex] = useState(0);

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const snapPoints = useMemo(() => ['25%', '50%'], []);

  const handlePresentModalPress = useCallback((item) => {
    if (item) {
      setCurrentChat(item);
    }
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

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
    <BottomSheetModalProvider>
      <Tab value={index} onChange={setIndex}>
        <Tab.Item>
          <Text style={tw`text-lg`}>Friends</Text>
        </Tab.Item>
        <Tab.Item>
          <Text style={tw`text-lg`}>Pending</Text>
        </Tab.Item>
      </Tab>
      <SafeAreaView style={tw`flex-1`}>
        {index === 0 ? (
          <>
            <FlatList
              data={friends}
              renderItem={({ item }) => (
                <FriendListEntry
                  item={item}
                  handlePresentModalPress={handlePresentModalPress}
                />
              )}
              keyExtractor={(item) => item.id}
              ListFooterComponent={() => renderLoader(isLoadingFriends)}
              onEndReached={loadMoreFriends}
              onEndReachedThreshold={0.2}
            />
          </>
        ) : (
          <>
            <FlatList
              data={friends}
              renderItem={PendingListEntry}
              keyExtractor={(item) => 'pending-' + item.id}
              ListFooterComponent={() => renderLoader(isLoadingPending)}
              onEndReached={loadMorePending}
              onEndReachedThreshold={0.2}
            />
          </>
        )}

        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={1}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
          style={tw`flex items-center`}
        >
          <Text style={tw`text-2xl mb-20 mt-10`}>
            Chat With{' '}
            <Text style={{ color: '#EB5E28', fontWeight: 'bold' }}>
              @{currentChat.username}
            </Text>
          </Text>
          {/* {currentChat.pictures && (
            <Image
              source={{ uri: currentChat.pictures[0] }}
              style={tw`bg-gray-200 w-16 h-16 rounded-full`}
            />
          )} */}
          <Button
            title="Open Chat"
            onPress={() => {
              navigation.navigate('ChatScreen'); // Navigate to the ChatRoom screen
            }}
            buttonStyle={{ backgroundColor: '#EB5E28', marginTop: 30 }}
            // style={tw`bg-primary`}
          />
        </BottomSheetModal>
      </SafeAreaView>
    </BottomSheetModalProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});
