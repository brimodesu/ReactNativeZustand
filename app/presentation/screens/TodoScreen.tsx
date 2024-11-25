import React, { useEffect } from "react";
import { View, TextInput, Button, FlatList, StyleSheet } from "react-native";
import { useTodoStore } from "../stores/useTodoStore";
import { TodoItem } from "../components/TodoItem";
import { router } from "expo-router";

export const TodoScreen: React.FC = () => {
  const { todos, fetchTodos, addTodo, removeTodo,updateTodo } = useTodoStore();

  useEffect(() => {
    fetchTodos();
  }, []);

  const [newTodo, setNewTodo] = React.useState("");

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Add a new todo"
        value={newTodo}
        onChangeText={setNewTodo}
      />
      <Button title="Add Todo" onPress={() => { addTodo(newTodo); setNewTodo(""); }} />
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TodoItem todo={item} onRemove={removeTodo} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  input: { borderWidth: 1, padding: 8, marginBottom: 16, borderRadius: 4 },
});
