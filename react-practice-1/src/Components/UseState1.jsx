import React, { useState } from 'react'

const UseState1 = () => {
    const [a,setA] = useState(10);
    const [title,setTitle] = useState('click me');
  return (
    <div>
      <h1>{a}</h1>
      <button onClick={()=>setA(a+1)}>Increment</button>
      <button onClick={()=>setTitle('click')}>{title}</button>
    </div>
  )
}

export default UseState1
