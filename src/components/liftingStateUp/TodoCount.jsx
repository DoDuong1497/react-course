import React from 'react'

function TodoCount({ todos }) {
  return (
    <div>
      Total todos: {todos.length}
    </div>
  )
}

export default TodoCount