import React, { Component } from "react";

export class MyForm extends Component {
  state = {
    username: "",
    password: "",
    remember: false,
  };

  handleChange = (e) => {
    console.log(e.target.value);
    const name = e.target.name;
    const value = e.target.value;
    const type = e.target.type;
    const checked = e.target.checked;

    this.setState({
      [name]: type === "checkbox" ? checked : value,
    });
  };

  handleReset = () => {
    this.setState({
      username: "",
      password: "",
      remember: false,
    });
  };

  handlePrefill = () => {
    this.setState({
      username: "jimmy",
      password: "hello",
      remember: true,
    });
  };
  componentDidUpdate() {
    console.log(this.state);
  }

  render() {
    return (
      <div className="form-control">
        <div>
          <button className="btn" onClick={this.handleReset}>
            RESET
          </button>
          <button className="btn" onClick={this.handlePrefill}>
            PREFILL
          </button>
        </div>
        <label htmlFor="username">Username</label>
        <input
          name="username"
          placeholder="username"
          onChange={this.handleChange}
          value={this.state.username}
        />

        <label htmlFor="password">Password</label>
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={this.handleChange}
          value={this.state.password}
        />

        <label htmlFor="checkbox">checkbox</label>
        <input
          name="remember"
          type="checkbox"
          checked={this.state.remember}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default MyForm;
