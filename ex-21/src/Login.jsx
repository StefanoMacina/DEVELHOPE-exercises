import React, { Component } from 'react'

export class Login extends Component {
  render() {
    return (
      <button disabled={this.props.isDisabled} onClick={this.props.onClick}>LOGIN</button>
    )
  }
}

export default Login