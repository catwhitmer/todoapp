import React, { Component } from 'react'

import Toggle from '../components/Toggle'
import Like from './Like'


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
        <li onClick ={this.handleClick}  className={this.state.done ? "done" : null}> {this.props.item} </li>
        <Toggle />
        <Like/>
      </div>
     )
  }
}

export default Item;