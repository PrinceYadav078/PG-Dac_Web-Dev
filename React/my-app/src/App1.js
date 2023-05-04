import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'

function App1() {
  return (
    <div>
      <Header/>
       <Outlet/>
      <Footer/>
    </div>
  )
}

export default App1
