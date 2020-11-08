import React from "react";
import {inject, observer} from "mobx-react";
import {TodoStore} from "./todo.store";
import {TodoListItem} from "./todo.list.item";

interface TodoListProps {
    todoStore?: TodoStore
}

export const TodoListComponent = inject('todoStore')(observer(({todoStore}: TodoListProps) => {
    return (
        <>
        <div>
            {todoStore?.todoList.map((todo, i) => (
                <TodoListItem todo={todo} key={i}/>
            ))}
        </div>
    {todoStore?.completedTasks ? `Выполненых задач: ${todoStore?.completedTasks}` : ''}
    </>
    )
}));
