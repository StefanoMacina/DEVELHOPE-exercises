import React from "react";

export class Clock extends React.Component {
  state = {
    date: new Date(),
  };

  constructor(props) {
    super(props);

    setInterval(() => {
      this.setState({
        date: new Date(),
      });
    }, 1000);
  }

  render() {
    return (
      <>
        <h1>It is {this.state.date.toLocaleTimeString()}</h1>
      </>
    );
  }
}
