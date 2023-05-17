import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function useGithubUser(username) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    async function fetchData () {
        setLoading(true)
        try {
            const response = await fetch(`https://api.github.com/users/${username}`)
            const json = await response.json()
            setData(json)
            setLoading(false)
        } catch (error) {
            setError('Something went wrong')
            setLoading(false)
        } 
    }

    useEffect(() => {
        
        fetchData(username)
        
    },[username])
  return {
    data, loading, error
  }
}

export default useGithubUser