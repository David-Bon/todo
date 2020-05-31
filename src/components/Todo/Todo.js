import React from "react";
import classNames from 'classnames';

import './todo.css';

const Todo = (props) => {
    const { setToggleImportant } = props;
    return <ul className='todo-container'>
        {
            props.todo.map((item) => {
                const { text, id, done } = item;

                return <li className='todo' key={id}>
                    <span className={classNames('todo-text', {'done': done})} onClick={() => setToggleImportant(id)}>{text}</span>
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