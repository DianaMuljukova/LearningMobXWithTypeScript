import React from 'react'
import { observer, inject, useLocalObservable } from 'mobx-react'

import { TodoStore } from './todo.store'

interface TodoAddProps {
    todoStore?: TodoStore
}

export const TodoAdd = inject('todoStore')(observer(({ todoStore }: TodoAddProps) => {
    const todo = useLocalObservable(() => ({
        task: '',
        handleTaskChange(event: React.ChangeEvent<HTMLInputElement>) {
            this.task = event.target.value
        }
    }));

    return (
        <div>
            <input type="text" onChange={todo.handleTaskChange} value={todo.task}/>
            <button onClick={() => {
                todoStore?.addTodo(todo.task);
                todo.task = ''
            }}>Добавить</button>
        </div>
    );
}));