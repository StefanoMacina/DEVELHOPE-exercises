import React, { Component } from "react";

export class UncontrolledLogin extends Component {
  render() {
    return (
      <>
        <button
          type="submit"
          disabled={this.props.isDisabled}
          // onClick={this.props.onclick}
        >
          LOGIN
        </button>
        <button name = 'reset' type='reset'>RESET</button>
      </>
    );
  }
}

export default UncontrolledLogin;
