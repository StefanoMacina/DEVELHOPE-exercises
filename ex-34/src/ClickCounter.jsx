import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function ClickCounter({onCounterChange}) {
    const [count, setCount] = useState(0)

    useEffect(() => {
        onCounterChange(count)
    }, [count])

    const handleClick = () => {
        setCount((c) => {
            return c + 1
        })
    }
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={handleClick}>ADD TO COUNT</button>
    </div>
  )
}

export default ClickCounter