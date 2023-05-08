import React, { Component } from "react";

export class Login extends Component {
  render() {
    return (
      <>
        <button
          type="submit"
          disabled={this.props.isDisabled}
          onClick={this.props.onclick}
        >
          LOGIN
        </button>
        <button name = 'reset' onClick={this.props.reset}>RESET</button>
      </>
    );
  }
}

export default Login;
