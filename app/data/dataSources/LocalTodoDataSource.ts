import { Todo } from "../../domain/models/Todo";

export class LocalTodoDataSource {
  private todos: Todo[] = [];

  getTodos(): Todo[] {
    return [...this.todos];
  }

  addTodo(todo: Todo): void {
    this.todos.push(todo);
  }

  removeTodo(todoId: string): void {
    this.todos = this.todos.filter((todo) => todo.id !== todoId);
  }

  updateTodo(updatedTodo: Todo): void {
    this.todos = this.todos.map(item => item.id === updatedTodo.id ? updatedTodo: item)
  }
  getTodoById(todoId: string): Todo | null{
    return this.todos.find(todo => todo.id === todoId) || null
  }
}
