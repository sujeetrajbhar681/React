import React from 'react'

const ListRendering = () => {
    const emps = [
      {id:1,name:'tom'},
      {id:2,name:'jerry'},
      {id:3,name:'herry'},
    ]
  return (
    <div>
      <ul>
        {
          emps.map((emp)=>(
            <li key={emp.id}>{emp.id} --{emp.name}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default ListRendering
