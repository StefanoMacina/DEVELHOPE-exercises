import React, { Component } from 'react'
// import Counter1 from './Counter1'
// import Counter2 from './Counter2'
import Wrapper from './Wrapper'

export class App extends Component {
  render() {
    return (
      <div>
        <Wrapper render={(count, incCount) => {
          return <Counter1 count={count} incCount={incCount}/>
        }}/>
      </div>
    )
  }
}

export default App