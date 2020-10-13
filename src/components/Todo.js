import React, { Component } from 'react'


class Todo extends Component {
  
  state = {
    done: false
  }

  handleClick = () => {
    this.setState({done: !this.state.done })
  }

  render() {
     return (
      <div>
        <p onClick ={this.handleClick}  className={this.state.done ? "done" : null}> {this.props.todo}</p>  
      </div>
     )
  }
}

export default Todo;