import React, { Text, View, Image} from "react-native";
import { useState } from "react";
import * as ImagePicker from 'expo-image-picker';
import { TouchableOpacity } from "react-native-gesture-handler";
import tw from 'tailwind-react-native-classnames';

const EditProfilePictureScreen: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);

  const handleImageSelect = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    })

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };


  return (
    <View style={tw`flex-1 items-center justify-center`}>
      <Text style={tw`text-2xl font-bold mb-8`}>THIS IS THE PROFILE PICTURE SCREEN</Text>
      <View style={tw`items-center`}>
        <TouchableOpacity
          style={tw`w-48 h-48 rounded-lg bg-gray-300 mb-4 items-center justify-center`}
          onPress={handleImageSelect}
        >
          {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
        </TouchableOpacity>
      </View>

      <View style={tw`flex-row`}>
        <View style={tw`items-center`}>
          <TouchableOpacity
            style={tw`w-48 h-48 rounded-lg bg-gray-300 mb-4 items-center justify-center`}
            onPress={handleImageSelect}
          >
            {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
          </TouchableOpacity>
        </View>

        <View style={tw`items-center`}>
          <TouchableOpacity
            style={tw`w-48 h-48 rounded-lg bg-gray-300 mb-4 items-center justify-center`}
            onPress={handleImageSelect}
          >
            {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
          </TouchableOpacity>
        </View>

      </View>

    </View>
  );
}

export default EditProfilePictureScreen;
