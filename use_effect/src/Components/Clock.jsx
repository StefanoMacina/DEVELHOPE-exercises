import React, { useEffect, useState } from 'react'

function Clock() {
  const [count, setCount] = useState(new Date())

  useEffect(() => {
    const time = setInterval(() => {
      setCount(new Date())
    }, 1000);
    return () => clearInterval(time)
  })


  return (
    <div>{count.toLocaleTimeString()}</div>
  )
}

export default Clock