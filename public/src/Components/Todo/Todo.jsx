import React from "react";
import './Todo.css';
import { useDispatch } from "react-redux";
import { completeTodo, deleteTodo } from "../../redux/Action/Action";

const Todo = ({ task, description, id, isComplete }) => {

    const dispatch = useDispatch();

    return (
        <div className="todo-container">
            <div className="enter-task" style={{ textDecoration: isComplete == true ? 'line-through' : '', color: isComplete == true ? 'grey' : '' }}>
                <h2 style={{ color: isComplete == true ? 'grey' : '' }}>{task}</h2>
                <p>{description}</p>
            </div>
            <div>
                <button className="btn complete" onClick={() => dispatch(completeTodo(id))}>Complete</button>
                <button className="btn delete" onClick={() => dispatch(deleteTodo(id))}>Delete</button>
            </div>
        </div >
    )
}

export default Todo;