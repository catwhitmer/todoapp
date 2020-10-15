import React, { Component } from 'react';
import Todo from './Todo';
//import CreateTodo from './CreateTodo';
import axios from 'axios';
import update from 'immutability-helper'
import TodoForm from './TodoForm'


class TodosContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }
  
  componentDidMount() {
     axios.get('http://localhost:3001/api/v1/todos')
      .then (response => {
        console.log(response)
        this.setState({data: response.data})
      })
      .catch(error => console.log(error))
  }

  createTodo = () => {
    axios.post(
      'http://localhost:3001/api/v1/todos',
      {  todo:
        {
          notes: ''
        }
      }
    )
    .then(resp => {
      console.log(resp)
    })
    .catch(error => console.log(error))
  }


  render() {
    return (
      <div>
        <button className='createTodo' onClick={this.createTodo}>New To Do</button>
        {this.state.data.map((todo) => {
          return(
            <div className='Todos-Container' key={todo.id} >
              <Todo todo={todo.notes} />
            </div>      
          )
        })}
     
      </div>
    )
  }
}

export default TodosContainer;