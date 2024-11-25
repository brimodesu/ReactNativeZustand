import { Todo } from "../models/Todo";
import { TodoRepository } from "../repositories/TodoRepository";

export class GetTodos{
    constructor(private todoRepository: TodoRepository){}

    execute(): Todo[]{
        return this.todoRepository.getTodos();
    }
}