import React from 'react'
import Condition1 from './Components/Condition1'
import Condition2 from './Components/Condition2'
import Condition3 from './Components/Condition3'
import Props from './Components/Props'
import UseState1 from './Components/UseState1'
import UseState2 from './Components/UseState2'
import ListRendering from './Components/ListRendering'

const App = () => {
  return (
    <div>
      <Props name='Jerry' age={22}/>
      <Condition1 isLoggedIn={true}/>
      <Condition2 isLoggedIn={true}/>
      <Condition3 isLoggedIn={true}/>
      <UseState1 />
      <UseState2/>
      <ListRendering/>
    </div>
  )
}

export default App
