import React, { Component } from 'react'
import MyForm from './MyForm'


export class App extends Component {
  render() {
    return (
      <>
        {/* <h1>You choose a {this.props.car}</h1> */}
        < MyForm/>
      </>
    )
  }
}

export default App