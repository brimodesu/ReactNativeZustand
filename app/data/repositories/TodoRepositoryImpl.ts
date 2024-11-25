import { Todo } from "../../domain/models/Todo";
import { TodoRepository } from "../../domain/repositories/TodoRepository";
import { LocalTodoDataSource } from "../dataSources/LocalTodoDataSource";

export class TodoRepositoryImpl implements TodoRepository {
  constructor(private dataSource: LocalTodoDataSource) {
  }

  updateTodo(todo: Todo): void {
    return this.dataSource.updateTodo(todo)
  }

  getTodos(): Todo[] {
    return this.dataSource.getTodos();
  }

  addTodo(todo: Todo): void {
    this.dataSource.addTodo(todo);
  }

  removeTodo(todoId: string): void {
    this.dataSource.removeTodo(todoId);
  }
  getTodoById(todoId: string): Todo | null {
    return this.dataSource.getTodoById(todoId)
  }

}
