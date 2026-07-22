import React from 'react'

const Condition3 = ({isLoggedIn}) => {
  let content;

  switch (isLoggedIn) {
    case true:
        <h1>Login Successfull</h1>
        break;
    case false:
        <h1>Login failed</h1>
        break;
    default:
        break;
  }
}

export default Condition3
