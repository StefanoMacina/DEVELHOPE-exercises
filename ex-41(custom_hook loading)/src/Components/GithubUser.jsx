import React from 'react'
import useGithubUser from '../Hooks/useGithubUser'

function GithubUser({username}) {
    const {data, loading, error} = useGithubUser(username)
  return (
    <div>
        {loading && <h1>Loading...</h1>}
        {data && <h1>{data.login}</h1>}
        {error && <h1>{error}</h1>}
    </div>
  )
}

export default GithubUser