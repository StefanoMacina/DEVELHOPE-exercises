import React, { useContext } from 'react'
import { AppContext } from '../App'
import Component2 from './Component2'



const Component1 = () => {
 const info = useContext(AppContext)
  return (
    <>
      <Component2 />
      <h1>{info} 1 </h1>
    </>
  )
}

export default Component1