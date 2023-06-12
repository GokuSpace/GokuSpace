import React, { Text, View, Image } from "react-native";
import { useState } from "react";
import * as ImagePicker from 'expo-image-picker';
import { TouchableOpacity } from "react-native-gesture-handler";
import tw from 'tailwind-react-native-classnames';
import { MaterialIcons } from "@expo/vector-icons";

const EditProfilePictureScreen: React.FC = () => {
  const [images, setImages] = useState<string[]>(["", "", "", "", ""]);

  const handleImageSelect = async (index: number) => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    })

    if (!result.canceled) {
      const newImages = [...images];
      newImages[index] = result.assets[0].uri
      setImages(newImages);
    }
  };

  const handleImageRemove = (index: number) => {
    const newImages = [...images];
    newImages[index] = "";
    setImages(newImages);
  };

  const renderBox = (index: number) => {
    const uri = images[index];

    return (
      <>
        {uri ? (
          <View style={tw`w-40 h-40 rounded-lg bg-gray-300 mb-4 items-center justify-center overflow-hidden`} key={index}>
            <Image source={{ uri }} style={{ width: 200, height: 200 }} />
            <MaterialIcons name="close" size={36} color="red" style={tw`absolute top-1 right-1`} onPress={() => handleImageRemove(index)} />
          </View>
        ) : (
          <TouchableOpacity onPress={() => handleImageSelect(index)}>
            <View style={tw`w-40 h-40 rounded-lg bg-gray-300 mb-4 items-center justify-center overflow-hidden`}>
              <Text style={tw`text-4xl font-bold`}>+</Text>
            </View>
          </TouchableOpacity>
        )}
      </>
    );
  };

  return (
    <View style={tw`flex-1 items-center justify-center`}>

      <Text style={tw`text-2xl font-bold mb-8`}>THIS IS THE PROFILE PICTURE SCREEN</Text>
      {renderBox(0)}
      <View style={tw`flex-row flex-wrap justify-between px-6`}>
        {[1, 2, 3, 4].map((index) => renderBox(index))}
      </View>
    </View>
  );
}

export default EditProfilePictureScreen;
