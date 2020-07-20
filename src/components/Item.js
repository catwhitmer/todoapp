import React, { Component } from 'react'

import Toggle from '../components/Toggle'


class Item extends Component {
  
  state = {
    done: false,
  }

  handleClick = () => {
    this.setState({done: !this.state.done })
  }

  render() {
     return (
      <div>
        <li onClick ={this.handleClick}> {this.state.done ? "done" : null} {this.props.item} </li>
        <Toggle />
      </div>
     )
  }
}

export default Item;