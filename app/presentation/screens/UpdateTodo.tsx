import { View, Text, StatusBar, Button, TextInput, StyleSheet } from 'react-native';
import React from 'react';
import { router, Stack, useLocalSearchParams } from 'expo-router';
import { useTodoStore } from '../stores/useTodoStore';
import { Todo } from '@/app/domain/models/Todo';

export default function UpdateTodo() {
  const params = useLocalSearchParams();
  const { getTodoById, updateTodo } = useTodoStore();

  const todo = getTodoById(params.todoId?.toString() || "");

  const [updatedTodo, setUpdatedTodo] = React.useState<Todo | null>(todo || null);

  const handleSave = () => {
    if (updatedTodo) {
      updateTodo(updatedTodo);
      router.back();
    }
  };

  if (!todo) {
    return (
      <View style={styles.container}>
        <Text>No se encontró el Todo con el ID proporcionado.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: "Update Todo",
          headerRight: () => (
            <Text onPress={handleSave}>Save</Text>
          ),
        }}
      />
      <Text style={styles.label}>Update Todo</Text>
      <TextInput
        style={styles.input}
        placeholder="Update todo title"
        value={updatedTodo?.title}
        onChangeText={(text) =>
          setUpdatedTodo((prev) => (prev ? { ...prev, title: text } : null))
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  input: { borderWidth: 1, padding: 8, marginBottom: 16, borderRadius: 4 },
  label: { fontSize: 16, fontWeight: "bold", marginBottom: 8 },
});
