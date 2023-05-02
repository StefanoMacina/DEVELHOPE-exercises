import React from "react";
import ReactDOM from "react-dom";

class Welcome extends React.Component {
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


class Age extends React.Component{
    render(){
        return(
            <>
               <h1>Your age is {this.props.age}</h1> 
            </>
        )
    }
}


class App extends React.Component {
  render() {

    return (
      <>
        <Welcome age={30}/>
      </>
    );
  }
}




ReactDOM.render(<App />, document.getElementById('root'))