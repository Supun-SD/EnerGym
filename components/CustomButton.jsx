import { Text, TouchableOpacity, ActivityIndicator, View } from "react-native";
import React from "react";

const CustomButton = ({
  title,
  handlePress,
  containerStyles = "",
  textStyles = "",
  isLoading = false,
  iconComponent,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={handlePress}
      className={`bg-primary rounded-3xl min-h-[62px] flex-row justify-center 
        items-center ${containerStyles} ${isLoading ? "opacity-50" : ""}`}
      disabled={isLoading}
    >
      {isLoading ? (
        <ActivityIndicator size="small" color="#FFFFFF" />
      ) : (
        <View className="flex-row items-center">
          <Text className={`font-semibold text-white font-lato ${textStyles}`}>
            {title}
          </Text>
          {iconComponent && <View className="ml-6">{iconComponent}</View>}
        </View>
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;
