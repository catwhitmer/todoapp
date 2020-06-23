import React, { Component } from 'react'
import { render } from '@testing-library/react';


class Item extends Component {
  
  state = {
    done: false
  }

  handleClick = () => {
    this.setState({done: !this.state.done })
  }
  
  //add item controlled form
  
  render() {
     return (
      <li onClick = {this.handleClick} className={this.state.done ? "done" : null}>{this.props.desc}</li>
     )
  }
}

export default Item;