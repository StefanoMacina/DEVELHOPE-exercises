import React, { useState } from 'react'

function Wrapper({counter}) {
    const[count, setCount] = useState(0)

    const handleInc = () => {
        setCount(count + 1)
    }

  return (
    <div>
        {props.render(count, handleInc)}
    </div>
  )
}

export default Wrapper