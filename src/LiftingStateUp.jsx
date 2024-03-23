import React from 'react'

import DuongCard from './components/DuongCard'
import TodoForm from './components/liftingStateUp/TodoForm';
import TodoCount from './components/liftingStateUp/TodoCount';

function LiftingStateUp() {
  const [todos, setTodos] = React.useState([])

  function handleAdd(title) {
    const todoItem = {
      title, // shorthand
      id: Date.now()
    }
    setTodos([...todos, todoItem])
  }

  function handleDelete(todoId) {
    const newTodos = todos.filter(todo => todo.id !== todoId);
    setTodos(newTodos)
  }

  return (
    <div>
      <h1>LiftingStateUp</h1>
      
      <TodoForm handleAdd={handleAdd}/>

      <TodoCount todos={todos} />

      {todos.map((todo) => {
        return (
          <DuongCard 
            key={todo.id} 
            text={todo.title} 
            buttonText="Delete" 
            onClick={() => {
              handleDelete(todo.id)
            }}
          />
        )
      })}
      
     
    </div>
  )
}

export default LiftingStateUp