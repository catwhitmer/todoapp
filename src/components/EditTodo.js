import axios from 'axios';
import React from 'react';

class EditTodo extends React.Component {

  state = {
    notes: ''
  }

  handleClick() {
    
  }

  render() {
    return(
      <div>
        <button className={'EditButton'} onClick={this.handleClick}>Edit</button>       
      </div>
    )
  }
}

export default EditTodo;