import React from 'react';
import Item from './Item';

class ToDo extends React.Component {

  state= {
      items: ['call mom', 'get groceries', 'do labs']
  }

  render() {
      return (
        <ul>
          {this.state.items.map(item => <Item desc= {item} />)}
        </ul>
      )
  }
}

export default ToDo;