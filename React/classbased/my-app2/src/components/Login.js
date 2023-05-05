import React, { Component } from 'react'

export default class Login extends Component {
    constructor(){
        super()
        this.state={
            username: "prince",age:22
        }
    }
  render() {
    return (
      <div>
        <h1>Login Page</h1>
        <h3>{this.state.username}</h3>
        <h3>{this.state.age}</h3>
        
      </div>
    )
  }
}

