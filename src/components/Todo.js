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
        <h4 onClick ={this.handleClick}  className={this.state.done ? "done" : null}> {this.props.todo}</h4>  
      </div>
     )
  }
}

export default Todo;