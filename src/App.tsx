import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './Todolist'

function App() {
  return (
    <TodoList name={'Gregorio Y. Zara'} 
    theme={{
      backgroundColor: 'black',
      color: 'white'
    }}/>
  );
}

export default App;