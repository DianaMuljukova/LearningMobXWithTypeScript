import React from "react";
import {Todo, TodoStore} from "./todo.store";
import {inject, observer} from "mobx-react";

interface TodoListItemProps {
    todo: Todo,
    todoStore?: TodoStore,
}

export const TodoListItem = inject('todoStore')(observer(({todo, todoStore}: TodoListItemProps) => {
    return (
        <div style={{display: 'flex'}}>
            <div style={{backgroundColor: todo.isComplete ? 'red' : ''}}>{todo.task}</div>
            {todoStore && <button onClick={() => todoStore.completeTodo(todo)}>Complete</button>}
        </div>
    )
}));