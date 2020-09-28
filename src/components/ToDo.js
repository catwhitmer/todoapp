import React, { useState, useEffect } from 'react';
import Item from './Item';
import CreateTodo from './CreateTodo';


function ToDo() {

  const [ items, setItems ] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/v1/todos')
    .then (resp => resp.json())
    .then ((data) => {
      setItems(data.items)
    })
  }, [])


  return (
    <ul>
      <h2> My To-Dos </h2>
        
        <CreateTodo /> 
    </ul>
  )

}

export default ToDo;