import { View, Text, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { Icon } from "react-native-elements";
import CustomButton from "../../components/CustomButton";
import { useState } from "react";
import CustomInput from "../../components/CustomInput";
import { LinearGradient } from "expo-linear-gradient";
import Toast from "react-native-toast-message";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {
    if (username === "" || password === "") {
      Toast.show({
        type: "error",
        text1: "Missing Information",
        text2: "Please enter both username and password to continue.",
      });
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      router.push("/home");
    }, 1000);
  };

  return (
    <LinearGradient
      colors={["#021526", "#00396B"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={{ flex: 1 }}
    >
      <SafeAreaView className="flex-1">
        <View className="flex-1"></View>
        <View>
          <Text className="text-6xl mb-3 ml-10 text-white font-madimi">
            ENERGYM
          </Text>
          <View className="bg-secondary rounded-tr-[100px] px-8 py-16">
            <Text className="text-5xl font-extrabold px-4">Log in</Text>
            <Text className="text-2xl font-semibold px-4">Welcome back</Text>

            <CustomInput
              placeholder="Username"
              leftIcon={<Icon name="person" size={20} color="gray" />}
              value={username}
              onChangeText={setUsername}
              containerStyle={{
                marginTop: "40",
              }}
            />

            <CustomInput
              placeholder="Password"
              leftIcon={<Icon name="password" size={20} color="gray" />}
              value={password}
              onChangeText={setPassword}
              secureTextEntry={true}
              containerStyle={{
                marginTop: "15",
              }}
            />

            <View className="flex items-end mt-3">
              <Text className="mr-5">Forgot password?</Text>
            </View>

            <CustomButton
              title="LOG IN"
              containerStyles="rounded-3xl mt-8 mx-2"
              textStyles="text-xl"
              handlePress={() => {
                handleLogin();
              }}
              isLoading={isLoading}
            />

            <View className="flex-row items-center justify-center mt-8 mb-24">
              <Text className="mr-2 text-lg">New to EnerGym?</Text>
              <Pressable onPress={() => router.push("/sign-up")}>
                <Text className="font-bold text-blue-800 text-lg">
                  Register here
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default SignIn;
