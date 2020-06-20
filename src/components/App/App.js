import React from 'react';
import './App.css';
import AppHeader from "../AppHeader/AppHeader";
import TodoContainer from "../Todo/Todo-container";
import NewItemContainer from "../NewTodoItem/NewTodoItem-container";

const App = () => {
  return (
      <div className='app'>
          <AppHeader/>
          <TodoContainer/>
          <NewItemContainer/>
      </div>
     );
};

export default App;
