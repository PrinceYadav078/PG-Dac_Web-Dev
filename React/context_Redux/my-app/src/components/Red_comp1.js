import React from 'react'
import { useSelector } from 'react-redux'

function Red_comp1() {
  const apidata=useSelector(state=> state)
  console.log(apidata)
  return (
    <div>
    <h1>C1 comp</h1>
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

export default Red_comp1
