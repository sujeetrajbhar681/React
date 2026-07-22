import React from 'react'

const Condition1 = ({isLoggedIn}) => {
    if(isLoggedIn){
        return <h1>Login Successfull</h1>
    }else{
        return <h1>Login failed</h1>
    }
}

export default Condition1
