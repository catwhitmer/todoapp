import React, { useState, useEffect } from 'react';
//import Item from './Item';
import CreateTodo from './CreateTodo';


function ToDos() {

  const [ todos, setTodos ] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/v1/todos')
    .then (resp => resp.json())
    .then ((data) => {
      setTodos(data.todos)
    })
  }, [])

  return (
    <div>
      <h2> My To-Dos </h2>
       
      <CreateTodo /> 
    </div>
  )

}

export default ToDos;