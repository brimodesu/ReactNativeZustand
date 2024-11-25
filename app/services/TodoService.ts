import { LocalTodoDataSource } from "../data/dataSources/LocalTodoDataSource";
import { TodoRepositoryImpl } from "../data/repositories/TodoRepositoryImpl";
import { AddTodo } from "../domain/useCases/AddTodo";
import { GetTodos } from "../domain/useCases/GetTodos";
import { RemoveTodo } from "../domain/useCases/RemoveTodo";
import { UpdateTodo } from "../domain/useCases/UpdateTodo";
import { GetTodoById } from "../domain/useCases/GetTodoById";

export class TodoService {
  private repository = new TodoRepositoryImpl(new LocalTodoDataSource());

  public getTodos = new GetTodos(this.repository);
  public addTodo = new AddTodo(this.repository);
  public removeTodo = new RemoveTodo(this.repository);
  public updateTodo = new UpdateTodo(this.repository);
  public getTodoById = new GetTodoById(this.repository);
}
