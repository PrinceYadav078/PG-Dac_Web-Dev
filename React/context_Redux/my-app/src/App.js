import React from 'react'
import Header from './components/Headers'
import { Outlet } from 'react-router-dom'
function App() {
  return (
    <div>
      <Header/>
      <Outlet/>
    </div>
  )
}

export default App
