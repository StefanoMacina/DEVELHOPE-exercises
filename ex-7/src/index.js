import React from "react";
import ReactDOM from "react-dom";

class Welcome extends React.Component {
  render() {
    const { name } = this.props
    return <div>Welcome, {name}</div>;
      
  }
}


class App extends React.Component {
  render() {
    return <Welcome name={<strong>ciao</strong>}/>;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
