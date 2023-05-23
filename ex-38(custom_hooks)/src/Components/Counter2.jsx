import React from 'react'
import { useCounter2 } from './useCounter2'

function Counter2({initialValue}) {
    const {count,onInc ,onDec, toReset} = useCounter2(initialValue)
  return (
    <div>
        <h2>{count}</h2>
        <button onClick={onInc}>INCREMENT</button>
        <button onClick={onDec}>DECREMENT</button>
        <button onClick={toReset}>RESET</button>
    </div>
  )
}

export default Counter2