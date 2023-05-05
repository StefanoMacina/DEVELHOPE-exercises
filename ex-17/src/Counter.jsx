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
    setInterval(() => {
      this.setState(() => {
        return {
          count: this.state.count + this.props.increment,
        };
      });
    }, this.props.interval);
  }

  render() {
    return <CounterDisplay count={this.state.count} />;
  }
}
