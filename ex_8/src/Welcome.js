import React from "react";
import { Age } from "./Age";


export class Welcome extends React.Component {
    static defaultProps = {
      name: "Stefano",
      age: 24,
    };
    render() {
      return (
        <>
          <h1>Welcome {this.props.name}</h1>
          <Age age={this.props.age}/>
        </>
      );
    }
  }