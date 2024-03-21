import React from 'react'

function Button({ text = 'Click me', onClick }) {
  return (
   <button type="button" onClick={onClick}>{text}</button>
  )
}

export default Button