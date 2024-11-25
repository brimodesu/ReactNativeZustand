import { Todo } from "@/app/domain/models/Todo";
import { router } from "expo-router";
import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

type Props = {
  todo: Todo;
  onRemove: (id: string) => void;
}

export const TodoItem: React.FC<Props> = ({ todo, onRemove }) => (
  <View style={styles.container}>
    <Text>{todo.title}</Text>
    <Button title="Remove" onPress={() => onRemove(todo.id)} />
    <Button title="Update" onPress={() => {
      router.push({ pathname: '/presentation/screens/UpdateTodo', params: { todoId: todo.id} })
    }}></Button>
  </View>
);

const styles = StyleSheet.create({
  container: { flexDirection: "row", justifyContent: "space-between", padding: 8 },
});
