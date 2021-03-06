import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import TodoList from './components/TodoList';
import InputTodo from './components/InputTodo';

function App() {
  return (
    <div className="container">
      <InputTodo />
      <TodoList />
    </div>
  );
}

export default App;
