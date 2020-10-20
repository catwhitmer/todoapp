import axios from 'axios'
import React from 'react'

class CreateTodo extends React.Component {

  state = {
    todo: ""
  }

  createTodo = () => {
    axios.post('http://localhost:3001/api/v1/todos', {  
        todo: {
          notes: ''
        }
      }
    )
    .then(resp => {
      console.log(resp)
    })
    .catch(error => console.log(error))
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.createTodo(this.state)
  }

  render() {
    return(
      <div>
        <form className={'CreateTodo'} onSubmit={this.handleSubmit}>
          <label>Add Todo</label>
          <input type="text" name='todo' value={this.state.todo} onChange={this.handleChange} />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default CreateTodo