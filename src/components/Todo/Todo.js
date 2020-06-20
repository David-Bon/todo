import React from "react";
import classNames from 'classnames';
import './todo.css';
const Todo = (props) => {
    const { setToggleImportant, setToggleDone, onToggleDelete, todo } = props;
    debugger
    return <ul className='todo-container'>
        {
            todo.map((item) => {
                const { text, id, done, important } = item;

                return <li className='todo' key={id}>
                    <span className={classNames('todo-text', {'done': done, 'onImportant': important})} onClick={() => setToggleDone(id)}>{text}</span>
                    <span className='btn-container'>
                        <button className='important-btn todo-btn' onClick={() => setToggleImportant(id)}>!</button>
                        <button className='delete-btn todo-btn' onClick={() => onToggleDelete(id)}>delete</button>
                    </span>

                </li>
            })
        }
    </ul>
};
export default Todo;