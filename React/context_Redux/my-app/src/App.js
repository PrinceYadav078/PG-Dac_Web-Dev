import React from 'react'
import Header from './components/Headers'
import { Outlet } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
function App() {
  const dispatch=useDispatch()
  const getdata=async()=>{
    const response=await fetch("https://fakestoreapi.com/products/categories")
    const data=await response.json()
    // console.log(data)
    dispatch({type:"add",payload:data})
   
}
useEffect(()=>{
    getdata()
},[])
  return (
    <div>
      <Header/>
      <Outlet/>
    </div>
  )
}

export default App
