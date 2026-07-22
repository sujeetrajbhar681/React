import React from 'react'

const Condition2 = ({isLoggedIn}) => {
  return (
    <div>
    {isLoggedIn ? <h1>Login Successfull</h1> : <h1>Try again..</h1>}
    {isLoggedIn && <h1>Home</h1>}
    </div>
  )
}

export default Condition2
