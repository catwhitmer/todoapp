import React, { Component } from 'react'

import Toggle from './Toggle'
import Like from './Like'


class Todo extends Component {
  
  state = {
    done: false,
  }
  
  handleClick = () => {
    this.setState({done: !this.state.done })
  }

  render() {
     return (
      <div>
        <p onClick ={this.handleClick}  className={this.state.done ? "done" : null}> {this.state.props} </p>
        <Toggle />
      </div>
     )
  }
}

export default Todo;