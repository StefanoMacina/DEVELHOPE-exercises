
import { useState } from 'react';
import { useEffect } from "react";

function useGithubUser(username) {
  const [data, setData] = useState(null);


  async function fetchGithubUser(username) {
    try {
      const response = await fetch(`https://apgithub.com/users/${username}`);
      const json = await response.json();
      setData(json);
      setLoading(false)
    } catch (error) {
      console.log(error.name);
    }
  }


  useEffect(() => {
    fetchGithubUser(username);
  }, []);

  return {
    data
  
  }
    
  
}

export default useGithubUser