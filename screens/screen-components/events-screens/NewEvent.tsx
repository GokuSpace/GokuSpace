import React, { Text, View, Button, ScrollView, Pressable, TextInput, Image, Platform } from "react-native";
import { useRoute } from "@react-navigation/native";
import { Avatar, ListItem, Tab } from "@rneui/themed";
import { useState } from "react";
import tw from 'tailwind-react-native-classnames';
import DateTimePicker from '@react-native-community/datetimepicker';
import { TouchableOpacity } from "react-native-gesture-handler";

const NewEvent = () => {
  const [eventStart, setEventStart] = useState("");
  const [eventEnd, setEventEnd] = useState("");
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false)
  const [form, setForm] = useState({
    userID: '',
    name: '',
    start: '',
    end: '',
    location: '',
    latitude: '',
    longitude: '',
    description: '',
  });

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

  // const confirmIOSDateEnd = () => {
  //   setEventStart(date.toString().slice(0, 15))
  //   toggleDatePicker();
  // }

  const changeForm = (text: string, field: string) => {
    setForm({
      ...form,
      [field]: text
    })
  }

  return (

    <View style={tw`bg-white h-full`}>

      <View style={tw`flex justify-center items-center mt-4`}>
        <Image style={tw`h-48 w-48`}
          source={require("../../../assets/event.png")}
        />
      </View>

      <View style={tw`flex-row mt-12`}>
        <View style={tw`px-5`}>
          <Text style={tw`mt-1 font-bold`}>Event Name: </Text>
          <Text style={tw`mt-7 font-bold`}>Location:</Text>
          <Text style={tw`mt-7 font-bold`}>Description:</Text>
          <Text style={tw`mt-7 font-bold`}>start date: </Text>
          <Text style={tw`mt-6 font-bold`}>end date:</Text>
        </View>
        <View style={tw`px-2`}>
          <TextInput style={tw`border px-2 py-1  text-gray-400 rounded-lg w-48`} onChangeText={text => changeForm(text, 'name')} value={form.name}></TextInput>
          <TextInput style={tw`mt-4 border px-2 py-1 text-gray-400 rounded-lg`} onChangeText={text => changeForm(text, 'location')} value={form.location}></TextInput>
          <TextInput style={tw`mt-4 border px-2 py-1 text-gray-400 rounded-lg`} onChangeText={text => changeForm(text, 'description')} value={form.description}></TextInput>
          {!showPicker && (
            <Pressable onPress={toggleDatePicker}>
              <TextInput
                style={tw`mt-4  border px-2 py-1  text-gray-400 rounded-lg`}
                placeholder="SELECT START DATE"
                value={eventStart}
                onChangeText={setEventStart}
                editable={false}
                onPressIn={toggleDatePicker}
              ></TextInput>
            </Pressable>
          )}
          {!showPicker && (
            <Pressable onPress={toggleDatePicker}>
              <TextInput
                style={tw`mt-4  border px-2 py-1  text-gray-400 rounded-lg`}
                placeholder="SELECT END DATE"
                value={eventEnd}
                onChangeText={setEventEnd}
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
          <View style={tw` mt-6 border rounded-3xl px-16 py-2 bg-black`}>
            <Button
              color="white"
              title="Save"
              onPress={confirmIOSDateStart}
            />
          </View>
        </View>
      ) : null}

      {!showPicker ? (
        <View style={tw`flex flex-row justify-center mt-14 `}>
          <View style={tw` mt-6 border rounded-3xl px-16 py-2 bg-black`}>
            <Button color="white" title="Post Event" />
          </View>
        </View>
      ) : null}

    </View>

  );
}


export default NewEvent;
