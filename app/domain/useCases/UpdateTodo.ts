import {Todo} from "../models/Todo";
import {TodoRepository} from "../repositories/TodoRepository";

export class UpdateTodo {
    constructor(private todoRepository: TodoRepository) {
    }

    execute(todo: Todo) {
        this.todoRepository.updateTodo(todo);
        return this.todoRepository.getTodos();
    }
}