import { useRef, useState } from "react";
const Hooks = () => {
    var [count, SetCount]=useState(0)  // useState React Hook
    var [data1, SetData1]=useState()
    var [data2, SetData2]=useState()
    var [data3, SetData3]=useState("Ans:null")

    var x1=useRef()    // useRef React Hook
    var x2=useRef()
    var x3=useRef()

    // Multiply Function
    const fun=()=>{
        // console.log(x1);
        // console.log(x2);
        var dat1=x1.current.value
        var dat2=x2.current.value
        // console.log(dat1);
        // console.log(dat2);
        x3.current.innerText="ans: " +dat1*dat2
    }

    // Counter Function
    const fun2=()=>{
        SetCount(count+1)  // SetCount is a dispatch function to update the state      variables             
    }

    // Statevariable example function
    const fun3=(e)=>{
        // console.log(e.target.value);
        SetData1(e.target.value)
    }
    const fun4=(e)=>{
        // console.log(e.target.value);
        SetData2(e.target.value)
    }
    const fun5=()=>{
        SetData3("Ans:- " + data1*data2)
    }
  return (
    <div className="p-3">
        <h1>useRef Hooks</h1>
      <input type="text" placeholder="enter value 1" ref={x1}></input>
      <input type="text" placeholder="enter value 2" ref={x2}></input><br/>
      <p ref={x3} className="fw-bold"></p>
      <button className="btn btn-primary" onClick={fun}>Multiply</button>
      <hr/>

      <h1>useState Hooks</h1>
      <h1>{count}</h1>
      <button className="btn btn-primary" onClick={fun2}>Counter</button>
      <hr/>

      <h1>State Variable Example</h1>
      <input type="text" placeholder="enter value 1" onChange={fun3} ></input>
      <input type="text" placeholder="enter value 2" onChange={fun4}></input><br/>
      <p className="fw-bold">{data3}</p>
      <button className="btn btn-primary" onClick={fun5}>Multiply</button>
        <hr/>
    </div>
  );
};

export default Hooks;
