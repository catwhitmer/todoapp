import axios from 'axios'
import React from 'react'

class CreateTodo extends React.Component {

  state = {
    notes: ''
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault();

    const todo = {
      notes: this.state.notes
    }
     
    axios
      .post('http://localhost:3001/api/v1/todos', todo)
      .then(resp => {
      console.log(resp)
      console.log(resp.data)
      window.location = "/todos" 
      this.setState({
            notes: ''
        })
    })
      .catch(error => console.log(error))
  }

  render() {
    return(
      <div>
        <form className={'CreateTodo'} onSubmit={e => this.handleSubmit(e)}>
          <label>Add Todo</label>
          <input type="text" name='notes' value={this.state.notes} onChange={this.handleChange} />
          <input className={'SubmitButton'} type="submit" />
        </form>
      </div>
    )
  }
}

export default CreateTodo