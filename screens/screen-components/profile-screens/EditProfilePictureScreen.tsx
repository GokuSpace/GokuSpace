import React, { Text, View, Image } from "react-native";
import { useState } from "react";
import * as ImagePicker from 'expo-image-picker';
import { TouchableOpacity } from "react-native-gesture-handler";
import tw from 'tailwind-react-native-classnames';

const EditProfilePictureScreen: React.FC = () => {
  const [images, setImages] = useState<string[]>(["", "", "", ""]);

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
      <TouchableOpacity
        key={index}
        style={tw`w-48 h-48 rounded-lg bg-gray-300 mb-4 items-center justify-center`}
        onPress={() => handleImageSelect(index)}
      >
        {uri ? (
          <TouchableOpacity
            key={index}
            onPress={() => handleImageRemove(index)}
          >
            <Image source={{ uri }} style={{ width: 200, height: 200 }} />
          </TouchableOpacity>

        ) : (
          <Text style={tw`text-4xl font-bold`}>+</Text>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <View style={tw`flex-1 items-center justify-center`}>
      <Text style={tw`text-2xl font-bold mb-8`}>THIS IS THE PROFILE PICTURE SCREEN</Text>

      <View style={tw`flex-wrap flex-row justify-between`}>
        {[0, 1, 2, 3].map((index) => renderBox(index))}
      </View>
    </View>
  );
}

export default EditProfilePictureScreen;
