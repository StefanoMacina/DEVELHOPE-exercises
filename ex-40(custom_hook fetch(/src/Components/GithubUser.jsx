import React from "react";
import useGithubUser from "../Hooks/useGithubUser";



function GithubUser({ username }) {
  const {data} = useGithubUser(username)

  return(
    <>
      {data && data.login}
    </>
  )
  
    
  


}

export default GithubUser;
