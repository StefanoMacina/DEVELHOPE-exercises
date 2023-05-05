import React from "react";
import { CounterDisplay } from "./CounterDisplay";

export class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.initialValue,
    };
  }

  
  componentDidMount() {
    this.id = setInterval(() => this.tick(), this.props.interval);
  }
  
  componentWillUnmount() {
    clearInterval(this.id);
  }

  tick() {
    this.setState((state, props) => {
      return {
        count : state.count + props.increment
      }
    })
  }
  
  
  render() {
    return <CounterDisplay count={this.state.count} />;
  }
}

// componentDidMount() {
//   setInterval(() => {
//     this.setState((state, props) => {
//       return {
//         count: state.count + props.increment,
//       };
//     });
//   }, this.props.interval);
// }