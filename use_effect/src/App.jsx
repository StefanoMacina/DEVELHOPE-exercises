import React from 'react'
import Explanation from './Components/Explanation'
import Clock from './Components/Clock'
import Fetch from './Components/Fetch'
import Fetch2 from './Components/Fetch2'


function App() {
  return (
    <>
    <Explanation />
    <Clock />
    <Fetch2 username={'StefanoMacina'}/>
    {/* <Fetch username={'StefanoMacina'}/> */}

    </>
  )
}

export default App