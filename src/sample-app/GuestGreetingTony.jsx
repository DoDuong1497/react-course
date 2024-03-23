import React from 'react'

function GuestGreetingTony() {
  const [isAuth, setIsAuth] = React.useState(false);

  function toggleLogin() {
    console.log('toggleLogin: ', isAuth)
    setIsAuth(!isAuth)
  }

  console.log('render : ', isAuth)

  return (
    <div>
      <h1>Sample App: GuestGreetingTony</h1>

      <div>{isAuth ? 'Welcome back' : 'Please sign up'}</div>
      <button type="button" onClick={toggleLogin}>{isAuth ? 'Logout' : 'Login'}</button>
    </div>
  )
}

export default GuestGreetingTony