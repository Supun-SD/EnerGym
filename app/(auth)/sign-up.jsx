import { View, Text, ScrollView, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import CustomButton from "../../components/CustomButton";
import { useState } from "react";
import CustomInput from "../../components/CustomInput";
import { LinearGradient } from "expo-linear-gradient";
import Toast from "react-native-toast-message";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const [errors, setErrors] = useState({});

  const handleRegister = () => {
    let formErrors = {};

    if (!firstName) formErrors.firstName = "First Name is required";
    if (!lastName) formErrors.lastName = "Last Name is required";
    if (!username) formErrors.username = "Username is required";
    if (!email) formErrors.email = "Email is required";
    if (!dob) formErrors.dob = "Date of Birth is required";
    if (!password) formErrors.password = "Password is required";
    if (!confirmPassword)
      formErrors.confirmPassword = "Confirm Password is required";

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (email && !emailRegex.test(email))
      formErrors.email = "Please enter a valid email";

    if (password && confirmPassword && password !== confirmPassword)
      formErrors.confirmPassword = "Passwords do not match";

    if (password && password.length < 6)
      formErrors.password = "Password must be at least 6 characters long";

    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        router.back();
        Toast.show({
          type: "success",
          text1: "Registration Successful!",
          text2: "You have successfully registered. Welcome aboard!",
        });
      }, 1000);
    }
  };

  return (
    <LinearGradient
      colors={["#021526", "#00396B"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={{ flex: 1 }}
    >
      <SafeAreaView className="flex-1">
        <ScrollView>
          <View className="flex-1"></View>

          <View>
            <Text className="text-6xl mb-3 ml-10 text-white font-madimi mt-24">
              ENERGYM
            </Text>
            <View className="bg-secondary rounded-tl-[100px] px-8 py-16">
              <View className="flex items-end">
                <Text className="mr-5 text-5xl font-extrabold px-4">
                  Register
                </Text>
              </View>
              <View className="flex items-end">
                <Text className="mr-5 text-2xl font-semibold px-4">
                  Welcome to EnerGym
                </Text>
              </View>

              <CustomInput
                placeholder="First Name"
                value={firstName}
                onChangeText={setFirstName}
                containerStyle={{ marginTop: "40" }}
                errorMessage={errors.firstName}
              />
              <CustomInput
                placeholder="Last Name"
                value={lastName}
                onChangeText={setLastName}
                containerStyle={{ marginTop: "15" }}
                errorMessage={errors.lastName}
              />
              <CustomInput
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
                containerStyle={{ marginTop: "15" }}
                errorMessage={errors.username}
              />
              <CustomInput
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                containerStyle={{ marginTop: "15" }}
                errorMessage={errors.email}
              />
              <CustomInput
                placeholder="Date of Birth"
                value={dob}
                onChangeText={setDob}
                containerStyle={{ marginTop: "15" }}
                errorMessage={errors.dob}
              />
              <CustomInput
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                containerStyle={{ marginTop: "15" }}
                secureTextEntry={true}
                errorMessage={errors.password}
              />
              <CustomInput
                placeholder="Confirm Password"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                containerStyle={{ marginTop: "15" }}
                secureTextEntry={true}
                errorMessage={errors.confirmPassword}
              />

              <CustomButton
                title="REGISTER"
                containerStyles="rounded-3xl mt-8 mx-2"
                textStyles="text-xl"
                handlePress={handleRegister}
                isLoading={isLoading}
              />

              <View className="flex-row items-center justify-center mt-8 mb-5">
                <Text className="mr-2 text-lg">Already have an account?</Text>
                <Pressable onPress={() => router.back()}>
                  <Text className="font-bold text-blue-800 text-lg">
                    Log in
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default SignUp;
