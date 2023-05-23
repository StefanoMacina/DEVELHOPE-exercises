import React from 'react'

function ButtonForm(props) {
  return (
    <div>
        <button type='submit'>LOGIN</button>
        <button>RESET</button>
        <button onClick={props.reset}>RESET</button>
    </div>
  )
}

export default ButtonForm