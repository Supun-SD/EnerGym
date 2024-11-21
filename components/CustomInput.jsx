import React from "react";
import { Input } from "react-native-elements";
import { Text } from "react-native"; // Import Text component

const CustomInput = ({
  placeholder,
  leftIcon,
  value,
  onChangeText,
  secureTextEntry = false,
  inputContainerStyle = {},
  containerStyle = {},
  errorMessage = "",
}) => {
  return (
    <>
      <Input
        placeholder={placeholder}
        leftIcon={leftIcon}
        inputContainerStyle={{
          backgroundColor: "white",
          borderWidth: 1,
          borderColor: errorMessage ? "red" : "white",
          borderRadius: 15,
          paddingHorizontal: 15,
          paddingVertical: 5,
          ...inputContainerStyle,
        }}
        containerStyle={{
          borderRadius: 5,
          height: 60,
          ...containerStyle,
        }}
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={onChangeText}
      />
      {errorMessage && (
        <Text style={{ color: "red", marginLeft: 15 }}>{errorMessage}</Text>
      )}
    </>
  );
};

export default CustomInput;
