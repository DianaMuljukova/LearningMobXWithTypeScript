import {observable, action, reaction, computed, makeObservable} from 'mobx'

export interface Todo {
    task: string
    isComplete: boolean
}

export class TodoStore {
    todoList: Todo[] = [];

    constructor() {
        makeObservable(this, {
            todoList: observable,
            addTodo: action,
            completeTodo: action
        });
        reaction(
            () => this.todoList.filter(todo => !todo.isComplete),
            incompletedTasks => {
                if (incompletedTasks.length > 5) alert("Dude. You've got too much on your plate.")
            }
        )
    }

    @computed
    get completedTasks(): number {
        return this.todoList.filter(todo => todo.isComplete).length
    }

    addTodo(task: string) {
        this.todoList = [...this.todoList, {task, isComplete: false}]
    }

    completeTodo(completedTodo: Todo) {
        let todo = this.todoList.find(todo => todo === completedTodo);
        if (todo) {
            todo.isComplete = true
        }
    }
}

export const todoStore = new TodoStore()