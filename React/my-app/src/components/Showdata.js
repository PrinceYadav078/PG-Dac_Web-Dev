import React from "react";
import { useEffect, useState } from "react";
function Showdata() {
  var [record, Setrecord] = useState([]);

  // getdata is asyncronous function is created for fetching api data and it is called in useEffect hook
  const getdata = async () => {
    const url = "http://localhost:5000/showuser"; // node data api
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);
    Setrecord(data);
  };
  // useEffect hook is used to fetch data from api
  useEffect(() => {
    getdata();
  }, []);
  return (
    <div>
      <h1 className="text-center">Show data from Node Js API</h1>
      <div
        class="parent pt-5 pb-2 bg-secondary bg-opacity-75 text-center "
        style={{ height: "100 %" }}
      >
        <h1 class="pb-2">User Information</h1>
        <div
          class="container bg-danger-subtle "
          style={{ "border-radius": "10px" }}
        >
          <table class="table table-danger ">
            <thead>
              <tr>
                <th scope="col">FirstName</th>
                <th scope="col">Lastname</th>
                <th scope="col">Email</th>
                <th scope="col">Password</th>
                <th scope="col">Mobile</th>
                <th scope="col">City</th>
                <th scope="col">State</th>
                <th scope="col">zip</th>
              </tr>
            </thead>
            <tbody>
              {record &&
                record.length > 0 &&
                record.map((user) => (
                  <tr>
                    <td>{user.F_name}</td>
                    <td>{user.L_name}</td>
                    <td>{user.email}</td>
                    <td>{user.password}</td>
                    <td>{user.mobile}</td>
                    <td>{user.city}</td>
                    <td>{user.state}</td>
                    <td>{user.zip}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Showdata;
