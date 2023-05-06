import React from 'react'
import { useSelector } from 'react-redux'

function Red_comp2() {
  const apidata=useSelector(state=>state)
  return (
    <div>
    <h1>C1 comp2</h1>
    <ul>
      {
          apidata.categ.map((catg)=>
              <li>{catg}</li>
             
          )
      }
    </ul>
  </div>
  )
}

export default Red_comp2
