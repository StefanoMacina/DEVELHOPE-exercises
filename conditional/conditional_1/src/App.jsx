import { HelloWorld } from "./HelloWorld";
import React from "react";

export class App extends React.Component{
  render(){
    return(
      <div>
        <h1>App component h1 text</h1>
        <hr />
        <HelloWorld renderGreeting={0}/>
      </div>
    )
  }
}