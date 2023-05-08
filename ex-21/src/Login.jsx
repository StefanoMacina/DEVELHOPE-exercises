import React, { Component } from 'react'

export class Login extends Component {
  render() {
    return (
      <button type = 'submit' disabled={this.props.isDisabled} onClick={this.props.onclick}>LOGIN</button>
    )
  }
}

export default Login