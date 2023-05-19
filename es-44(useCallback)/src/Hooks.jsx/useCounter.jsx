import React, { useCallback, useState } from 'react'

function useCounter() {
    const [counter, setCount] = useState(0)

    const handleIncrement = useCallback( () => {
        setCount((c) => c + 1)
    }, [])

    const handleDecrement = useCallback( () => {
        setCount((c) => c - 1)
    })

    const handleReset = useCallback( () => {
        setCount(0)
    })
    

  return {
    counter,
    handleIncrement,
    handleDecrement,
    handleReset
  }
}

export default useCounter