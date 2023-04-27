import React from "react";
import ReactDOM from "react-dom";

class Welcome extends React.Component {
  static defaultProps = {
    name: "Stefano",
  };
  render() {
    return (
      <>
        <h1>Welcome {this.props.name}</h1>
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
        <Welcome />
        <Age age={36}/>
      </>
    );
  }
}




ReactDOM.render(<App />, document.getElementById('root'))