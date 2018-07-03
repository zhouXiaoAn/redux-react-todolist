import React, { Component } from 'react';
import Test from './components/Test'
import TodoList from './components/todoList'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Test />
        <TodoList />
      </div>
    );
  }
}

export default App;
