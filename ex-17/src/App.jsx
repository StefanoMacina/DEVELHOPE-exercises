import React from "react";
import { Counter } from "./Counter";


export class App extends React.Component{
  render(){
    return(
      <>
      <Counter initialValue = {0} increment = {1} interval = {1000}/>
      </>
    )
  }
}