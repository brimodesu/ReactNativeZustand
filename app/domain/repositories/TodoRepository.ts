import { Todo } from "../models/Todo";

export interface TodoRepository {
  getTodos(): Todo[];
  addTodo(todo: Todo): void;
  removeTodo(todoId: string): void;
  updateTodo(todo: Todo): void;
  getTodoById(todoId: string): Todo | null;
}
