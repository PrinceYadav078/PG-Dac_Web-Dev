import React from 'react'
import { AppContext } from '../ContextApi'
import CompB from './CompB'
function CompA() {
  return (
    <div>
      <h1>CompA</h1>
      <hr/>
      <AppContext.Provider value="prince Yadav">
        <CompB/>
      </AppContext.Provider>
    </div>
  )
}

export default CompA
