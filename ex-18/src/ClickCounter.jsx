import React, { Component } from "react";

export default class ClickCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  addToCounter = () =>{
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  render() {
    return (
      <>
        <h1>{this.state.counter}</h1>
        <button type="button" onClick={this.addToCounter}>
          increment
        </button>
      </>
    );
  }
}
