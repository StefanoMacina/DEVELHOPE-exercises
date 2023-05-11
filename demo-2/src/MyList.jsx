import React, { Component } from "react";




export class MyList extends Component {
  render() {
    return (
      <div>
        <h1>names</h1>
        <ul>
          {this.props.names.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default MyList;
