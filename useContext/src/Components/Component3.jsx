import React, { useContext } from 'react'
import { AppContext } from '../App'

const Component3 = () => {

const state = useContext(AppContext)

  return (
    <>
        <h1>{state} 3 </h1>
    </>
  )
}

export default Component3