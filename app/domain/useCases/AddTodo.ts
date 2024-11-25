import { Todo } from "../models/Todo";
import { TodoRepository } from "../repositories/TodoRepository"

export class AddTodo{
    constructor(private todoRepository: TodoRepository){}
    execute(todo: Todo): Todo[] {
        this.todoRepository.addTodo(todo);
        return this.todoRepository.getTodos();
    }

}