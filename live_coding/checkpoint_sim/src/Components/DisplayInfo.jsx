import React from 'react'

function DisplayInfo({el}) {

  return (
    <>
        <h5>username : {el.username}</h5>
        <h3>password : {el.password}</h3>
    </>
  )
}

export default DisplayInfo