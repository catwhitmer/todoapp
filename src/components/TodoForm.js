import React, { Component } from 'react'
import axios from 'axios'

class TodoForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div className="tile">
        <form>
          <input className='input' type="text"
            name="notes" placeholder='Enter a Note' />
        </form>
      </div>
    );
  }
}

export default TodoForm