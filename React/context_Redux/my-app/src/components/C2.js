import React from 'react'
import { useState,useEffect } from 'react'
function C2() {
    var [data, Setdata]=useState([])
    const getdata=async()=>{
        const response=await fetch("https://fakestoreapi.com/products/categories")
        const data=await response.json()
        console.log(data)
        Setdata(data)
    }
    useEffect(()=>{
        getdata()
    },[])
  return (
    <div>
      <h1>C2 comp</h1>
      <ul>
        {
            data.map((catg)=>
                <li>{catg}</li>
               
            )
        }
      </ul>
    </div>
  )
}

export default C2
