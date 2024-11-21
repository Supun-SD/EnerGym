import React from "react";
import { View, Text, ImageBackground } from "react-native";
import CustomButton from "../components/CustomButton";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const Index = () => {
  return (
    <View className="flex-1 bg-black">
      <ImageBackground
        source={require("../assets/images/landing.jpg")}
        className="flex-1 justify-end"
        resizeMode="cover"
      >
        <View className="flex-1 bg-black/20 justify-end">
          <View className="bg-white rounded-t-[50px] px-10 pt-14 pb-24">
            <Text className="text-3xl font-bold text-gray-800 mb-1">
              Welcome to
            </Text>
            <Text className="text-6xl text-[#03346E] mt-1 font-madimi">
              ENERGYM
            </Text>
            <Text className="text-xl mb-10 text-gray-700">
              Your Personal Fitness Companion!
            </Text>
            <CustomButton
              title="Get started"
              containerStyles="rounded-full"
              textStyles="text-xl"
              handlePress={() => {
                router.push("/sign-in");
              }}
              isLoading={false}
              iconComponent={
                <Ionicons name="arrow-forward" size={20} color="white" />
              }
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Index;
