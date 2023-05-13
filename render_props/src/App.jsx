import React from 'react'
import Wrapper from './Wrapper'
import Counter1 from './Components/Counter1'

function App() {
  return (
    <div>
        
        <Wrapper render = {(count, handleInc) => {
            return <Counter1 count={count} incCount={handleInc}/>
        }}/>
    </div>
  )
}

export default App