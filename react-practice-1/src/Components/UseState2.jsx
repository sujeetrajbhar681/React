import React, { useState } from 'react'

const UseState2 = () => {
    const [user,setUser] = useState({uname:'',upass:0})
  return (
    <div>
      Username:
      <input type="text" onChange={(e)=>setUser({...user,uname:e.target.value})}/>
      Password:
      <input type="number" onChange={(e)=>setUser({...user,upass:e.target.value})}/>
    </div>
  )
}

export default UseState2
