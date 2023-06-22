import { FontAwesome } from '@expo/vector-icons';
import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  FlatList,
  StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'tailwind-react-native-classnames';
import MessagesChatItem from './ChatItem';
import { TextInput } from 'react-native-gesture-handler';

const ChatScreen = ({ navigation }) => {
  const handleBack = () => {
    navigation.goBack();
  };

  const [i, setI] = useState(0);

  const [isBottom, setBottom] = useState(true);
  const [bodyText, setBodyText] = useState('');
  const [data, setData] = useState([]);

  const scrollViewRef = useRef();

  const mockMessages = [
    { id: 1, sender: 'John', message: 'Hello' },
    { id: 2, sender: 'Alice', message: 'Hi there!' },
    { id: 3, sender: 'John', message: 'How are you?' },
    { id: 4, sender: 'Alice', message: "I'm good, thanks!" },
    { id: 5, sender: 'John', message: 'That sounds great!' },
    { id: 6, sender: 'Alice', message: 'Yeah, it is!' },
  ];

  const handleSendChat = () => {
    const userMessage = { body: bodyText.trim(), isSenderUser: true };
    const mockMessages = ['Is it working?', 'Thanks!', 'Bye'];
    const mockMessage = { body: mockMessages[i], isSenderUser: false };
    setI(i + 1);

    setData((prevData) => [userMessage, ...prevData]);

    setTimeout(() => {
      setData((prevData) => [mockMessage, ...prevData]);
    }, 2000);

    setBodyText('');
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#ff9369' }}>
      <KeyboardAvoidingView style={styles.container}>
        <FlatList
          ref={scrollViewRef}
          data={data}
          inverted={true}
          removeClippedSubviews={true}
          viewabilityConfig={{ viewAreaCoveragePercentThreshold: 90 }}
          renderItem={({ item }) => {
            return (
              <MessagesChatItem
                isSenderUser={item.isSenderUser}
                body={item.body}
              />
            );
          }}
        />

        <View style={styles.chatInputBar}>
          <TextInput
            style={{
              padding: 5,
              marginHorizontal: 20,
              marginVertical: 12,
              height: 50,
              backgroundColor: 'white',
              paddingVertical: 10,
              paddingHorizontal: 100,
              borderRadius: 10,
            }}
            placeholder="write your message..."
            onChangeText={(text) => {
              setBodyText(text);
            }}
            value={bodyText}
            multiline
          ></TextInput>
          <TouchableOpacity title="New Chat" onPress={handleSendChat}>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                padding: 2,
              }}
            >
              <FontAwesome
                name={'paper-plane'}
                size={25}
                color={'#EB5E28'}
                solid={true}
              />
            </View>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
  },
  chatStore: {
    height: 80,
    paddingHorizontal: 10,
    borderWidth: 1,
  },
  chatScroll: {
    flexGrow: 1,
    flexDirection: 'column-reverse',
  },
  chatIcon: {
    height: 65,
    width: 65,
    backgroundColor: '#EB5E28',
    borderRadius: 33,
    overflow: 'hidden',
  },
  chatInputBar: {
    minHeight: 80,
    maxHeight: 90,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
});
