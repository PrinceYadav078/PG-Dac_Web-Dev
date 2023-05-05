import React, { useEffect, useState } from 'react'

function C1() {
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
      <h1>C1 comp</h1>
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

export default C1
