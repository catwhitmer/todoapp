import React, { Component } from 'react';
import Todo from './Todo';
import CreateTodo from './CreateTodo';
import axios from 'axios';


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

  render() {
    return (
      <div>
        <CreateTodo />
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