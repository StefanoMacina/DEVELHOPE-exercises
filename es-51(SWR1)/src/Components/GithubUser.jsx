import React from 'react'
import { useGithubUsers } from './useGithubUsers'

function GithubUser({ username }) {
    const { users, isLoading } = useGithubUsers(username);
  
    if (users) {
      return <h1>{users.login}</h1>;
    } else if (isLoading) {
      return <p>Loading...</p>;
    } else if (error) {
      return <p>Error: {error.message}</p>;
    } else {
      return null;
    }
  }
  
  export default GithubUser;