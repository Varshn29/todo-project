import React, { useState } from "react";
import './AddTodo.css'
import { useDispatch } from "react-redux/es/exports";
import { addTodo } from "../../redux/Action/Action";

const AddTodo = () => {

    const [task, setTask] = useState('');
    const [description, setDescription] = useState('');

    const dispatch = useDispatch();

    const handleTask = (e) => {
        setTask(e.target.value);
    }

    const handleDescription = (e) => {
        setDescription(e.target.value);
    }

    return (
        <div className="addtodo-container">
            <div className="enter-details name">
                <label>Name</label>
                <input type={'text'} value={task} onChange={handleTask} />
            </div>
            <div className="enter-details description">
                <label>Description</label>
                <input type={"text"} value={description} onChange={handleDescription} />
            </div>
            <button className="btn-addtodo" onClick={() => dispatch(addTodo({ task, description }))}>Add Todo</button>
        </div>

    )
}

export default AddTodo;