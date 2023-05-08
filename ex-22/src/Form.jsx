import React, { Component } from "react";
import Login from "./Login";

export class Form extends Component {
  state = {
    username: "",
    password: "",
    checkbox: false,
  };

  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const checked = e.target.checked;
    // this.setState({
    //   [name]:  name === 'checkbox' ? checked : value,
    // });
    if (name === "checkbox") {
      this.setState({ checkbox: checked });
    } else if (name === "username") {
      this.setState({ username: value });
    } else if (name === "password") {
      this.setState({ password: value });
    } else if (name === "reset") {
      this.setState({ username: "", password: "", checkbox: false });
      
    }
  };

  inputEmpty = () => {
    return (
      (this.state.username === "" && this.state.password === "") ||
      (!this.state.username && this.state.password) ||
      (this.state.username && !this.state.password)
    );
  };

  onLogin = () => {
    console.log(this.state);
  };
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
        <input
          type="checkbox"
          name="checkbox"
          checked={this.state.checkbox}
          onChange={this.handleChange}
        />

        <Login
          isDisabled={this.inputEmpty()}
          onclick={this.onLogin}
          reset={this.handleChange}
        />
      </>
    );
  }
}

export default Form;
