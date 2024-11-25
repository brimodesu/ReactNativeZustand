import { Text, View } from "react-native";
import { TodoScreen } from "@/app/presentation/screens/TodoScreen";
import { NavigationContainer } from "@react-navigation/native";
import { Stack } from "expo-router";

export default function Index() {
  return (
    <TodoScreen />
  );
}
