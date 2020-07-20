import React from 'react';
import Item from './Item';
import CreateTodo from './CreateTodo';

class ToDo extends React.Component {

  state= {
      items: ['call mom', 'get groceries', 'do labs']
  }

  render() {
      return (
        <ul>
          {this.state.items.map(item => <Item item= {item} />)}
          <CreateTodo /> 
        </ul>
      )
  }
}

export default ToDo;