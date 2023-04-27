import React from "react";

export class Welcome extends React.Component {
  render() {
      return (
        <>
          <h1>Welcome, <p>{this.props.name}</p></h1>
        </>
      )
}
}
