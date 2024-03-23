import React from 'react'

function TodoForm({ handleAdd }) {
  const [title, setTitle] = React.useState('')

  function handleChangeTitle(e) {
    setTitle(e.target.value)
  }

  function _handleAdd() {
    console.log('title: ', title)
    handleAdd(title);
  }

  return (
    <div>
      Title: <input type="text" value={title} onChange={handleChangeTitle} />
      <button 
        type="button"
        onClick={_handleAdd}
      >
        Add
      </button>
    </div>
  )
}

export default TodoForm