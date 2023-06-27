import React, { useContext } from 'react'
import Component3 from './Component3'
import { AppContext } from '../App'

const Component2 = () => {
  const info = useContext(AppContext)
  return (
    <div>
      <h1>{info} 2</h1>
      <Component3 />
    </div>
  )
}

export default Component2