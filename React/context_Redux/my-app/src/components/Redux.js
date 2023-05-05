import React from 'react'
import Red_comp1 from './Red_comp1'
import Red_comp2 from './Red_comp2'

function Redux() {
  return (
    <div className="container border border-black p-5 mt-5 " >
        <h1 className='text-center mb-3'>Example of Redux</h1>
        <hr/>
      <div className="row  " >
        <div className="col-6 ">
          <Red_comp1 />
        </div>
        <div className="col-6 ">
          <Red_comp2 />
        </div>
      </div>
    </div>
  )
}

export default Redux
