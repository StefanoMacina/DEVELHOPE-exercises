import React, { Component } from "react";
import Login from "./Login";


export class Form extends Component {
  state = {
    username: "",
    password: "",
  };

  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
    });
  };

  inputEmpty = () => {
    return this.state.username === ''  && this.state.password==='' || !this.state.username && this.state.password || this.state.username && !this.state.password
    
  }

  onLogin =() =>{
    console.log(this.state)
  }
  render() {
    return (
      <>
        <input
          type="text"
          name="username"
          placeholder="username"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={this.state.password}
          onChange={this.handleChange}
        />
        <Login isDisabled={this.inputEmpty()} onclick={this.onLogin}/>
      </>
    );
  }
}

export default Form;
