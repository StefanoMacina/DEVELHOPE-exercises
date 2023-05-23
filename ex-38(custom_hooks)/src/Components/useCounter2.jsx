import React, { useState } from 'react'

export function useCounter2(initialValue = 0) {
    const [count2,setCount] = useState(initialValue)

    const handleIncrement = () => {
        setCount((c) => c + 1)
    }
    const handleDecrement = () => {
        setCount((c) => c - 1)
    }

    const handleReset = () => {
        setCount(899)
    }
  return {
    count: count2,
    onInc : handleIncrement,
    onDec : handleDecrement,
    toReset : handleReset
  }

}
