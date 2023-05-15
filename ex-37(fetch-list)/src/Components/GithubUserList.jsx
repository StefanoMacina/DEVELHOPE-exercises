import React, { useState } from 'react'
import GithubUser from './GithubUser'

function GithubUserList() {
    const[usernames, setUsernames] = useState([])
    const [val, setVal] = useState('')

    const handleInputChange= (e) => {
        setVal(e.target.value)
    }
    const handleNames = () => {
        setUsernames([...usernames, val])
        setVal('')
    }
  return (
    <>
    <input type="text" value={val} onChange={handleInputChange}/>
    <button onClick={handleNames}>SEARCH</button>
    <ul>
        {usernames.map((username) =>{
            return <GithubUser key={username} username={username} />
        })}
    </ul>
    </>
  )
}

export default GithubUserList