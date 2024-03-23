import React from 'react'

/*
- Inline If with Logical &&, || Operator
    &&: side left & side right -> left = true -> get value of side right
- Inline If-Else with Conditional Operator
- Element Variable
- Function
*/

function ConditionalRendering() {
  // states
  const [count, setCount] = React.useState(0);
  // variables
  let section = null;

  // console.log('&&: ', true && 'truong');
  // console.log('&&: ', 'truong' && 'tony'); // true && 'tony' -> 'tony'
  console.log('ConditionalRendering', count); 
  if(count > 5) {
    section = (
      <div>this is element variable</div>
    )
  }

  // actions
  function handleIncrement() {
    setCount(count + 1);
  }

  // view
  return (
    <div>
      <h1>ConditionalRendering</h1>
      <br />
      You click {count} times. <br />
      &&: {count > 5 && 'You reach out maxium'} <br />
      ||: {count > 3 || 'Please click continue'} <br />
      tenary operator: {count > 3 ? 'please click so far' : 'please click me'} <br />
      element variable: {section}
      <br /><br />
      

      <button type="button" onClick={handleIncrement}>Increment</button>
    </div>
  )
}

export default ConditionalRendering