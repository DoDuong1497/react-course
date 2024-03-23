import React from 'react'

import Button from './components/Button';
/*
  When the state changes, the component re-renders.
  state
  actions
  view

  How many way to component re-render?
  - State changes
  - Props changes
  - Parent component re-render
*/

function State() {
  // states
  const [count, setCount] = React.useState(1);
  const [error, setError] = React.useState('');
  const [message, setMessage] = React.useState({
    title: '',
    firstName: 'duong'
  }); // memory A

  // 1 === 2 -> false

  // actions
  function handleIncrement() {
    const newCount = count + 1; // number 2
    if(newCount > 5) {
      setError('Count is greater than 5');
      return;
    }
    // setCount(newCount); // update state

    // updater function
    setCount((prevState) => {
      return prevState + 1
    })
  }

  function handleUpdateMessage() {
    // message.title = `Tony ${Date.now()}`; // memory A
    // create a new object (new memory)
    // const newMessage = {
    //   ...message, // copy properties of the old object
    //   title: `Tony ${Date.now()}`
    // }
    // setMessage(newMessage);

    // updater function
    setMessage((prevState) => {
      return {
        ...prevState, // copy properties of the old object
        title: `Tony ${Date.now()}`
      }
    })
  }

  console.log('state: ', {
    message
  })

  // view
  return (
    <div>
      <h1>State</h1>

      This is {count} times. <br />
      {error} <br /><br />
      This is message title: {message.title} <br /> <br />

      <Button onClick={handleIncrement} text="Increment" />
      <Button onClick={handleUpdateMessage} text="Update message" />


      {/* <button onClick={handleIncrement}>Increment</button> */}
      {/* <button onClick={handleUpdateMessage}>Update message</button> */}
    </div>
  )
}

export default State;