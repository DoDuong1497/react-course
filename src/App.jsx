import React from 'react';

/* react fucntion component
  - Name of the function should start with a capital letter. Eg: Button, App, Header, ProdctList ...
  - It should return a single JSX element
*/

import Props from './Props';

function App() {
  const total = 100 + 200;

  // expression JSX
  const renderExpression = (
    <h5>Example expression {5 + 5}</h5>
  )
  
  function renderButton() {
    return (
      <button>Click me</button>
    )
  }

  const renderProductList = (
    <>
      <li>Title: iphone</li>
      <li>Title: iphone</li>
      <li>Title: iphone</li>
      <li>Title: iphone</li>
    </>
  )

  // return a single JSX element
  return (
    <div>
      <h3>Expression JSX</h3>
      {renderExpression}
      {total}

      <h3>Function return JSX</h3>
      {renderButton()}

      <h3>One top level element</h3>
      <ul>
        {renderProductList}
      </ul>

      <h1>Props</h1>
      <Props 
        name="tony" // string
        isStudent={false} // boolean
        address={{
          city: 'Hanoi',
          country: 'Vietnam'
        }} // object
      />

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  )
}

export default App
