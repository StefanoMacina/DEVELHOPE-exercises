import React, { Component } from "react";

export class MouseTracker extends Component {

  state = {
    position: [0, 0],
  };


  handleMouseMove = (e) => {
    const x = e.clientX;
    const y = e.clientY;

    this.setState({
      position: [x, y],
    });
  };


  render() {

    const [a,b] = this.state.position

    return <div className='currentPosition'  onMouseMove={this.handleMouseMove}>
        the current position is {a} {b}
        </div>;
  }
}

export default MouseTracker;
