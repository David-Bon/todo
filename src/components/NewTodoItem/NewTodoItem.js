import React, {useState} from "react";
import "./NewTodoItem.css"

const NewTodoItem = (props) => {
    const [inputValue, setInputValue] = useState('');
   const {onAddItem} = props;
const addItem = (e) => {
    e.preventDefault();
    onAddItem(inputValue)
};
    return (<div className='NewTodoContainer'>
        <input className='itemText' value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
        <button onClick={(e) => addItem(e)} className='Add-btn'>Add</button>
    </div>)
};
export default NewTodoItem