import React from "react";

export class Welcome extends React.Component {
  render() {
    const { name, age } = this.props;
    return (
      <>
        <h1>Hello, {name}</h1>
       { age && <p>Your age is {age}</p>}
      </>
    );
  }
}
