import React, { Component } from 'react';
import './App.css';
import TodosContainer from './components/TodosContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
        <h1> My To-Dos</h1>
        </div>
        <TodosContainer />
      </div>
    );
  }
}

export default App;
