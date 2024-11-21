import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../../components/CustomButton";
import { router } from "expo-router";

const SignIn = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center min-h-[85vh] px-10 my-6">
          <Text>Sign in</Text>
          <CustomButton
            title="Register"
            handlePress={() => router.push("/sign-up")}
            containerStyles="w-full mt-7"
            isLoading={false}
            textStyles=""
          />
          <CustomButton
            title="Log in"
            handlePress={() => router.push("/home")}
            containerStyles="w-full mt-7"
            isLoading={false}
            textStyles=""
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
