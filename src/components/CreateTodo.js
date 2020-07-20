import React from 'react'

class CreateTodo extends React.Component {

  state = {
    todo: ""
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.CreateTodo(this.state)
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Add Todo</label>
          <input type="text" name='todo' value={this.state.todo} onChange={this.handleChange} />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default CreateTodo