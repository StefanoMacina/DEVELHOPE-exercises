import React from "react";

export class Welcome extends React.Component {
  render() {
    const {name , age} = this.props
    return (
      <>
        <h1>Hi, {name}</h1>
        {this.props.age > 18 && <p>Your age is {age}</p>}
      </>
    );
  }
}
