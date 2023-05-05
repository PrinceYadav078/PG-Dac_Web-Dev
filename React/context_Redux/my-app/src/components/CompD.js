import React, { useContext } from 'react'
import { AppContext } from '../ContextApi'
function CompD() {
    var data=useContext(AppContext)

  return (
    <div>
      <h1>CompD  </h1>
      <h5>data from CompA:- {data} </h5>
    </div>
  )
}

export default CompD
