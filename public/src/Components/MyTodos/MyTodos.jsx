import React from "react";
import AddTodo from "../AddTodo/AddTodo";
import TodoList from "../TodoList/TodoList";
import './MyTodos.css'

const MyTodos = () => {

    return (
        <div className="myTodos-container">
            <h1>My Todos</h1>
            <AddTodo />
            <TodoList />
        </div>
    )
}

export default MyTodos;