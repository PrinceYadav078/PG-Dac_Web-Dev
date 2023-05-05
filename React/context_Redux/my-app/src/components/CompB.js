import React, { useContext } from 'react'
import CompC from './CompC'
import { AppContext } from '../ContextApi'
function CompB() {
    var data=useContext(AppContext)
    // console.log(data)
  return (
    <div>
        
      <h1>CompB</h1>
      <h3>Data from compA: {data} </h3>
      <hr/>
      <CompC/>
    </div>
  )
}

export default CompB
