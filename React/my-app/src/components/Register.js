import React from "react";
import { useRef } from "react";
function Register() {
  var x1=useRef()
  var x2=useRef()
  var x3=useRef()
  var x4=useRef()
  var x5=useRef()
  var x6=useRef()
  var x7=useRef()
  var x8=useRef()
  var x9=useRef()

  const adduser=()=>{
    var record={
      F_name:x1.current.value,
      L_name:x2.current.value,
      email:x3.current.value,
      password:x4.current.value,
      mobile:x5.current.value,
      address:x6.current.value,
      city:x7.current.value,
      state:x8.current.value,
      zip:x9.current.value,
    }
    // console.log(record);
    var final_rec=JSON.stringify(record)
    fetch("http://localhost:5000/insert_data",{
      method:"post",
      body:final_rec,
      headers:{
        "Content-Type":"application/JSON"
      }

    }).then(res=>res.json()).then(ansfromnode=>alert(ansfromnode))
  }
  return (
    <div>
      <div class="parent pt-5 " style={{ height: "100%" }}>
        <div
          class="container pt-2 pb-2 bg-info-subtle"
          style={{ "border-radius": "10px" }}
        >
          <h1 class="text-center">Enter Your Details</h1>
          {/* <!-- form start --> */}
          <div class="row g-3">
            <div class="col-6">
              <label for="inputFirstName" class="form-label">
                First Name
              </label>
              <input
                type="text"
                class="form-control"
                placeholder="First name"
                aria-label="First name"
                name="F_name"
                ref={x1}
              />
            </div>
            <div class="col-6">
              <label for="inputLastName" class="form-label">
                Last Name
              </label>
              <input
                type="text"
                class="form-control"
                placeholder="Last name"
                aria-label="Last name"
                name="L_name"
                ref={x2}
              />
            </div>
            <div class="col-md-6">
              <label for="inputEmail4" class="form-label">
                Email
              </label>
              <input
                type="email"
                class="form-control"
                id="inputEmail4"
                placeholder="Email"
                name="email"
                ref={x3}
              />
            </div>
            <div class="col-md-6">
              <label for="inputPassword4" class="form-label">
                Password
              </label>
              <input
                type="password"
                class="form-control"
                id="inputPassword4"
                placeholder="password"
                name="password"
                ref={x4}
              />
            </div>
            <div class="col-6">
              <label for="inputAddress" class="form-label">
                Mobile
              </label>
              <input
                type="text"
                class="form-control"
                id="inputmobile"
                placeholder="Mobile"
                name="mobile"
                ref={x5}
              />
            </div>
            <div class="col-6">
              <label for="inputAddress" class="form-label">
                Address{" "}
              </label>
              <input
                type="text"
                class="form-control"
                id="inputAddress"
                placeholder="Apartment, studio, or floor"
                name="address"
                ref={x6}
              />
            </div>
            <div class="col-md-6">
              <label for="inputCity" class="form-label">
                City
              </label>
              <input
                type="text"
                class="form-control"
                id="inputCity"
                name="city"
                ref={x7}
              />
            </div>
            <div class="col-md-4">
              <label for="inputState" class="form-label">
                State
              </label>
              <select name="state" id="inputState" class="form-select" ref={x8}>
                <option selected>Choose...</option>
                <option>Uttar Pradesh</option>
                <option>Delhi</option>
                <option>Maharashtra</option>
                <option>Madya Pradesh</option>
              </select>
            </div>
            <div class="col-md-2">
              <label for="inputZip" class="form-label">
                Zip
              </label>
              <input
                type="text"
                class="form-control"
                id="inputZip"
                name="zip"
                ref={x9}
              />
            </div>
            <div class="col-12">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="gridCheck"
                />
                <label class="form-check-label" for="gridCheck">
                  {" "}
                  Check me out{" "}
                </label>
              </div>
            </div>
            <div class="col-12 text-center">
              <button type="submit" class="btn btn-outline-primary btn-lg" onClick={adduser}>
                Register
              </button>
            </div>
          </div>
          {/* <!-- form end --> */}
        </div>
      </div>
    </div>
  );
}

export default Register;
