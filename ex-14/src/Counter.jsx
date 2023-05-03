import React from "react";

export class Counter extends React.Component {
  state = {
    counter : 0
  };

  constructor(props) {
    super(props)

    const id = setInterval(() => {
      this.setState({
       counter : this.state.counter += 1
      })
    }, 1000)
  }


  render() {
    return <h1>{this.state.counter}</h1>;
  }
}
