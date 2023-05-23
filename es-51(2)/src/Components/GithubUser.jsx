import React, { useEffect, useState } from 'react';

function GithubUser({ username }) {
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        const data = await response.json();
        setUserData(data);
        setIsLoading(false);
      } catch (error) {
        console.error( error);
      }
    };

    fetchUserData();
  }, [username]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{userData.login}</h2>
    </div>
  );
}

export default GithubUser;