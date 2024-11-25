import { Todo } from "@/app/domain/models/Todo";
import { TodoService } from "@/app/services/TodoService";
import { create } from "zustand";
import * as Crypto from 'expo-crypto';

interface TodoState {
    todos: Todo[];
    fetchTodos: () => void;
    addTodo: (title: string) => void;
    removeTodo: (id: string) => void;
    updateTodo: (todo: Todo) => void;
    getTodoById: (todoId: string) => Todo | null;
}

export const useTodoStore = create<TodoState>((set) => {
    const todoService = new TodoService();
    return {
        todos: [],
        fetchTodos: () => {
            const todos = todoService.getTodos.execute();
            set({ todos })
        },
        addTodo: (title) => {
            const newTodo: Todo = { id: Crypto.randomUUID(), title }
            const todos = todoService.addTodo.execute(newTodo)
            set({ todos })
        },
        removeTodo: (id) => {
            const todos = todoService.removeTodo.execute(id)
            set({ todos })
        },
        updateTodo: (todo) => {
            const todos = todoService.updateTodo.execute(todo);
            set({todos})
        },
        getTodoById: (id) => {
            const todos = todoService.getTodos.execute();
            return todos.find((todo) => todo.id === id) || null;
        }

    }
})