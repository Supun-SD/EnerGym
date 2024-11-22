import { View, Text, Image, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { increment } from "../redux/slices/counterSlice";

export default function ItemCard({ item }) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(increment());
  };

  function difficulty(difficulty) {
    if (difficulty === "Beginner") {
      return <Text className="text-green-300">{difficulty}</Text>;
    } else if (difficulty === "Intermediate") {
      return <Text className="text-orange-300">{difficulty}</Text>;
    } else if (difficulty === "Advanced") {
      return <Text className="text-red-300">{difficulty}</Text>;
    }
  }

  return (
    <TouchableOpacity
      onPress={handleClick}
      activeOpacity={0.8}
      className="bg-primary p-1 rounded-[20px] w-[48%] mb-4"
    >
      <View className="w-full h-40 flex items-center justify-center">
        <Image
          source={{
            uri: `${item.imageUrl}`,
          }}
          className="w-full h-full rounded-2xl"
        />
      </View>
      <View className="p-3">
        <Text className="text-white text-xl font-semibold">{item.title}</Text>
        {difficulty(item.difficulty)}
        <Text className="text-white mt-2 text-sm">{item.description}</Text>
      </View>
    </TouchableOpacity>
  );
}
