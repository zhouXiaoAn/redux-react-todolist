import React, { Component } from 'react';
import Test from './components/Test'
import Header from './components/container/header'
import PropTypes from 'prop-types'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      color:'red'
    }
  }
  getChildContext() {
    return {
      color: this.state.color,
      name:'fafafs'
    }
  }
  static childContextTypes = {
    color: PropTypes.string,
    name: PropTypes.string
  }
  
  render() {
    console.log(this,"app")
    return (
      <div className="App">
        <Header />
      </div>
    )
  }
}

export default App;
