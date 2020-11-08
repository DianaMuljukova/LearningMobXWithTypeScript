import React, {Component} from 'react';
import { TodoAdd } from './todo.add';
import{ TodoListComponent } from "./todo.list";

class App extends Component {
    render() {
        return (
            <div>
                <TodoAdd/>
                <TodoListComponent/>
            </div>
        )
    }

};

export default App;

