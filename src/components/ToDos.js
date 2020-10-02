import React, { useState, useEffect } from 'react';
//import Item from './Item';
import CreateTodo from './CreateTodo';


class ToDos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    }
  }
  
  getTodos() {
     fetch('http://localhost:3001/api/v1/todos')
      .then (resp => resp.json())
      .then ((data) => {
        this.setState({todos: data.todos})
      })
      .catch(error => console.log(error))
  }


  componentDidMount() {
   this.getTodos()
  }

  render() {
    return (
      <div>
        <h1> My To-Dos </h1>
        <CreateTodo />
      </div>
    )
  }
}

export default ToDos;