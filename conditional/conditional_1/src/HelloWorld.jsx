import React from "react";

export class HelloWorld extends React.Component {
  render() {
    return (
      <div>
        
        {/* se il valore della props è passato, ed è true, viene renderizzato 'h1' */}
        {this.props.renderGreeting && <h1>conditionally rendered h1 from helloworld</h1>}
        <p>helloworld paragraph</p>
      </div>
    );
  }
}
