import React, { Text, View, Button, ScrollView, Pressable, TextInput, Image, Platform, } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { Avatar, ListItem, Tab } from "@rneui/themed";
import { useState } from "react";
import tw from 'tailwind-react-native-classnames';
import DateTimePicker from '@react-native-community/datetimepicker';
import { TouchableOpacity } from "react-native-gesture-handler";
import * as ImagePicker from 'expo-image-picker';
import KeyboardAvoidingWrapper from "./KeyboardAvoidingWrapper";

const NewEvent = () => {

  const navigation = useNavigation();
  const route = useRoute();
  const { handleCreateEvent } = route.params;

  const [image, setImage] = useState<string>("");
  const [eventStart, setEventStart] = useState("");
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false)
  const [form, setForm] = useState({
    name: '',
    startDate: '',
    address: '',
    city: '',
    description: '',
    picture: ''
  });

  const changeForm = (text: string, field: string) => {
    setForm({
      ...form,
      [field]: text
    })
  }


  const handleNewEventPress = () => {
    console.log('hello')
  }

  const handleImageSelect = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const toggleDatePicker = () => {
    setShowPicker(!showPicker);
  }

  const onChange = ({ type }, selectedDate) => {
    if (type == "set") {
      const currentDate = selectedDate;
      setDate(currentDate);
      if (Platform.OS === "android") {
        toggleDatePicker();
        setEventStart(currentDate.toDateString().slice(0, 14));
      }
    } else {
      toggleDatePicker();
    }
  }

  const confirmIOSDateStart = () => {
    setEventStart(date.toString().slice(0, 15))

    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}T00:00:00.000Z`;

    setForm({
      ...form,
      startDate: formattedDate,
      picture: image
    });

    toggleDatePicker();
  }

  const handleSubmit = () => {
    if (form.name && form.startDate && form.address && form.city && form.description) {
      handleCreateEvent(form);
    } else {
      // Create an object with hardcoded values
      const defaultForm = {
        name: 'Pop up shop!',
        startDate: '2024-11-18T00:00:00.000Z',
        address: '52 Takeshita Street',
        city: 'Tokyo, Japan',
        description: 'Merchandise for cheap!',
        picture: 'https://static.vecteezy.com/system/resources/previews/004/141/669/non_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg'
      };
      handleCreateEvent(defaultForm);
    }
    setImage("");
    setEventStart("");
    setDate(new Date())
    setShowPicker(false)
    setForm({
      name: '',
      startDate: '',
      address: '',
      city: '',
      description: '',
      picture: ''
    })
    navigation.goBack();
  }

  return (
    <View style={tw`bg-white h-full`}>
      <View style={tw`mt-6 items-center justify-center `}>
        {image ? (
          <View style={tw`w-48 h-48 rounded-full bg-gray-300 mt-1 mb-4 items-center justify-center overflow-hidden`}>
            <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
          </View>
        ) : (
          <TouchableOpacity onPress={handleImageSelect}>
            <View style={tw`w-48 h-48 rounded-full bg-gray-300 mb-4 items-center justify-center overflow-hidden`}>
              <Text style={tw`text-4xl font-bold`}>+</Text>
            </View>
          </TouchableOpacity>


        )}

        {/* <View style={tw`flex justify-center items-center mt-6`}>
        {profile.pictures && <Image style={[tw`h-52 w-52 rounded-full`]} source={{ uri: profile.pictures[0] }} />}

        <Text style={tw`mt-6 font-bold text-base text-lg`}>@{profile.username}</Text>

        <View style={[tw`mt-6 rounded-2xl px-2 py-1`, { backgroundColor: '#EB5E28' }]} >
          <Button color="white" title="Update Profile" onPress={handleUpdatePress} />
        </View>
      </View> */}
      </View>

      <View style={tw`flex-row mt-2 items-start items-center justify-center`}>
        <View style={tw`px-2`}>
          <Text style={tw`mt-1 font-bold`}>Name: </Text>
          <Text style={tw`mt-7 font-bold`}>Address: </Text>
          <Text style={tw`mt-7 font-bold`}>City:</Text>
          <Text style={tw`mt-7 font-bold`}>Description:</Text>
        </View>
        <View style={tw`px-2`}>
          <TextInput
            style={[tw` mt-4 border-2 justify-center pl-2 py-2 text-gray-400`, { borderColor: '#EB5E28', textAlign: "center", width: 230, borderRadius: 8, }]}
            placeholder="Pop up shop!"
            onChangeText={text => changeForm(text, 'name')}
            value={form.name}>
          </TextInput>
          <TextInput
            style={[tw`mt-2  border-2 px-2 py-2 text-gray-400`, { borderColor: '#EB5E28', textAlign: "center", borderRadius: 8, }]}
            placeholder="52 Takeshita Street"
            onChangeText={text => changeForm(text, 'address')}
            value={form.address}>
          </TextInput>
          <TextInput
            style={[tw`mt-2  border-2 px-2 py-2  text-gray-400`, { borderColor: '#EB5E28', textAlign: "center", borderRadius: 8, }]}
            placeholder="Tokyo, Japan"
            onChangeText={text => changeForm(text, 'city')}
            value={form.city}>
          </TextInput>
          <TextInput
            style={[tw`mt-2  border-2 px-2 py-2  text-gray-400`, { borderColor: '#EB5E28', textAlign: "center", borderRadius: 8 }]}
            multiline
            placeholder="Merchandise for cheap!"
            onChangeText={text => changeForm(text, 'description')}
            value={form.description}>
          </TextInput>
        </View>
      </View>

      <View style={tw`items-center justify-center mt-6`}>

        {!showPicker && (
          <Pressable onPress={toggleDatePicker}>
            <TextInput
              style={[tw`mt-2 border-2 px-2 py-2 text-gray-400 `, { borderColor: '#EB5E28', textAlign: "center", width: 330, borderRadius: 8, }]}
              placeholder="Select start date"
              value={eventStart}
              onChangeText={setEventStart}
              editable={false}
              onPressIn={toggleDatePicker}
            ></TextInput>
          </Pressable>
        )}

        {showPicker && (
          <>
            <DateTimePicker
              style={tw`h-28`}
              mode="date"
              display="spinner"
              value={date}
              onChange={onChange}

            />
          </>
        )}
        {showPicker ? (
          <View style={tw`flex flex-row justify-center`}>
            <View style={[tw` mt-2 rounded-3xl px-16 py-2`, { backgroundColor: '#EB5E28' }]}>
              <Button
                color="white"
                title="Save"
                onPress={confirmIOSDateStart}
              />
            </View>
          </View>
        ) : null}

        {!showPicker ? (
          <View style={tw`flex flex-row justify-center mt-6 `}>
            <View style={[tw`mt-8 rounded-3xl px-16 py-2`, { backgroundColor: '#EB5E28' }]}>
              <Button color="white" title="Post Event" onPress={handleSubmit} />
            </View>
          </View>
        ) : null}
      </View>

    </View>

  );
}

export default NewEvent;
