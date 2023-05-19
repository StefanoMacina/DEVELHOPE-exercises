import React, { useState } from 'react'

function Counter() {
    const [counter, setCounter] = useState(0)
    
  return (
    <div>
        <button onClick={() => setCounter((c) => c + 1) }>{counter}</button>
    </div>
  )
}

export default Counter