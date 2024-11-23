import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  View,
  Text,
  Image,
  ActivityIndicator,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ItemCard from "../components/ItemCard";
import axios from "axios";
import Toast from "react-native-toast-message";
import { useLocalSearchParams } from "expo-router";

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [exercises, setExercises] = useState([]);
  const params = useLocalSearchParams();

  const clickCount = useSelector((state) => state.counter.value);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const { data } = await axios.get(
          "https://6740d6cfd0b59228b7f186ee.mockapi.io/api/v1/exercises/exercises"
        );
        if (data && Array.isArray(data)) {
          setExercises(data);
        } else {
          throw new Error("Invalid data format received");
        }
      } catch (err) {
        Toast.show({
          type: "error",
          text1: "Error",
          text2: "Unable to fetch data",
        });
        console.log("Error fetching data:", err.message || err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  function getGreetingMessage() {
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
      return "Good morning!";
    } else if (currentHour < 18) {
      return "Good afternoon!";
    } else {
      return "Good evening!";
    }
  }

  return (
    <SafeAreaView className="flex-1 bg-secondary">
      <ScrollView>
        <View className="flex-row items-center justify-between bg-primary px-6 py-8 rounded-[30px] mt-16 mx-8">
          <View>
            <Text className="text-white text-xl">{getGreetingMessage()}</Text>
            <Text className="text-white text-4xl font-bold mt-1">
              {params.username}
            </Text>
          </View>
          <View className="bg-gray-400 rounded-full w-16 h-16 flex items-center justify-center">
            <Image
              source={{
                uri: "https://res.cloudinary.com/dw6wtjqgd/image/upload/v1732298551/user_oezjvp.png",
              }}
              className="w-full h-full"
            />
          </View>
        </View>
        {isLoading ? (
          <ActivityIndicator size="large" color="gray" className="h-full" />
        ) : (
          <View className="flex-1 mx-8 mt-8">
            <FlatList
              data={exercises}
              renderItem={({ item }) => <ItemCard item={item} />}
              keyExtractor={(item) => item.title}
              numColumns={2}
              columnWrapperStyle={{ justifyContent: "space-between" }}
              scrollEnabled={false}
            />
          </View>
        )}
      </ScrollView>
      <TouchableOpacity
        className="absolute bottom-8 right-8 bg-red-900 px-4 py-4 rounded-full flex items-center justify-center"
        onPress={() => alert(`You clicked ${clickCount} times!`)}
      >
        <Text className="text-white font-bold text-2xl">{clickCount}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Home;
