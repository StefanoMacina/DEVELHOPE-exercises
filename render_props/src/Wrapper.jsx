import React, { Component } from 'react'

export class Wrapper extends Component {
    state = {
        count : 0
    }

//incrementa il contatore (dal wrapper)
    incCount = () => {
        this.setState({
            count : this.state.count + 1
        })
    }

  render() {
    return (
      <div>
        {this.props.render(this.state.count, this.incCount)}
      </div>
    )
  }
}

export default Wrapper