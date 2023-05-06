import React, { Component } from "react";

export class App extends Component {
  state = { 
    username: " " ,
    password : ' ',
    remember : true

  };

  handleInput = (e) => {
    const value = e.target.value
    const name = e.target.name
    const type = e.target.type
    const checked = e.target.checked
    console.log(value)

    this.setState({
      [name] :  type === 'checkbox' ? checked : value,
    })
  };

  componentDidUpdate(){
    console.log(this.state)
  }


  render() {
    return (
      <div>
        <input
          name="username"
          value={this.state.username}
          onChange={this.handleInput}
        ></input>
        <input
          name="password"
          type="password"
          value={this.state.password}
          onChange={this.handleInput}
        ></input>
        <input
          name="remember"
          type="checkbox"
          checked={this.state.remember}
          onChange={this.handleInput}
        ></input>
      </div>
    );
  }
}

export default App;
