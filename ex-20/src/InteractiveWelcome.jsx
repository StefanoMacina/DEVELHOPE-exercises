import React, { Component } from "react";
import Welcome from "./Welcome";

export class InteractiveWelcome extends Component {
  state = {
    username: "",
  };

  handleInput = (e) => {
    const value = e.target.value;
    this.setState({
      username: value,
    });
  };

  
  render() {
    return (
      <div>
        <Welcome name={this.state.username} />
        <input value={this.state.username} onChange={this.handleInput}></input>
      </div>
    );
  }
}

export default InteractiveWelcome;
