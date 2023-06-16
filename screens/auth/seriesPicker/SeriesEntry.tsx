import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SeriesEntry = ({ serie, setNext }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('charPicker')}
      style={styles.listItem}
    >
      <View style={styles.listItemContent}>
        <Image
          style={styles.avatar}
          source={{
            uri: serie.url,
          }}
        />
        <Text style={styles.listItemTitle}>
          {serie.title.length > 15
            ? serie.title.slice(0, 12) + '...'
            : serie.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    width: '33.3%', // Adjust this as necessary
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  listItemContent: {
    // flexDirection: 'column',
    alignItems: 'center',
  },
  listItemTitle: {
    flexWrap: 'wrap',
    textAlign: 'center',
  },
  avatar: {
    width: 75,
    height: 75,
    borderRadius: 50,
  },
});

export default SeriesEntry;
