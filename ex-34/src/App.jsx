import React from 'react'
import ClickCounter from './ClickCounter'

function App() {
  const handleCounterChange = (value) => {
    console.log(`the count is ${value}`)
  }
  return (
    <div>
      <ClickCounter onCounterChange={handleCounterChange}/>
    </div>
  )
}

export default App