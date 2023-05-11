import React, { Component } from 'react'

export class Container extends Component {
  render() {
    return (
      <div className='container'>
        <div className='container-title'>{this.props.title}</div>
        {this.props.children}
      </div>
    )
  }
}

export default Container