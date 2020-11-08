import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {TodoStore} from "./todo.store";
import {Provider} from "mobx-react";


const todoStore: TodoStore = new TodoStore();

const store = {
    todoStore
};

ReactDOM.render(
    <Provider {...store}>
     <App/>
    </Provider>
 ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
