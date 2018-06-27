import React, { Component } from 'react';
import Update from './components/update'
import Test from './components/Test'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Update />
        <Test />
      </div>
    );
  }
}

export default App;
