import { Todo } from "../models/Todo";
import { TodoRepository } from "../repositories/TodoRepository";

export class GetTodoById {
    constructor(private todoRepository: TodoRepository) {
    }

    execute(todoId: string): Todo | null {
        return this.todoRepository.getTodoById(todoId);
    }
}