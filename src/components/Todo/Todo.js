import React from "react";
import './todo.css';

const Todo = (props) => {
    return <ul className='todo-container'>
        {
            props.todo.map((item) => {
                return <li className='todo' key={item.id}>
                    {item.text}
                    <span className='btn-container'>
                        <button className='important-btn todo-btn'>!</button>
                        <button className='delete-btn todo-btn'>delete</button>
                    </span>

                </li>
            })
        }
    </ul>
};
export default Todo;