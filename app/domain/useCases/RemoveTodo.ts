import { Todo } from "../models/Todo";
import { TodoRepository } from "../repositories/TodoRepository";

export class RemoveTodo{
    constructor(private todoRepository: TodoRepository){}

    execute(todoId: string): Todo[]{
        this.todoRepository.removeTodo(todoId);
        return this.todoRepository.getTodos();
    }
}