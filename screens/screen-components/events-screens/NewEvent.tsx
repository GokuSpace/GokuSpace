import React, { Text, View, Button, ScrollView, Pressable, TextInput, Image, Platform } from "react-native";
import { useRoute } from "@react-navigation/native";
import { Avatar, ListItem, Tab } from "@rneui/themed";
import { useState } from "react";
import tw from 'tailwind-react-native-classnames';
import DateTimePicker from '@react-native-community/datetimepicker';
import { TouchableOpacity } from "react-native-gesture-handler";
import * as ImagePicker from 'expo-image-picker';

const NewEvent = () => {

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
    toggleDatePicker();
  }

  const handleSubmit = () => {
    setConfirm(true)
  }

  return (


    <View style={tw`bg-white h-full flex-1 items-center justify-center `}>
      {image ? (
        <View style={tw`h-52 w-52 rounded-full bg-gray-300 mb-4 items-center justify-center overflow-hidden`}>
          <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
        </View>
      ) : (
        <TouchableOpacity onPress={handleImageSelect}>
          <View style={tw`h-52 w-52 rounded-full bg-gray-300 mb-4 items-center justify-center overflow-hidden`}>
            <Text style={tw`text-4xl font-bold`}>+</Text>
          </View>
        </TouchableOpacity>
      )}

      <View style={tw`flex-row mt-8`}>
        <View style={tw`w-72`}>
          <TextInput
            style={[tw`border-2 justify-center pl-2 py-2  text-gray-400 rounded-full`, { borderColor: '#EB5E28', textAlign: "center" }]}
            placeholder="Event Name"
            onChangeText={text => changeForm(text, 'name')}
            value={form.name}>
          </TextInput>
          <TextInput
            style={[tw`mt-6  border-2 px-2 py-2  text-gray-400 rounded-full`, { borderColor: '#EB5E28', textAlign: "center" }]}
            placeholder="Address"
            onChangeText={text => changeForm(text, 'address')}
            value={form.address}>
          </TextInput>
          <TextInput
            style={[tw`mt-6  border-2 px-2 py-2  text-gray-400 rounded-full`, { borderColor: '#EB5E28', textAlign: "center" }]}
            placeholder="City"
            onChangeText={text => changeForm(text, 'city')}
            value={form.city}>
          </TextInput>
          <TextInput
            style={[tw`mt-6  border-2 px-2 py-2  text-gray-400 rounded-full`, { borderColor: '#EB5E28', textAlign: "center" }]}
            placeholder="Description"
            onChangeText={text => changeForm(text, 'description')}
            value={form.description}>
          </TextInput>

          {!showPicker && (
            <Pressable onPress={toggleDatePicker}>
              <TextInput
                style={[tw`mt-6  border-2 px-2 py-2  text-gray-400 rounded-full`, { borderColor: '#EB5E28', textAlign: "center" }]}
                placeholder="SELECT START DATE"
                value={eventStart}
                onChangeText={setEventStart}
                editable={false}
                onPressIn={toggleDatePicker}
              ></TextInput>
            </Pressable>
          )}


        </View>
      </View>
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
          <View style={[tw` mt-6 rounded-3xl px-16 py-2`, { backgroundColor: '#EB5E28' }]}>
            <Button
              color="white"
              title="Save"
              onPress={confirmIOSDateStart}
            />
          </View>
        </View>
      ) : null}

      {!showPicker ? (
        <View style={tw`flex flex-row justify-center mt-12 `}>
          <View style={[tw`mt-6 rounded-3xl px-16 py-2`, { backgroundColor: '#EB5E28' }]}>
            <Button color="white" title="Post Event" onPress={handleSubmit} />
          </View>
        </View>
      ) : null}

    </View>

  );
}

export default NewEvent;
