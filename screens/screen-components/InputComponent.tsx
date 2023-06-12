import * as React from "react";
import { Input } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function InputComponent() {
  return (
    <Input
      containerStyle={{}}
      disabledInputStyle={{ background: "#ddd" }}
      inputContainerStyle={{}}
      errorMessage="Oops! that's not correct."
      errorStyle={{}}
      errorProps={{}}
      inputStyle={{}}
      label="User Form"
      labelStyle={{}}
      labelProps={{}}
      leftIcon={<Icon name="account-outline" size={20} />}
      leftIconContainerStyle={{}}
      rightIcon={<Icon name="close" size={20} />}
      rightIconContainerStyle={{}}
      placeholder="Enter Name"
    />
  );
}