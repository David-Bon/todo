import React from 'react';
import './App.css';
import AppHeader from "../AppHeader/AppHeader";
import TodoContainer from "../Todo/Todo-container";

const App = () => {
  return (
      <div className='app'>
          <AppHeader/>
          <TodoContainer/>
      </div>
     );
};

export default App;
